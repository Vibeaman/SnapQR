import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Download, Palette, QrCode, UserX, Zap } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { QrGenerator } from "@/components/site/QrGenerator";
import { guides } from "@/lib/guides";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "/",
      "Free QR Code Generator – Create Custom QR Codes | SnapQR",
      "Generate free, custom QR codes for URLs and text instantly. Change colors, size and error correction, then download a high-quality PNG. No sign-up.",
    ),
  component: Index,
});

const steps = [
  { t: "Enter your URL or text", d: "Paste a website link, message or any text into the input field." },
  { t: "Customize your QR code", d: "Pick colors, choose a size and set the error correction level." },
  { t: "Download instantly", d: "Save your QR code as a high-quality PNG, ready to share or print." },
];

const features = [
  { i: QrCode, t: "Free QR Code Generator", d: "Create unlimited QR codes at no cost, with no watermarks or hidden fees." },
  { i: Palette, t: "Customize Your QR Codes", d: "Match your brand with custom foreground and background colors." },
  { i: Download, t: "Download in High Quality", d: "Export crisp PNG files up to 1024 px for screens and print." },
  { i: UserX, t: "No Sign-Up Required", d: "Start generating straight away. No account, no email, no friction." },
];

const homeFaqs: { q: string; a: React.ReactNode }[] = [
  { q: "Is SnapQR really free?", a: "Yes. You can generate and download as many QR codes as you like at no cost." },
  { q: "Do my QR codes expire?", a: "No. These are static codes, so they never expire. They only stop being useful if the page they point to is removed." },
  {
    q: "Do you store my links or text?",
    a: (
      <>
        Please read our <Link to="/privacy" className="text-primary hover:underline">Privacy page</Link> for the full details
        on what we collect and how it is used.
      </>
    ),
  },
  { q: "Can I use the QR codes for business and print?", a: "Yes. Download the image and use it on flyers, menus, packaging and more. Always test a printed code before you produce a large batch." },
  {
    q: "What should I do if my QR code will not scan?",
    a: (
      <>
        Check the contrast, make sure the code is not too small, and avoid placing it on a curved or shiny surface. Our{" "}
        <Link to="/guides/$slug" params={{ slug: "qr-code-size-print-guide" }} className="text-primary hover:underline">print size guide</Link> has more detail.
      </>
    ),
  },
];

const faqs = [
  { q: "Is SnapQR really free?", a: "Yes. Every feature on SnapQR is free to use, with no limits on how many QR codes you create and no watermarks on your downloads." },
  { q: "Do SnapQR QR codes expire?", a: "No. SnapQR creates static QR codes, which store your content directly inside the pattern. They keep working for as long as the link or text they contain is valid." },
  { q: "Are my QR codes stored anywhere?", a: "No. QR codes are generated in your browser on your own device. The text or URL you enter is never sent to or stored on our servers." },
  { q: "What size should I download?", a: "For screens and digital use, 256–512 px is plenty. For print, choose 1024 px and make sure the printed code is at least 2 × 2 cm (about 0.8 inches)." },
  { q: "Which error correction level should I choose?", a: "M is a good default. Choose Q or H if your code will be printed on surfaces that may get scratched or partly covered." },
];

function Index() {
  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:pt-12">
          <Breadcrumb items={[{ label: "QR Code Generator" }]} />
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
              Free QR Code Generator
              <span className="mt-2 block text-primary">Create Custom QR Codes Instantly</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Generate professional QR codes for your website, marketing campaigns, and more. No sign-up required. Completely free.
            </p>
          </div>
          <QrGenerator />
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">How to Generate a QR Code</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="card-surface p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-primary">{i + 1}</span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">Powerful Features for Everyone</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.t} className="card-surface p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary"><f.i className="h-6 w-6" aria-hidden /></span>
              <h3 className="mt-4 font-bold text-foreground">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about-snapqr" className="mx-auto max-w-3xl px-4 pb-16">
        <div className="prose-article">
          <h2>Free QR Code Generator, No Sign-Up Needed</h2>
          <p>
            SnapQR lets you turn any link, text, phone number or Wi-Fi login into a QR code in a few seconds. Type or paste
            what you want to share, click generate, and download the image. There is no account to create, no watermark on
            your code, and no payment.
          </p>
          <h3>How it works</h3>
          <ol>
            <li>Enter your link or text in the box above.</li>
            <li>Generate your QR code and check the preview.</li>
            <li>Download the image and use it on print or on screen.</li>
          </ol>
          <p>
            The code you get is a static QR code. That means the information is stored directly inside the image, so it keeps
            working for as long as the link or text it points to still exists.
          </p>
          <h3>What can you use a QR code for?</h3>
          <ul>
            <li>Sharing your website, portfolio or social media page</li>
            <li>Opening a WhatsApp chat with your business number</li>
            <li>Letting guests join your Wi-Fi without typing a password</li>
            <li>Showing a restaurant or shop menu</li>
            <li>Adding a quick link to flyers, posters, business cards and receipts</li>
            <li>Sharing contact details or event information</li>
          </ul>
          <h3>Tips for a QR code that scans every time</h3>
          <ul>
            <li>Keep strong contrast. Dark code on a light background works best.</li>
            <li>Leave a clear blank border around the code.</li>
            <li>Do not stretch or squash the image.</li>
            <li>Test the code with two or three different phones before you print.</li>
          </ul>
          <p>
            Read our <Link to="/guides" className="text-primary hover:underline">guides below</Link> for step-by-step help
            with the most popular uses.
          </p>
        </div>
        <h2 className="mb-6 mt-12 text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
        <div className="card-surface divide-y divide-border px-6">
          {homeFaqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                <h3 className="text-base font-semibold tracking-normal">{f.q}</h3>
                <span className="text-xl text-primary transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Why Use SnapQR?</h2>
            <ul className="mt-8 space-y-6">
              {[
                ["Completely Free", "No subscriptions, trials or paywalls. Every feature is free."],
                ["Instant Generation", "Your QR code appears in a split second, right in your browser."],
                ["Fully Customizable", "Control colors, size and error correction to suit any use."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary"><Check className="h-5 w-5" aria-hidden /></span>
                  <div>
                    <h3 className="font-bold">{t}</h3>
                    <p className="mt-1 text-navy-foreground/70">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl bg-navy-card">
              <QrCode className="h-40 w-40 text-primary" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">Popular QR Code Guides</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link key={g.slug} to="/guides/$slug" params={{ slug: g.slug }} className="card-surface group p-6 transition hover:border-primary">
              <h3 className="font-bold text-foreground group-hover:text-primary">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4" aria-hidden /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <div className="prose-article">
          <h2>The Free QR Code Generator Built for Everyone</h2>
          <p>
            SnapQR turns any link or piece of text into a scannable QR code in seconds. Whether you are adding a code to a
            business card, a restaurant table or a product label, you can create, customise and download it without
            creating an account.
          </p>
        </div>
        <h2 className="mb-6 mt-12 text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
        <div className="card-surface divide-y divide-border px-6">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                <h3 className="text-base font-semibold tracking-normal">{f.q}</h3>
                <span className="text-xl text-primary transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
