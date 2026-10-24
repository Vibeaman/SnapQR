import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, LifeBuoy, Mail } from "lucide-react";
import { useState } from "react";
import { Breadcrumb, PageShell } from "@/components/site/Breadcrumb";
import { CONTACT_EMAIL, seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("/contact", "Contact SnapQR – Support and Business Inquiries", "Get in touch with the SnapQR team for technical support, feedback or business inquiries."),
  component: Contact,
});

const inputCls = "w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Contact" }]} />
      <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">Contact Us</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Questions, bug reports or ideas? Send us a message and we will get back to you as soon as we can.</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          {[
            { i: LifeBuoy, t: "Technical Support", d: "Trouble generating or scanning a code? Tell us what happened and which device you used." },
            { i: Briefcase, t: "Business Inquiries", d: "For partnerships, advertising or press, reach out and we will reply within two business days." },
          ].map((c) => (
            <div key={c.t} className="card-surface p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary"><c.i className="h-6 w-6" aria-hidden /></span>
              <h2 className="mt-4 text-xl font-bold text-foreground">{c.t}</h2>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </div>
          ))}
          <p className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-5 w-5 text-primary" aria-hidden /> Email: <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary underline">{CONTACT_EMAIL}</a>
          </p>
        </div>
        <form onSubmit={onSubmit} className="card-surface space-y-4 p-6 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Name</label><input id="name" name="name" required className={inputCls} /></div>
            <div><label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label><input id="email" name="email" type="email" required className={inputCls} /></div>
          </div>
          <div><label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">Subject</label><input id="subject" name="subject" required className={inputCls} /></div>
          <div><label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label><textarea id="message" name="message" rows={6} required className={inputCls} /></div>
          <button type="submit" className="w-full rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-primary hover:bg-primary/90">Send Message</button>
          {sent && <p role="status" className="rounded-xl bg-primary-soft p-4 text-sm text-accent-foreground">Thanks! Your email app should now be open with your message ready to send.</p>}
        </form>
      </div>
    </PageShell>
  );
}
