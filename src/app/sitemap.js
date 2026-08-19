const baseUrl = "https://rohinihomes.in";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about-us/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/gallery/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
