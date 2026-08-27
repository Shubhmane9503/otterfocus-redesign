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
    hero: "/manus-storage/otterfocus-hero-red-rock_8faeb812.jpg",
    wedding: "/manus-storage/otterfocus-wedding-desert_64680c32.jpg",
    otter: "/manus-storage/otterfocus-wildlife-otter_0d6d6dac.jpg",
    storm: "/manus-storage/otterfocus-storm-landscape_c55adbbc.jpg",
    supportWedding: "/manus-storage/otterfocus-support-wedding_273d110e.jpg",
    dunes: "/manus-storage/otterfocus-support-dunes_ec2b96ba.jpg",
    joshuaTree: "/manus-storage/otterfocus-support-joshua-tree_14251edf.jpg",
    verticalDunes: "/manus-storage/otterfocus-support-dunes-vertical_042dc90d.jpg",
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
