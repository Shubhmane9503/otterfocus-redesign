/**
 * Quiet Terrain SEO map: factual, readable entity signals for every static Otterfocus route.
 * Each page’s metadata is rendered at build time alongside its complete editorial HTML body.
 */
import { pageMeta, site } from "@/lib/site";

const canonicalHost = "https://otterfocus.co";

type JsonLd = Record<string, unknown>;

export type StaticPage = {
  path: string;
  title: string;
  description: string;
  schema: JsonLd[];
};

const professionalService: JsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "Photographer"],
  name: site.name,
  description: "Faith-rooted wedding, event, nature, landscape, wildlife, and fine-art print photography by Armand Arnau.",
  url: canonicalHost,
  founder: { "@type": "Person", name: site.photographer, jobTitle: "Photographer" },
  address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV", addressCountry: "US" },
  areaServed: { "@type": "City", name: "Las Vegas" },
  sameAs: [site.instagram, site.youtube],
  knowsAbout: ["Wedding photography", "Event photography", "Nature photography", "Landscape photography", "Wildlife photography", "Fine-art photography"],
};

const webPage = (path: string, title: string, description: string): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: `${canonicalHost}${path}`,
  about: { "@type": "Thing", name: "Otterfocus Photography" },
});

export const staticPages: StaticPage[] = [
  { path: "/", ...pageMeta.home, schema: [professionalService, webPage("/", pageMeta.home.title, pageMeta.home.description)] },
  { path: "/about", ...pageMeta.about, schema: [professionalService, webPage("/about", pageMeta.about.title, pageMeta.about.description)] },
  { path: "/weddings-events", ...pageMeta.weddings, schema: [professionalService, webPage("/weddings-events", pageMeta.weddings.title, pageMeta.weddings.description), { "@context": "https://schema.org", "@type": "Service", name: "Wedding and Event Photography", description: "Considered wedding and event photography by Las Vegas photographer Armand Arnau of Otterfocus.", areaServed: { "@type": "City", name: "Las Vegas" }, provider: { "@type": "ProfessionalService", name: site.name, url: canonicalHost } }] },
  { path: "/nature", ...pageMeta.nature, schema: [professionalService, { "@context": "https://schema.org", "@type": "CollectionPage", name: "Nature & Landscape Collection", description: pageMeta.nature.description, url: `${canonicalHost}/nature` }] },
  { path: "/selected-work", ...pageMeta.work, schema: [professionalService, { "@context": "https://schema.org", "@type": "CollectionPage", name: "Selected Work", description: pageMeta.work.description, url: `${canonicalHost}/selected-work` }] },
  { path: "/prints", ...pageMeta.prints, schema: [professionalService, { "@context": "https://schema.org", "@type": "CollectionPage", name: "Otterfocus Fine-Art Prints", description: pageMeta.prints.description, url: `${canonicalHost}/prints` }] },
  { path: "/inquire", ...pageMeta.inquire, schema: [professionalService, { "@context": "https://schema.org", "@type": "ContactPage", name: "Inquire with Otterfocus", description: pageMeta.inquire.description, url: `${canonicalHost}/inquire` }] },
  { path: "/journal", ...pageMeta.journal, schema: [professionalService, { "@context": "https://schema.org", "@type": "Blog", name: "Otterfocus Journal", description: pageMeta.journal.description, url: `${canonicalHost}/journal` }] },
];

export function absoluteUrl(path: string) {
  return `${canonicalHost}${path === "/" ? "/" : path}`;
}
