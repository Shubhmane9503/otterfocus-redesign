/**
 * Quiet Terrain about page: an image-light editorial profile that leaves space for the
 * photographer’s real portrait and avoids inventing unverified biography details.
 */
import { PageFrame, PageMeta, SectionTag, TextLink, TopoLine } from "@/components/SiteShell";
import { pageMeta, site } from "@/lib/site";

export default function About() {
  return (
    <PageFrame>
      <PageMeta {...pageMeta.about} />
      <main className="paper-page about-page">
        <section className="page-intro about-intro"><div><SectionTag>About Otterfocus</SectionTag><p className="folio-number">01</p></div><h1>Made with care.<br /><em>Held with gratitude.</em></h1></section>
        <section className="about-statement editorial-section"><div className="about-mark-panel"><img src={site.assets.mark} alt="Otterfocus otter and aperture symbol" /><span>Las Vegas, Nevada</span></div><div className="about-prose"><p className="large-copy">Otterfocus is the photographic practice of <em>Armand Arnau</em>: a faith-rooted approach to weddings, events, wildlife, and the landscapes that surround us.</p><p>Every frame begins with attention. The aim is not to make a moment louder than it was, but to preserve its honest weight—the people gathered, the wind across the terrain, the light that came and went.</p><TopoLine /><p className="quote-block">“Whatever you do, work at it with all your heart.”<span>Colossians 3:23</span></p></div></section>
        <section className="about-values"><SectionTag>A way of working</SectionTag><div className="value-list"><article><span>01</span><h2>Present.</h2><p>Meaningful moments deserve more than a checklist. The work leaves room for what cannot be scheduled.</p></article><article><span>02</span><h2>Observant.</h2><p>From a passing expression to the wider desert, the details matter because they are part of the story.</p></article><article><span>03</span><h2>Reverent.</h2><p>Creation and connection are approached with respect, gratitude, and an eye toward what is lasting.</p></article></div></section>
        <section className="about-portrait-note"><div><SectionTag>A photography practice</SectionTag><h2>For what endures<br />beyond the day.</h2></div><p>Photography can return us to the people, places, and moments that matter long after the light has changed. Otterfocus approaches that responsibility with care, attention, and gratitude.</p><TextLink href="/inquire">Start a conversation</TextLink></section>
      </main>
    </PageFrame>
  );
}
