import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <li><Link to="/" className="hover:text-primary">Home</Link></li>
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4" aria-hidden />
            {it.to ? (
              <Link to={it.to} className="hover:text-primary">{it.label}</Link>
            ) : (
              <span aria-current="page" className="font-medium text-foreground">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">{children}</div>;
}
