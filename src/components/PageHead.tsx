import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface PageHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  jsonLd?: object[];
  breadcrumbs?: BreadcrumbItem[];
}

function buildBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prostatemiracle.com/" },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 2,
        "name": item.name,
        "item": `https://prostatemiracle.com${item.path}`,
      })),
    ],
  };
}

export const PageHead = ({ title, description, canonicalPath, jsonLd, breadcrumbs }: PageHeadProps) => {
  const allSchemas = [
    ...(jsonLd || []),
    ...(breadcrumbs ? [buildBreadcrumbSchema(breadcrumbs)] : []),
  ];
  useEffect(() => {
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }

    // Canonical
    const canonicalUrl = `https://prostatemiracle.com${canonicalPath}`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = canonicalUrl;
    } else {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // Sitemap
    let sitemap = document.querySelector('link[rel="sitemap"]') as HTMLLinkElement | null;
    if (!sitemap) {
      sitemap = document.createElement("link");
      sitemap.rel = "sitemap";
      sitemap.type = "application/xml";
      sitemap.href = "/sitemap.xml";
      document.head.appendChild(sitemap);
    }

    // JSON-LD
    const scriptIds: string[] = [];
    allSchemas.forEach((schema, i) => {
      const id = `json-ld-${i}`;
      scriptIds.push(id);
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    });

    // OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

    return () => {
      // Clean up JSON-LD scripts
      scriptIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, [title, description, canonicalPath, jsonLd]);

  return null;
};
