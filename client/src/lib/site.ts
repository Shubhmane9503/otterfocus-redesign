/**
 * Quiet Terrain design system: image-led desert editorial pages with Canyon Clay accents,
 * Fraunces display typography, and factual content limited to the approved project brief.
 */
export const site = {
  name: "Otterfocus",
  photographer: "Armand Arnau",
  location: "Las Vegas, NV",
  descriptor: "Faith-rooted wedding, event, and nature photography",
  instagram: "https://www.instagram.com/otterfocus/",
  youtube: "https://www.youtube.com/@Otterfocus.mp4",
  assets: {
    mark: "/manus-storage/otterfocus-mark_da1e05f8.png",
    hero: "/manus-storage/placeholder-desert-hero-pexels_f6d929ab.jpg", // placeholder: true — Pexels 2106203
    wedding: "/manus-storage/placeholder-desert-wedding-unsplash_fc6b95a3.jpg", // placeholder: true — Unsplash M3UWNO_Vf8M
    otter: "/manus-storage/placeholder-river-otter-pexels_53db3660.jpg", // placeholder: true — Pexels 7455186
    storm: "/manus-storage/placeholder-storm-desert-pexels_8aae5fe5.jpg", // placeholder: true — Pexels 35865645
    supportWedding: "/manus-storage/placeholder-desert-wedding-support-pexels_837c5a7a.jpg", // placeholder: true — Pexels 4942874
    dunes: "/manus-storage/placeholder-red-rock-canyon-pexels_dc95507e.jpg", // placeholder: true — Pexels 5488296
    joshuaTree: "/manus-storage/placeholder-joshua-tree-unsplash_2f7899ef.jpg", // placeholder: true — Unsplash JXCrcpROus8
    verticalDunes: "/manus-storage/placeholder-vertical-sand-dune-pexels_37db5c9a.jpg", // placeholder: true — Pexels 11377054
  },
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/weddings-events", label: "Weddings & Events" },
  { href: "/nature", label: "Nature" },
  { href: "/selected-work", label: "Selected Work" },
  { href: "/prints", label: "Prints" },
  { href: "/journal", label: "Journal" },
] as const;

export const pageMeta = {
  home: {
    title: "Otterfocus | Las Vegas Wedding & Nature Photographer",
    description:
      "Otterfocus is the work of Las Vegas photographer Armand Arnau, documenting weddings, meaningful gatherings, landscapes, wildlife, and fine-art prints.",
  },
  about: {
    title: "About Armand Arnau | Otterfocus Photography",
    description:
      "Meet Armand Arnau, the Las Vegas photographer behind Otterfocus—a faith-rooted practice for meaningful occasions and God’s creation.",
  },
  weddings: {
    title: "Las Vegas Wedding & Event Photographer | Otterfocus",
    description:
      "Otterfocus provides considered wedding and event photography for meaningful celebrations in Las Vegas and the surrounding desert.",
  },
  nature: {
    title: "Nature & Landscape Photography | Otterfocus Las Vegas",
    description:
      "Explore Otterfocus nature, landscape, and wildlife photography from Las Vegas photographer Armand Arnau.",
  },
  work: {
    title: "Selected Work | Otterfocus Photography",
    description:
      "A selected portfolio of wedding, event, landscape, and wildlife photography by Armand Arnau of Otterfocus in Las Vegas, Nevada.",
  },
  prints: {
    title: "Fine-Art Prints | Otterfocus Photography",
    description:
      "Fine-art print releases from Otterfocus, the photography practice of Las Vegas-based photographer Armand Arnau.",
  },
  pricing: {
    title: "Las Vegas Wedding Photography Pricing Guidance | Otterfocus",
    description:
      "Transparent pricing guidance from Otterfocus, the Las Vegas photography practice of Armand Arnau. Packages and starting rates will be confirmed before publication.",
  },
  faq: {
    title: "Las Vegas Wedding & Photography FAQs | Otterfocus",
    description:
      "Plain-language answers about Las Vegas wedding photography, event coverage, Red Rock Canyon, pricing guidance, and Otterfocus inquiries with Armand Arnau.",
  },
  inquire: {
    title: "Inquire | Otterfocus Photography",
    description:
      "Start a thoughtful conversation about wedding, event, nature, or print inquiries with Las Vegas photographer Armand Arnau of Otterfocus.",
  },
  journal: {
    title: "Journal | Otterfocus Photography",
    description:
      "Notes on Las Vegas desert photography, meaningful gatherings, and the landscapes that shape the work of Otterfocus.",
  },
} as const;
