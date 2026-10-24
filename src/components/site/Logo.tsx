import { Link } from "@tanstack/react-router";
import { QrCode } from "lucide-react";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2" aria-label="SnapQR home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-primary">
        <QrCode className="h-5 w-5" aria-hidden />
      </span>
      <span className="text-xl font-bold tracking-tight text-foreground">SnapQR</span>
    </Link>
  );
}
