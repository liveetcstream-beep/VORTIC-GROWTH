import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot",
          "Amazonbot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.vorticgrowth.com/sitemap.xml",
  };
}

