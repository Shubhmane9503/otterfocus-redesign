/**
 * Quiet Terrain pricing guidance: price transparency without invented packages, tiers, or
 * availability claims while the photographer’s final commercial offer is awaiting approval.
 */
import { ContourField, PageFrame, PageMeta, SectionTag, TextLink } from "@/components/SiteShell";
import { pageMeta } from "@/lib/site";

const considerations = [
  ["01", "The shape of the day", "Share the date, ceremony or gathering details, and the moments you want remembered."],
  ["02", "The place", "Include the venue or outdoor setting. Location, access, and any permit considerations belong in the first conversation."],
  ["03", "The finished work", "Mention whether you are looking for digital coverage, nature work, or fine-art print guidance so the response can be useful from the start."],
];

export default function Pricing() {
  return (
    <PageFrame>
      <PageMeta {...pageMeta.pricing} />
      <main className="paper-page pricing-page">
        <section className="resource-hero pricing-hero">
          <ContourField className="resource-contour" />
          <div><SectionTag>01 / Investment guidance</SectionTag><h1>Before the<br /><em>numbers.</em></h1></div>
          <p>Otterfocus is a Las Vegas photography practice by Armand Arnau. Published package details and starting prices are not confirmed for this site yet, so a clear quote begins with a clear brief.</p>
        </section>
        <section className="pricing-note"><div><SectionTag>What is available today</SectionTag><h2>Honest guidance, not invented rates.</h2></div><p>There is no public “starting at” figure here because Armand’s final packages, coverage options, and print pricing still require his approval. That means Otterfocus does not make unverified claims about being the cheapest, most affordable, or a fit for every budget. An inquiry can begin a scope conversation; a final quote should follow confirmed availability and deliverables.</p></section>
        <section className="pricing-considerations"><p className="section-tag"><span />A useful inquiry includes</p><div>{considerations.map(([number, title, copy]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}</div></section>
        <section className="resource-closing"><p>Ready to frame the details?</p><h2>Begin with what<br /><em>matters most.</em></h2><TextLink href="/inquire">Share your plans</TextLink></section>
      </main>
    </PageFrame>
  );
}
