import { ChevronDown, Download, Info, QrCode, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Level = "L" | "M" | "Q" | "H";
const DEFAULTS = { fg: "#111827", bg: "#ffffff", size: 512, level: "M" as Level };

function Section({ title, children, defaultOpen }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  return (
    <details open={defaultOpen} className="group border-t border-border py-4 first:border-t-0">
      <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-foreground">
        {title}
        <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}

export function QrGenerator() {
  const [text, setText] = useState("");
  const [fg, setFg] = useState(DEFAULTS.fg);
  const [bg, setBg] = useState(DEFAULTS.bg);
  const [size, setSize] = useState(DEFAULTS.size);
  const [level, setLevel] = useState<Level>(DEFAULTS.level);
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState("");

  const generate = async () => {
    const content = text.trim();
    if (!content || generating) return;
    setGenerating(true);
    setDataUrl(null);
    try {
      setError(null);
      // Load the browser renderer only after the user submits, never during SSR.
      const { default: QRCode } = await import("qrcode");
      const canvas = document.createElement("canvas");
      const url = await QRCode.toDataURL(canvas, content, {
        type: "image/png",
        width: size,
        margin: 2,
        errorCorrectionLevel: level,
        color: { dark: fg, light: bg },
      });
      setGeneratedText(content);
      setDataUrl(url);
    } catch (cause) {
      console.error("QR code generation failed", cause);
      setError(cause instanceof Error && /too big|too long|amount of data/i.test(cause.message)
        ? "That text is too long for a QR code. Try shortening it or lowering error correction."
        : "Could not generate your QR code. Please try again.");
    } finally {
      setGenerating(false);
    }
  };

  const reset = () => {
    setFg(DEFAULTS.fg);
    setBg(DEFAULTS.bg);
    setSize(DEFAULTS.size);
    setLevel(DEFAULTS.level);
  };

  const inputCls = "w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <form
          className="card-surface p-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (text.trim()) generate();
          }}
        >
          <label htmlFor="qr-text" className="mb-3 block font-semibold text-foreground">
            Enter your URL or text to generate a QR code
          </label>
          <input id="qr-text" value={text} onChange={(e) => setText(e.target.value)} placeholder="https://example.com or any text..." className={inputCls} />
          <Button
            type="submit"
            disabled={!text.trim() || generating}
            className="mt-4 flex h-auto w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-semibold text-primary-foreground shadow-primary transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/40 disabled:shadow-none"
          >
            <Zap className="h-5 w-5" aria-hidden /> {generating ? "Generating…" : "Generate QR Code"}
          </Button>
        </form>

        <div className="card-surface p-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Customization</h2>
            <button onClick={reset} className="text-sm font-medium text-primary hover:underline">Reset to Defaults</button>
          </div>
          <Section title="Colors" defaultOpen>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: "fg", label: "Foreground", v: fg, set: setFg },
                { id: "bg", label: "Background", v: bg, set: setBg },
              ].map((c) => (
                <div key={c.id}>
                  <label htmlFor={c.id} className="mb-2 block text-sm text-muted-foreground">{c.label}</label>
                  <div className="flex items-center gap-2 rounded-xl border border-input p-2">
                    <input id={c.id} type="color" value={c.v} onChange={(e) => c.set(e.target.value)} className="h-9 w-9 cursor-pointer rounded-lg border-0 bg-transparent" />
                    <span className="font-mono text-sm uppercase text-foreground">{c.v}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Size">
            <label htmlFor="size" className="mb-2 flex justify-between text-sm text-muted-foreground">
              <span>Image size</span><span className="font-semibold text-foreground">{size} × {size} px</span>
            </label>
            <input id="size" type="range" min={128} max={1024} step={32} value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-full accent-primary" />
          </Section>
          <Section title="Error Correction">
            <div className="mb-2 flex items-center gap-2">
              <label htmlFor="level" className="text-sm text-muted-foreground">Correction level</label>
              <span className="group/tip relative">
                <Info className="h-4 w-4 text-muted-foreground" tabIndex={0} aria-label="About error correction levels" />
                <span role="tooltip" className="pointer-events-none absolute -left-24 top-6 z-10 w-60 rounded-xl bg-navy p-3 text-xs text-navy-foreground opacity-0 transition group-hover/tip:opacity-100 group-focus-within/tip:opacity-100">
                  Higher levels let the code still scan when partly damaged or covered. L recovers ~7%, M ~15%, Q ~25%, H ~30% of data, but make the code denser.
                </span>
              </span>
            </div>
            <select id="level" value={level} onChange={(e) => setLevel(e.target.value as Level)} className={inputCls}>
              <option value="L">L – Low (7%)</option>
              <option value="M">M – Medium (15%)</option>
              <option value="Q">Q – Quartile (25%)</option>
              <option value="H">H – High (30%)</option>
            </select>
          </Section>
        </div>
      </div>

      <div aria-busy={generating} aria-live="polite" className="card-surface flex min-h-[420px] flex-col items-center justify-center p-6">
        {dataUrl ? (
          <div className="flex w-full flex-col items-center gap-6">
            <img src={dataUrl} alt={`QR code for ${generatedText}`} width={size} height={size} className="aspect-square w-full max-w-xs rounded-2xl border border-border" />
            <Button asChild className="flex h-auto items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-primary hover:bg-primary/90">
            <a href={dataUrl} download="snapqr-code.png">
              <Download className="h-5 w-5" aria-hidden /> Download PNG
            </a>
            </Button>
          </div>
        ) : (
          <div className="flex w-full flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border p-8 text-center">
            <QrCode className="h-16 w-16 text-muted-foreground/50" aria-hidden />
            <h2 className="mt-4 text-lg font-bold text-foreground">{generating ? "Generating…" : "Ready to Generate"}</h2>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">Enter a URL or text and click generate to see your free QR code preview here.</p>
          </div>
        )}
        {error && <p role="alert" className="mt-4 text-sm text-destructive">{error}</p>}
      </div>
    </div>
  );
}
