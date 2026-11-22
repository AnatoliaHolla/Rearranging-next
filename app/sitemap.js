const BASE = "https://raeganholladay.com";

const routes = [
  { path: "", priority: 1.0 },
  { path: "/iep-advocacy", priority: 0.9 },
  { path: "/iep-special-education-courses-for-parents", priority: 0.8 },
  { path: "/free-resources", priority: 0.8 },
  { path: "/about-raegan-holladay-iep-advocate", priority: 0.7 },
  { path: "/faqs-iep-meaning", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
