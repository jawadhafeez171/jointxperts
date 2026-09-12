import type { MetadataRoute } from "next";
import { conditionCategories } from "@/data/conditions";
import { blogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jointxperts.in";
  const currentDate = new Date();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Condition category pages (/conditions/[category])
  const categoryPages: MetadataRoute.Sitemap = conditionCategories.map((category) => ({
    url: `${baseUrl}/conditions/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Individual condition detail pages (/conditions/[category]/[condition])
  const conditionPages: MetadataRoute.Sitemap = conditionCategories.flatMap((category) =>
    category.conditions.map((condition) => ({
      url: `${baseUrl}/conditions/${category.slug}/${condition.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    }))
  );

  // Blog post pages (/blog/[slug])
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => {
    let postDate = currentDate;
    if (blog.date) {
      const parsed = new Date(blog.date);
      if (!isNaN(parsed.getTime())) {
        postDate = parsed;
      }
    }

    return {
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: postDate,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticPages, ...categoryPages, ...conditionPages, ...blogPages];
}
