export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://grace-balogun.vercel.app/sitemap.xml",
  };
}
