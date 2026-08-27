/**
 * Quiet Terrain fallback: an understated paper-page return route that preserves the site’s
 * editorial atmosphere while giving visitors a clear, accessible exit from an unknown URL.
 */
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { PageFrame, PageMeta, SectionTag } from "@/components/SiteShell";

export default function NotFound() {
  return <PageFrame><PageMeta title="Page not found | Otterfocus" description="The requested Otterfocus page could not be found." /><main className="not-found"><SectionTag>404 / Not found</SectionTag><h1>This path has<br /><em>gone quiet.</em></h1><p>The page you were looking for is not here, but the work is close by.</p><Link href="/" className="button-clay">Return home <ArrowUpRight size={17} /></Link></main></PageFrame>;
}
