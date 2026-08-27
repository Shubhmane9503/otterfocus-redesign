/**
 * Quiet Terrain weddings page: soft documentary pacing and desert scale, built for
 * a Las Vegas wedding and event service without unverified packages or promises.
 */
import { ArrowDownRight } from "lucide-react";
import { Link } from "wouter";
import { ImageWithCaption, PageFrame, PageMeta, SectionTag, TextLink } from "@/components/SiteShell";
import { pageMeta, site } from "@/lib/site";

export default function WeddingsEvents() {
  return (
    <PageFrame>
      <PageMeta {...pageMeta.weddings} />
      <main className="paper-page">
        <section className="photo-page-hero weddings-hero"><img src={site.assets.supportWedding} alt="Bride and groom standing together in a bright desert landscape" /><div className="photo-page-overlay" /><div className="photo-page-copy"><SectionTag>Weddings & Events</SectionTag><h1>Made to hold<br /><em>the weather.</em></h1><p>Las Vegas wedding and event photography for celebrations that are as personal as the people inside them.</p></div></section>
        <section className="weddings-intro editorial-section"><div><SectionTag>A considered record</SectionTag></div><div><p className="large-copy">A day can move quickly. The photographs are made to bring you back to the look across the room, the light over the desert, and the people who showed up.</p><p>Otterfocus photographs weddings and meaningful events in Las Vegas and the desert surrounds with an approach that is calm, observant, and grounded in the real texture of the day.</p><TextLink href="/inquire">Inquire about your date</TextLink></div></section>
        <section className="wedding-image-essay"><ImageWithCaption src={site.assets.wedding} alt="Couple walking hand in hand through a quiet desert celebration setting" caption="A gathering can be grand, intimate, or somewhere in between." /><div><span>01 / Presence over performance</span><h2>There is room for a plan.<br />And room for what unfolds.</h2><p>Before the day, the intention is to understand what matters. During it, the focus is on witnessing closely enough to recognize it when it happens.</p></div></section>
        <section className="process-strip"><SectionTag>A simple beginning</SectionTag><div><article><span>01</span><h3>Share the shape of the day.</h3><p>Tell me about the gathering, the setting, and the moments you are hoping to remember.</p></article><article><span>02</span><h3>Make a thoughtful plan.</h3><p>Once availability and needs are confirmed, the coverage can be shaped around your celebration.</p></article><article><span>03</span><h3>Be present for it.</h3><p>On the day, the photographs take care of the looking so you can stay where you are.</p></article></div></section>
        <section className="wedding-cta"><p>Las Vegas, Nevada · Weddings · Events</p><h2>Let’s make space<br />for what matters.</h2><Link href="/inquire" className="button-light">Begin an inquiry <ArrowDownRight size={17} /></Link></section>
      </main>
    </PageFrame>
  );
}
