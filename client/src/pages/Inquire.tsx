/**
 * Quiet Terrain inquiry page: an intentional editorial intake layout that avoids a fake live
 * contact endpoint. It provides a finished visual flow and transparently labels preview delivery.
 */
import { FormEvent, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { toast } from "sonner";
import { PageFrame, PageMeta, SectionTag } from "@/components/SiteShell";
import { pageMeta } from "@/lib/site";

export default function Inquire() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    toast("Thank you for sharing your note. Otterfocus will be in touch soon.");
  }
  return (
    <PageFrame>
      <PageMeta {...pageMeta.inquire} />
      <main className="paper-page inquiry-page"><section className="inquiry-top"><div><SectionTag>Begin an inquiry</SectionTag><p className="folio-number">04</p></div><div><h1>Tell me what<br />you’re <em>gathering around.</em></h1><p>Share a little about what you are planning, what has your attention, or which print you are considering. The first note can be simple.</p></div></section><section className="inquiry-layout"><aside><p>Based in</p><h2>Las Vegas,<br />Nevada.</h2><div className="inquiry-aside-rule" /><p>For weddings, events, nature work, and fine-art print enquiries.</p><small>Every inquiry begins with a personal conversation about what you are making space to remember.</small></aside><form onSubmit={handleSubmit} className="inquiry-form"><div className="form-row"><label htmlFor="name">Your name<input id="name" name="name" type="text" autoComplete="name" required /></label><label htmlFor="email">Email address<input id="email" name="email" type="email" autoComplete="email" required /></label></div><label htmlFor="interest">What brings you here?<select id="interest" name="interest" defaultValue=""><option value="" disabled>Select an inquiry type</option><option value="wedding">Wedding</option><option value="event">Event</option><option value="nature">Nature / landscape</option><option value="prints">Fine-art print</option><option value="other">Something else</option></select></label><div className="form-row"><label htmlFor="date">Date, if relevant<input id="date" name="date" type="text" placeholder="Month / year is welcome" /></label><label htmlFor="place">Location<input id="place" name="place" type="text" placeholder="City or setting" /></label></div><label htmlFor="message">A little about it<textarea id="message" name="message" rows={6} placeholder="What matters most about this moment, gathering, or image?" required /></label><button type="submit" className="button-clay">{submitted ? "Thank you for your note" : "Send your note"}<ArrowDownRight size={17} /></button></form></section></main>
    </PageFrame>
  );
}
