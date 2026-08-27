/**
 * Quiet Terrain homepage: a full-bleed Red Rock entrance and staggered portfolio folios.
 * Copy remains factual, warm, and spare; Canyon Clay appears only to guide attention.
 */
import { ArrowDownRight } from "lucide-react";
import { Link } from "wouter";
import { ImageWithCaption, PageFrame, PageMeta, SectionTag, TextLink, TopoLine } from "@/components/SiteShell";
import { pageMeta, site } from "@/lib/site";

export default function Home() {
  return (
    <PageFrame tone="dark">
      <PageMeta {...pageMeta.home} />
      <main>
        <section className="home-hero">
          <img src={site.assets.hero} alt="Sunlit sandstone formations and desert grasses near Red Rock Canyon at golden hour" className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-copy reveal">
            <p className="hero-kicker">Armand Arnau · Las Vegas, Nevada</p>
            <h1>Where wonder<br /><em>holds still.</em></h1>
            <p>Faith-rooted photography for meaningful gatherings and the places that remind us to look up.</p>
          </div>
          <div className="hero-bottom">
            <Link href="/selected-work" className="hero-scroll">Explore the work <ArrowDownRight size={16} aria-hidden="true" /></Link>
            <span>01 / 04</span>
          </div>
        </section>

        <section className="intro-section editorial-section">
          <div className="intro-aside"><SectionTag>Otterfocus</SectionTag><TopoLine /></div>
          <div className="intro-copy reveal">
            <p className="large-copy">Otterfocus is the work of <em>Armand Arnau</em>, a Las Vegas photographer documenting weddings, events, landscapes, wildlife, and the kind of beauty that asks us to pay attention.</p>
            <TextLink href="/about">Meet the photographer</TextLink>
          </div>
        </section>

        <section className="feature-split feature-weddings">
          <div className="feature-image-wrap"><img src={site.assets.wedding} alt="Newly married couple walking through a desert ceremony setting" loading="lazy" /></div>
          <div className="feature-copy reveal">
            <SectionTag>01 / Gatherings</SectionTag>
            <h2>The moments<br />that make a life.</h2>
            <p>Unrushed, attentive photography for weddings and events with room for the people—and the feeling—that brought everyone together.</p>
            <TextLink href="/weddings-events">Weddings & events</TextLink>
          </div>
        </section>

        <section className="scripture-note"><p>“The heavens declare the glory of God.”</p><span>Psalm 19:1</span></section>

        <section className="nature-feature editorial-section">
          <div className="nature-copy reveal">
            <SectionTag>02 / Field work</SectionTag>
            <h2>Made to be<br /><em>noticed.</em></h2>
            <p>Landscapes and wildlife photographed with patience, presence, and respect for the world as it is.</p>
            <TextLink href="/nature">Nature collection</TextLink>
          </div>
          <ImageWithCaption src={site.assets.otter} alt="North American river otter floating in calm water among reeds" caption="Field notes / 2026" className="nature-image" />
        </section>

        <section className="landscape-feature">
          <img src={site.assets.storm} alt="Desert basin and red rock formations beneath a passing storm" loading="lazy" />
          <div className="landscape-feature-copy reveal"><span>03 / The Southwest</span><h2>Light changes.<br />The land remembers.</h2><TextLink href="/selected-work">View selected work</TextLink></div>
        </section>

        <section className="closing-cta editorial-section">
          <div><SectionTag>Begin here</SectionTag><TopoLine /></div>
          <div className="closing-copy reveal"><h2>Tell me what<br /><em>you’re gathering around.</em></h2><p>Whether you are planning a wedding, an event, or collecting a piece of the natural world for your wall, the first conversation can be simple.</p><Link href="/inquire" className="button-clay">Begin an inquiry <ArrowDownRight size={17} /></Link></div>
        </section>
      </main>
    </PageFrame>
  );
}
