// src/pages/api/instagram.ts
import type { APIRoute } from "astro";

interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  timestamp: string;
  thumbnail_url?: string;
}

interface InstagramResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

// Simple in-memory cache
let cachedData: { posts: InstagramPost[]; timestamp: number } | null = null;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

export const GET: APIRoute = async () => {
  const accessToken = import.meta.env.INSTAGRAM_ACCESS_TOKEN;

  // Check if access token is configured
  if (!accessToken) {
    return new Response(
      JSON.stringify({
        error: "Instagram integration not configured",
        message: "INSTAGRAM_ACCESS_TOKEN environment variable is not set",
        posts: [],
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600",
        },
      }
    );
  }

  // Check cache
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION_MS) {
    return new Response(
      JSON.stringify({ posts: cachedData.posts, cached: true }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600",
        },
      }
    );
  }

  try {
    // Instagram Basic Display API endpoint
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink,timestamp,thumbnail_url&access_token=${accessToken}&limit=6`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data: InstagramResponse = await response.json();

    // Transform and filter posts (only images for display)
    const posts = data.data.map((post) => ({
      id: post.id,
      caption: post.caption?.slice(0, 150) || "",
      imageUrl: post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url,
      permalink: post.permalink,
      timestamp: post.timestamp,
    }));

    // Update cache
    cachedData = { posts: data.data, timestamp: Date.now() };

    return new Response(JSON.stringify({ posts, cached: false }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Instagram API error:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to fetch Instagram posts",
        message: error instanceof Error ? error.message : "Unknown error",
        posts: [],
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300",
        },
      }
    );
  }
};
