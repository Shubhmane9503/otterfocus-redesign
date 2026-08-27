/**
 * Quiet Terrain nature page: a sequential, book-like collection with wide margins,
 * restrained folio notes, and wildlife / landscape images allowed to carry the narrative.
 */
import { ContourField, ImageWithCaption, PageFrame, PageMeta, SectionTag, TextLink } from "@/components/SiteShell";
import { pageMeta, site } from "@/lib/site";

export default function Nature() {
  return (
    <PageFrame>
      <PageMeta {...pageMeta.nature} />
      <main className="paper-page nature-page">
        <section className="nature-opening"><img src={site.assets.joshuaTree} alt="Joshua trees standing in a quiet desert landscape beneath a blue sky" /><div className="nature-opening-overlay" /><ContourField className="nature-opening-contours" /><div className="nature-opening-copy"><SectionTag>Nature & Landscape</SectionTag><p className="folio-number">01 / Desert forms</p><h1>Slow enough<br />to <em>notice.</em></h1><p>Photographs from the desert, the water’s edge, and the quieter places between.</p></div></section>
        <ImageWithCaption src={site.assets.dunes} alt="Wind-shaped desert dunes in warm late afternoon light" caption="02 / Open country — shifting light across the dunes" className="nature-wide" />
        <section className="nature-spread"><div className="nature-spread-copy"><ContourField className="nature-marginal-contours" /><SectionTag>Field notes</SectionTag><p className="large-copy">The natural world doesn’t need to be improved. It asks only for the patience to see it as it is.</p><p>Otterfocus landscape and wildlife work is shaped by that premise: attentive framing, available light, and a respect for the places and creatures being photographed.</p><TextLink href="/prints">Explore fine-art prints</TextLink></div><ImageWithCaption src={site.assets.verticalDunes} alt="Mountain ridge rising beyond patterned desert dunes" caption="03 / Dunes & distance — an afternoon study" /></section>
        <section className="nature-final-spread"><ImageWithCaption src={site.assets.otter} alt="North American river otter floating in calm water among reeds" caption="04 / Waterline — a quiet encounter" /><div><span>Las Vegas & the wider Southwest</span><h2>A landscape is never only a backdrop.</h2><p>It holds memory, gives a moment scale, and offers its own way of telling the truth.</p></div></section>
      </main>
    </PageFrame>
  );
}
