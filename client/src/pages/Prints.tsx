/**
 * Quiet Terrain prints page: a contemplative, commerce-ready editorial catalogue frame that
 * intentionally avoids fabricated prices, editions, inventory, checkout, or fulfilment claims.
 */
import { ArrowDownRight } from "lucide-react";
import { Link } from "wouter";
import { PageFrame, PageMeta, SectionTag, TopoLine } from "@/components/SiteShell";
import { pageMeta } from "@/lib/site";

export default function Prints() {
  return (
    <PageFrame>
      <PageMeta {...pageMeta.prints} />
      <main className="paper-page prints-page"><section className="page-intro prints-intro"><div><SectionTag>Fine-art prints</SectionTag><p className="folio-number">03</p></div><h1>Bring the<br /><em>outside in.</em></h1></section><section className="prints-statement"><div className="print-paper print-paper-a"><span>Otterfocus / Print study</span></div><div><p className="large-copy">Photographs made in the open country can become a quieter part of the room you return to every day.</p><p>Each print is considered as an object as much as an image: an intentional edit, attentive material choices, and a presentation that lets the landscape keep its scale.</p><TopoLine /><p className="prints-small">Selection, sizing, and presentation details are shared through a personal print inquiry.</p></div></section><section className="print-process"><SectionTag>Considered in every detail</SectionTag><div><article><span>01</span><h2>The edit</h2><p>A concise, considered selection from the nature and landscape archive.</p></article><article><span>02</span><h2>The material</h2><p>Paper, framing, and presentation choices selected with the final object in mind.</p></article><article><span>03</span><h2>The conversation</h2><p>A direct, personal way to find the photograph that belongs in your space.</p></article></div></section><section className="prints-cta"><h2>Interested in a print?</h2><p>Use the inquiry page to share the image or collection you have in mind.</p><Link href="/inquire" className="button-clay">Ask about prints <ArrowDownRight size={17} /></Link></section></main>
    </PageFrame>
  );
}
