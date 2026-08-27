/**
 * Quiet Terrain FAQ: plainspoken client guidance on location, scope, and pricing boundaries,
 * presented as an editorial index rather than a generic accordion.
 */
import { ContourField, PageFrame, PageMeta, SectionTag, TextLink } from "@/components/SiteShell";
import { faqEntries } from "@/lib/static-seo";
import { pageMeta } from "@/lib/site";

export default function Faq() {
  return (
    <PageFrame>
      <PageMeta {...pageMeta.faq} />
      <main className="paper-page resource-page">
        <section className="resource-hero">
          <ContourField className="resource-contour" />
          <div><SectionTag>01 / Useful context</SectionTag><h1>Questions,<br /><em>clearly held.</em></h1></div>
          <p>Otterfocus is the Las Vegas photography practice of Armand Arnau, for weddings, meaningful gatherings, nature work, and fine-art print enquiries. These answers describe what is known now—and what still needs a personal conversation.</p>
        </section>
        <section className="resource-layout">
          <aside><p>Before you write</p><h2>A good beginning is a clear one.</h2><p>For a more exact answer, include your date, location, kind of gathering, and what matters most about the photographs.</p><TextLink href="/inquire">Begin an inquiry</TextLink></aside>
          <dl className="resource-list">
            {faqEntries.map((entry, index) => <div className="faq-item" key={entry.question}><dt><span>0{index + 1}</span><h2>{entry.question}</h2></dt><dd>{entry.answer}</dd></div>)}
          </dl>
        </section>
        <section className="resource-closing"><p>Looking for wedding and event coverage?</p><h2>See the work,<br /><em>then tell the story.</em></h2><TextLink href="/weddings-events">Weddings & events</TextLink></section>
      </main>
    </PageFrame>
  );
}
