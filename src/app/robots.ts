import { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: `${absoluteUrl}/sitemap.xml`, // Replace with your actual domain
  };
}
