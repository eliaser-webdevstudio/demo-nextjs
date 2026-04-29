import { MetadataRoute } from "next";
import { blogPosts } from "./blog/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tradepro.com";

  const routes = ["", "/about", "/contact", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogPostsUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogPostsUrls];
}
