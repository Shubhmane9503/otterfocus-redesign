/**
 * Quiet Terrain SEO map: factual, readable entity signals for every static Otterfocus route.
 * Each page’s metadata is rendered at build time alongside its complete editorial HTML body.
 */
import { pageMeta, site } from "@/lib/site";

const canonicalHost = "https://otterfocus.co";
type JsonLd = Record<string, unknown>;

export type StaticPage = { path: string; title: string; description: string; schema: JsonLd[]; };
export type FaqEntry = { question: string; answer: string; };

const lasVegas = { "@type": "City", name: "Las Vegas" };
const provider = { "@type": "ProfessionalService", name: site.name, url: canonicalHost };

const professionalService: JsonLd = {
  "@context": "https://schema.org", "@type": ["LocalBusiness", "ProfessionalService", "Photographer"], name: site.name,
  description: "Otterfocus is the faith-rooted Las Vegas photography practice of Armand Arnau for weddings, events, landscapes, wildlife, and fine-art print enquiries.",
  url: canonicalHost, founder: { "@type": "Person", name: site.photographer, jobTitle: "Photographer" },
  address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV", addressCountry: "US" }, areaServed: lasVegas,
  sameAs: [site.instagram, site.youtube], knowsAbout: ["Wedding photography", "Event photography", "Nature photography", "Landscape photography", "Wildlife photography", "Fine-art photography"],
};

const services = {
  wedding: { "@context": "https://schema.org", "@type": "Service", name: "Las Vegas Wedding Photography", serviceType: "Wedding photography", description: "Wedding photography from Las Vegas photographer Armand Arnau of Otterfocus.", areaServed: lasVegas, provider },
  event: { "@context": "https://schema.org", "@type": "Service", name: "Las Vegas Event Photography", serviceType: "Event photography", description: "Event photography for meaningful Las Vegas gatherings by Armand Arnau of Otterfocus.", areaServed: lasVegas, provider },
  nature: { "@context": "https://schema.org", "@type": "Service", name: "Las Vegas Nature and Landscape Photography", serviceType: "Nature and landscape photography", description: "Nature and landscape photography by Las Vegas photographer Armand Arnau of Otterfocus.", areaServed: lasVegas, provider },
  prints: { "@context": "https://schema.org", "@type": "Service", name: "Fine-Art Photography Print Guidance", serviceType: "Fine-art photography prints", description: "Fine-art photography print enquiries with Las Vegas photographer Armand Arnau of Otterfocus.", areaServed: lasVegas, provider },
} as const;

const webPage = (path: string, title: string, description: string): JsonLd => ({ "@context": "https://schema.org", "@type": "WebPage", name: title, description, url: `${canonicalHost}${path}`, about: { "@type": "Thing", name: "Otterfocus Photography" } });

export const faqEntries: FaqEntry[] = [
  { question: "Is Otterfocus a Las Vegas wedding photographer?", answer: "Yes. Otterfocus is the Las Vegas photography practice of Armand Arnau, with a dedicated weddings and events service page and an inquiry path for meaningful celebrations." },
  { question: "Does Otterfocus photograph events in Las Vegas?", answer: "Otterfocus accepts event enquiries for meaningful Las Vegas gatherings. Include the date, venue, guest experience, and expected coverage in the first note so availability and fit can be discussed clearly." },
  { question: "Can I ask about a wedding near Red Rock Canyon?", answer: "Yes. For a wedding, elopement, or small gathering near Red Rock Canyon, share the venue or exact location in the inquiry. Availability, access, and any needed permit considerations should be confirmed for the specific plan." },
  { question: "Does Otterfocus work in Henderson, Summerlin, or North Las Vegas?", answer: "Otterfocus is based in Las Vegas. Henderson, Summerlin, and North Las Vegas are not yet listed as confirmed service areas on this site, so send your venue details for a location-specific reply rather than relying on a general promise." },
  { question: "Does Otterfocus offer affordable or budget-friendly wedding packages?", answer: "Published pricing and packages are not confirmed yet, so Otterfocus does not make an unverified affordability claim. Share the coverage you need and the photographer can discuss scope after packages, availability, and deliverables are confirmed." },
  { question: "Does Otterfocus photograph small weddings or elopements?", answer: "Small weddings and elopements can be described through the inquiry form. Tell us the location, date, number of people, and the kind of images that matter; Armand can then confirm whether the plan is a fit." },
  { question: "How do fine-art print enquiries work?", answer: "The current prints page explains the contemplative print practice. Selection, sizing, paper, presentation, availability, and final prices are discussed by inquiry so no unverified edition or inventory claim is made online." },
];

const faqPageSchema: JsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqEntries.map((entry) => ({ "@type": "Question", name: entry.question, acceptedAnswer: { "@type": "Answer", text: entry.answer } })) };

export const staticPages: StaticPage[] = [
  { path: "/", ...pageMeta.home, schema: [professionalService, webPage("/", pageMeta.home.title, pageMeta.home.description)] },
  { path: "/about", ...pageMeta.about, schema: [professionalService, webPage("/about", pageMeta.about.title, pageMeta.about.description)] },
  { path: "/weddings-events", ...pageMeta.weddings, schema: [professionalService, services.wedding, services.event, webPage("/weddings-events", pageMeta.weddings.title, pageMeta.weddings.description)] },
  { path: "/nature", ...pageMeta.nature, schema: [professionalService, services.nature, { "@context": "https://schema.org", "@type": "CollectionPage", name: "Nature & Landscape Collection", description: pageMeta.nature.description, url: `${canonicalHost}/nature` }] },
  { path: "/selected-work", ...pageMeta.work, schema: [professionalService, webPage("/selected-work", pageMeta.work.title, pageMeta.work.description)] },
  { path: "/prints", ...pageMeta.prints, schema: [professionalService, services.prints, { "@context": "https://schema.org", "@type": "CollectionPage", name: "Otterfocus Fine-Art Prints", description: pageMeta.prints.description, url: `${canonicalHost}/prints` }] },
  { path: "/pricing", ...pageMeta.pricing, schema: [professionalService, webPage("/pricing", pageMeta.pricing.title, pageMeta.pricing.description)] },
  { path: "/faq", ...pageMeta.faq, schema: [professionalService, faqPageSchema, webPage("/faq", pageMeta.faq.title, pageMeta.faq.description)] },
  { path: "/inquire", ...pageMeta.inquire, schema: [professionalService, webPage("/inquire", pageMeta.inquire.title, pageMeta.inquire.description)] },
  { path: "/journal", ...pageMeta.journal, schema: [professionalService, { "@context": "https://schema.org", "@type": "Blog", name: "Otterfocus Journal", description: pageMeta.journal.description, url: `${canonicalHost}/journal` }] },
];

export function absoluteUrl(path: string) { return `${canonicalHost}${path === "/" ? "/" : path}`; }
