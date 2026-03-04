// src/pages/api/instagram.ts
// Instagram Basic Display API endpoint with server-side caching

import type { APIRoute } from "astro";

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

interface CachedData {
  posts: InstagramPost[];
  timestamp: number;
}

// Simple in-memory cache (1 hour TTL)
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds
let cache: CachedData | null = null;

async function fetchInstagramPosts(limit: number): Promise<InstagramPost[]> {
  const accessToken = import.meta.env.INSTAGRAM_ACCESS_TOKEN;
  
  if (!accessToken) {
    console.error("INSTAGRAM_ACCESS_TOKEN not configured");
    return [];
  }
  
  // Check cache first
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return cache.posts.slice(0, limit);
  }
  
  try {
    const fields = "id,media_type,media_url,permalink,caption,timestamp";
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}&limit=20`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }
    
    const data = await response.json();
    const posts: InstagramPost[] = data.data || [];
    
    // Filter out videos (optional - keep only images)
    const imagePosts = posts.filter(
      (post) => post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
    );
    
    // Update cache
    cache = {
      posts: imagePosts,
      timestamp: Date.now(),
    };
    
    return imagePosts.slice(0, limit);
  } catch (error) {
    console.error("Failed to fetch Instagram posts:", error);
    
    // Return cached data if available, even if stale
    if (cache) {
      return cache.posts.slice(0, limit);
    }
    
    return [];
  }
}

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get("limit") || "6", 10);
  const clampedLimit = Math.min(Math.max(limit, 1), 20);
  
  try {
    const posts = await fetchInstagramPosts(clampedLimit);
    
    if (posts.length === 0) {
      return new Response(JSON.stringify({ error: "No posts available" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600", // Cache for 1 hour
        },
      });
    }
    
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Instagram API route error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
