import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/guides", label: "Guides" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent aria-describedby={undefined} className="flex h-dvh w-72 max-w-[calc(100vw-2rem)] flex-col overflow-y-auto bg-card p-5 motion-reduce:animate-none motion-reduce:transition-none">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="mb-6 shrink-0 pr-8">
              <Logo onClick={() => setOpen(false)} />
            </div>
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: l.to === "/" }}
                      className="block rounded-xl px-4 py-3 font-medium text-foreground hover:bg-muted"
                      activeProps={{ className: "bg-primary-soft text-primary" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
