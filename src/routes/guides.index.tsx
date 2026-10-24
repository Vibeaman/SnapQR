import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Breadcrumb, PageShell } from "@/components/site/Breadcrumb";
import { allGuides as guides } from "@/lib/guides";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/guides/")({
  head: () => seo("/guides", "QR Code Guides and Tutorials | SnapQR", "Practical guides to creating WhatsApp, Wi-Fi and restaurant menu QR codes, plus sizing and printing tips."),
  component: Guides,
});

function Guides() {
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Guides" }]} />
      <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">QR Code Guides</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Step-by-step tutorials to help you create QR codes that work every time.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <Link key={g.slug} to="/guides/$slug" params={{ slug: g.slug }} className="card-surface group p-6 transition hover:border-primary">
            <h2 className="text-lg font-bold text-foreground group-hover:text-primary">{g.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{g.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4" aria-hidden /></span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
