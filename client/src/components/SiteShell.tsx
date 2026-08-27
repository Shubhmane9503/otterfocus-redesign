/**
 * Quiet Terrain component system: slim editorial chrome, asymmetrical page rhythm,
 * bone paper surfaces, and minimal responsive motion that keeps photographs central.
 */
import { ArrowUpRight, Instagram, Menu, X, Youtube } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState, type ReactNode } from "react";
import { navigation, site } from "@/lib/site";

type MetaProps = { title: string; description: string };

export function PageMeta({ title, description }: MetaProps) {
  useEffect(() => {
    document.title = title;
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descriptionTag) descriptionTag.content = description;
  }, [description, title]);

  return null;
}

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`wordmark ${light ? "wordmark-light" : ""}`} aria-label="Otterfocus home">
      <img src={site.assets.mark} alt="Otterfocus otter and aperture mark" className="wordmark-mark" />
      <span className="wordmark-name">Otterfocus</span>
    </Link>
  );
}

export function SiteHeader({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const onHomeHero = tone === "dark" && !scrolled;
  return (
    <header className={`site-header ${onHomeHero ? "header-on-image" : "header-on-paper"}`}>
      <div className="header-inner">
        <Wordmark light={onHomeHero} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.slice(1, 6).map((item) => (
            <Link key={item.href} href={item.href} className={location === item.href ? "nav-active" : ""}>
              {item.label}
            </Link>
          ))}
          <Link href="/inquire" className="nav-inquire">
            Inquire <ArrowUpRight aria-hidden="true" size={14} />
          </Link>
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setOpen((state) => !state)} aria-expanded={open} aria-controls="mobile-menu">
          <span className="sr-only">{open ? "Close" : "Open"} navigation</span>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>{item.label}
            </Link>
          ))}
          <Link href="/inquire" tabIndex={open ? 0 : -1} className="mobile-inquire">Begin an inquiry <ArrowUpRight size={18} /></Link>
        </nav>
      </div>
    </header>
  );
}

export function TopoLine({ className = "" }: { className?: string }) {
  return <div className={`topo-line ${className}`} aria-hidden="true"><span /><span /><span /></div>;
}

export function ContourField({ className = "" }: { className?: string }) {
  return <svg className={`contour-field ${className}`} viewBox="0 0 360 180" fill="none" aria-hidden="true"><path d="M-18 126C44 52 125 33 207 56c59 17 107 7 169-54" /><path d="M-28 155C39 74 123 59 198 79c71 19 126 0 185-67" /><path d="M-11 96C45 31 135 13 215 39c58 19 101 9 153-39" /><path d="M26 178c53-57 116-67 189-45 58 17 109 2 151-35" /></svg>;
}

export function SectionTag({ children }: { children: ReactNode }) {
  return <p className="section-tag"><span />{children}</p>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="text-link">{children}<ArrowUpRight size={15} aria-hidden="true" /></Link>;
}

export function ImageWithCaption({ src, alt, caption, className = "" }: { src: string; alt: string; caption: string; className?: string }) {
  return (
    <figure className={`image-figure ${className}`}>
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <TopoLine />
      <div className="footer-grid">
        <div>
          <Wordmark />
          <p className="footer-intro">A photographic practice for meaningful gatherings and the wide, remarkable world around us.</p>
        </div>
        <div className="footer-links">
          <p>Explore</p>
          <Link href="/weddings-events">Weddings & Events</Link>
          <Link href="/nature">Nature Collection</Link>
          <Link href="/selected-work">Selected Work</Link>
          <Link href="/prints">Prints</Link>
        </div>
        <div className="footer-links">
          <p>Follow</p>
          <a href={site.instagram} target="_blank" rel="noreferrer"><Instagram size={15} />Instagram</a>
          <a href={site.youtube} target="_blank" rel="noreferrer"><Youtube size={16} />YouTube</a>
          <Link href="/inquire">Begin an inquiry <ArrowUpRight size={15} /></Link>
        </div>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} Otterfocus. Las Vegas, Nevada.</span>
        <span>Guided by Colossians 3:23.</span>
      </div>
    </footer>
  );
}

export function PageFrame({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return <div className="site-frame"><SiteHeader tone={tone} />{children}<SiteFooter /></div>;
}
