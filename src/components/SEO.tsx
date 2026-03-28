import { useEffect } from "react";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  publishedDate?: string;
}

const SEO = ({ title, description, canonical, type = "website", publishedDate }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", `${title} | ${SITE_NAME}`, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:site_name", SITE_NAME, true);

    if (canonical) {
      setMeta("og:url", `${SITE_URL}${canonical}`, true);
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = `${SITE_URL}${canonical}`;
    }

    // JSON-LD
    let script = document.getElementById("json-ld") as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = "json-ld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const jsonLd: any = type === "article" ? {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      datePublished: publishedDate,
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    } : {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description,
    };

    script.textContent = JSON.stringify(jsonLd);

    return () => {
      const el = document.getElementById("json-ld");
      el?.remove();
    };
  }, [title, description, canonical, type, publishedDate]);

  return null;
};

export default SEO;
