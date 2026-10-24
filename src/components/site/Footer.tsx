import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { openCookieSettings } from "./CookieBanner";

const cls = "text-sm text-muted-foreground hover:text-primary";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              SnapQR is a free QR code generator that runs entirely in your browser. No sign-up, no tracking of your codes.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-foreground">Product</h2>
            <ul className="space-y-2">
              <li><Link to="/" className={cls}>Free QR Code Generator</Link></li>
              <li><Link to="/" hash="features" className={cls}>Features</Link></li>
              <li><Link to="/" hash="how-it-works" className={cls}>How it Works</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-foreground">Company</h2>
            <ul className="space-y-2">
              <li><Link to="/about" className={cls}>About Us</Link></li>
              <li><Link to="/contact" className={cls}>Contact</Link></li>
              <li><Link to="/guides" className={cls}>Guides</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-foreground">Legal</h2>
            <ul className="space-y-2">
              <li><Link to="/privacy" className={cls}>Privacy Policy</Link></li>
              <li><Link to="/terms" className={cls}>Terms of Service</Link></li>
              <li><button onClick={openCookieSettings} className={cls}>Cookie Settings</button></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">© 2026 SnapQR</p>
      </div>
    </footer>
  );
}
