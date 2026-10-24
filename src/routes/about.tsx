import { createFileRoute, Link } from "@tanstack/react-router";
import { Gauge, ShieldCheck, Target } from "lucide-react";
import { Breadcrumb, PageShell } from "@/components/site/Breadcrumb";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("/about", "About SnapQR – Free, Private QR Code Generator", "Learn about SnapQR, the fast, privacy-focused QR code generator that connects the physical and digital worlds for free."),
  component: About,
});

const cards = [
  { i: Target, t: "Our Mission", d: "To give everyone, from solo makers to growing businesses, a simple and free way to link printed materials to online content." },
  { i: Gauge, t: "Performance First", d: "SnapQR is lightweight and generates codes instantly on your device, so it stays fast even on slow connections." },
  { i: ShieldCheck, t: "Privacy Focused", d: "Your QR codes are created in your browser. We never upload, store or track the links and text you encode." },
];

function About() {
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "About" }]} />
      <h1 className="max-w-3xl text-4xl font-extrabold text-foreground md:text-5xl">Connecting the Physical and Digital Worlds.</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        SnapQR started with a simple idea: making a QR code should take seconds, cost nothing and respect your privacy.
        Today it helps people share websites, menus, Wi-Fi details and more with a single scan.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.t} className="card-surface p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary"><c.i className="h-6 w-6" aria-hidden /></span>
            <h2 className="mt-4 text-xl font-bold text-foreground">{c.t}</h2>
            <p className="mt-2 text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
      <section className="mt-12 rounded-3xl bg-navy p-8 text-navy-foreground md:p-12">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-3 max-w-xl text-navy-foreground/70">Have feedback, a feature idea or a partnership in mind? We would love to hear from you.</p>
        <Link to="/contact" className="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">Contact us</Link>
      </section>
    </PageShell>
  );
}
