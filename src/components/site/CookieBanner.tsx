import { useEffect, useState } from "react";

const KEY = "snapqr-cookie-consent";
export const OPEN_COOKIE_EVENT = "snapqr:open-cookies";

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_EVENT));
}

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setShow(true);
    const open = () => setShow(true);
    window.addEventListener(OPEN_COOKIE_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_EVENT, open);
  }, []);

  const choose = (v: "accepted" | "declined") => {
    localStorage.setItem(KEY, v);
    setShow(false);
  };

  if (!show) return null;
  return (
    <div role="region" aria-label="Cookie consent" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl card-surface p-5">
      <p className="text-sm text-muted-foreground">
        We use cookies to analyse traffic and show personalised ads through Google AdSense. You can accept or decline
        non-essential cookies. Read our{" "}
        <a href="/privacy" className="font-medium text-primary underline">Privacy Policy</a>.
      </p>
      <div className="mt-4 flex gap-3">
        <button onClick={() => choose("accepted")} className="flex-1 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          Accept
        </button>
        <button onClick={() => choose("declined")} className="flex-1 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
          Decline
        </button>
      </div>
    </div>
  );
}
