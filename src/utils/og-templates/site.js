import satori from "satori";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { SITE } from "@/config";

// Brand fonts (Latin subsets from the Avail Africa kit) — no network fetch at build time.
const font = file =>
  readFile(path.join(process.cwd(), "src/assets/fonts", file));

const el = (type, style, children) => ({ type, props: { style, children } });

export default async () => {
  const [display, body, bodyBold] = await Promise.all([
    font("BricolageGrotesque-800.ttf"),
    font("Inter-400.ttf"),
    font("Inter-700.ttf"),
  ]);

  return satori(
    el(
      "div",
      {
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#FFF7EE",
        position: "relative",
        fontFamily: "Inter",
      },
      [
        // Ring motif
        el("div", {
          position: "absolute",
          top: -190,
          right: -170,
          width: 560,
          height: 560,
          borderRadius: 9999,
          border: "90px solid rgba(255,91,35,0.12)",
        }),
        el(
          "div",
          {
            display: "flex",
            flexDirection: "column",
            padding: "72px 80px",
            width: "100%",
          },
          [
            el(
              "div",
              {
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontSize: 22,
                fontWeight: 700,
                color: "#C2380A",
                letterSpacing: 3,
              },
              [
                el("div", {
                  width: 14,
                  height: 14,
                  borderRadius: 9999,
                  background: "#FF5B23",
                }),
                "SOFTWARE ENGINEER × ATHLETE",
              ]
            ),
            el(
              "div",
              {
                display: "flex",
                marginTop: 34,
                fontFamily: "Bricolage Grotesque",
                fontWeight: 800,
                fontSize: 104,
                lineHeight: 1,
                letterSpacing: -3,
                color: "#15122E",
              },
              SITE.author
            ),
            el(
              "div",
              {
                display: "flex",
                marginTop: 28,
                fontSize: 34,
                lineHeight: 1.35,
                color: "#4D4A66",
                maxWidth: 900,
              },
              "Backend, data & AI systems — built with the discipline competitive sport demands."
            ),
            el(
              "div",
              {
                display: "flex",
                marginTop: "auto",
                alignItems: "center",
                gap: 18,
                fontSize: 26,
                fontWeight: 700,
                color: "#15122E",
              },
              [
                el(
                  "div",
                  {
                    display: "flex",
                    background: "#15122E",
                    color: "#FFF7EE",
                    padding: "12px 24px",
                    borderRadius: 9999,
                  },
                  new URL(SITE.website).hostname
                ),
                el(
                  "div",
                  { display: "flex", color: "#4D4A66", fontWeight: 400 },
                  "Founder & CEO, Avail Africa"
                ),
              ]
            ),
          ]
        ),
        el("div", {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 14,
          background: "#FF5B23",
        }),
      ]
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Bricolage Grotesque",
          data: display,
          weight: 800,
          style: "normal",
        },
        { name: "Inter", data: body, weight: 400, style: "normal" },
        { name: "Inter", data: bodyBold, weight: 700, style: "normal" },
      ],
    }
  );
};
