/**
 * Quiet Terrain selected-work page: a minimal editorial index rather than a dense thumbnail
 * wall, allowing the project’s service and collection paths to remain clear and uncluttered.
 */
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { PageFrame, PageMeta, SectionTag, TopoLine } from "@/components/SiteShell";
import { pageMeta } from "@/lib/site";

const collections = [
  { number: "01", title: "Weddings & Events", description: "A considered record of meaningful gatherings in Las Vegas and the desert surrounds.", href: "/weddings-events", label: "View gatherings" },
  { number: "02", title: "Nature & Landscape", description: "Field work shaped by presence, patience, and the remarkable forms of the Southwest.", href: "/nature", label: "View nature" },
  { number: "03", title: "Fine-Art Prints", description: "A forthcoming collection of photographs made to live with you beyond the frame of a screen.", href: "/prints", label: "Explore prints" },
];

export default function SelectedWork() {
  return (
    <PageFrame>
      <PageMeta {...pageMeta.work} />
      <main className="paper-page selected-page"><section className="page-intro selected-intro"><div><SectionTag>Selected work</SectionTag><TopoLine /></div><h1>Light, land,<br />and <em>what lasts.</em></h1></section><section className="collection-index">{collections.map((collection) => <Link href={collection.href} key={collection.number} className="collection-row"><span>{collection.number}</span><h2>{collection.title}</h2><p>{collection.description}</p><span className="collection-link">{collection.label}<ArrowUpRight size={17} /></span></Link>)}</section><section className="selected-note"><p>Each collection is intentionally paced as a portfolio sequence. When Armand’s original galleries are migrated, this index becomes the entry point into those fuller visual stories.</p></section></main>
    </PageFrame>
  );
}
