/**
 * Quiet Terrain journal page: a lightweight long-tail SEO content structure that foregrounds
 * factual, future editorial topics without pretending unpublished posts already exist.
 */
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { PageFrame, PageMeta, SectionTag } from "@/components/SiteShell";
import { pageMeta } from "@/lib/site";

const stories = [
  { title: "A quieter way to plan a Red Rock Canyon elopement", type: "Planning note", excerpt: "A field note for couples considering a desert gathering with room for the landscape and the people closest to them." },
  { title: "What desert light gives a wedding day", type: "Photographer’s note", excerpt: "A reflection on pace, timing, and letting the natural conditions of Las Vegas and the surrounding desert inform the photographs." },
  { title: "Why a landscape print changes a room", type: "Print note", excerpt: "A note on choosing a photograph to live with and the difference between looking at a scene and returning to it." },
];

export default function Journal() {
  return (
    <PageFrame>
      <PageMeta {...pageMeta.journal} />
      <main className="paper-page journal-page"><section className="page-intro journal-intro"><div><SectionTag>The journal</SectionTag><p className="folio-number">05</p></div><h1>Notes from<br />the <em>looking.</em></h1></section><section className="journal-lede"><p className="large-copy">A place for considered notes on desert photography, meaningful gatherings, and the landscapes that shape the work.</p><span>Las Vegas, Nevada</span></section><section className="journal-list">{stories.map((story, index) => <article key={story.title}><span>0{index + 1} / {story.type}</span><h2>{story.title}</h2><p>{story.excerpt}</p><Link href="/inquire">Ask about this work <ArrowUpRight size={16} /></Link></article>)}</section><section className="journal-bottom"><SectionTag>Follow along</SectionTag><p>For new work and journal notes, find Otterfocus on Instagram and YouTube.</p><Link href="/inquire" className="text-link">Start a conversation <ArrowUpRight size={15} /></Link></section></main>
    </PageFrame>
  );
}
