import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { CONTACT_EMAIL, seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo("/privacy", "Privacy Policy | SnapQR", "Read how SnapQR handles your data, cookies, Google AdSense advertising, and why your QR codes are never stored."),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="mx-auto max-w-[720px] px-4 py-10 md:py-14">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      <h1 className="text-4xl font-extrabold text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: October 22, 2026</p>
      <div className="prose-article mt-6">
        <p>This Privacy Policy explains how SnapQR ("we", "us", "our") collects, uses and protects information when you visit https://snapqr-j.com (the "Site"). By using the Site you agree to the practices described here.</p>
        <h2>1. QR Codes Are Generated in Your Browser</h2>
        <p>All QR codes on SnapQR are created locally in your web browser using JavaScript. The URLs or text you enter are not sent to our servers, and we do not store, log or have access to the QR codes you create or download.</p>
        <h2>2. Information We Collect</h2>
        <h3>Information you provide</h3>
        <p>If you contact us by email, we receive your name, email address and the content of your message. We use this only to respond to you.</p>
        <h3>Information collected automatically</h3>
        <p>Like most websites, our hosting provider and advertising partners may automatically collect technical data such as your IP address, browser type, device type, referring pages and the date and time of your visit.</p>
        <h2>3. Cookies</h2>
        <p>Cookies are small text files stored on your device. We use:</p>
        <ul>
          <li><strong>Essential storage</strong> to remember your cookie consent choice (stored in your browser's local storage).</li>
          <li><strong>Advertising cookies</strong> set by Google and its partners to serve and measure ads.</li>
          <li><strong>Analytics cookies</strong>, where used, to understand how visitors use the Site.</li>
        </ul>
        <p>You can accept or decline non-essential cookies using our cookie banner, and change your choice at any time via "Cookie Settings" in the footer. You can also block or delete cookies in your browser settings.</p>
        <h2>4. Google AdSense and Third-Party Advertising</h2>
        <p>We use Google AdSense to display advertisements. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this Site or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to this and other sites on the internet.</p>
        <p>You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" rel="noopener noreferrer" target="_blank">Google Ads Settings</a> or <a href="https://www.aboutads.info/choices" rel="noopener noreferrer" target="_blank">www.aboutads.info</a>. For more information, see <a href="https://policies.google.com/technologies/ads" rel="noopener noreferrer" target="_blank">how Google uses data from partner sites</a>.</p>
        <p>Third-party advertisers may also use web beacons and similar technologies. Their use of your information is governed by their own privacy policies, not ours.</p>
        <h2>5. How We Use Information</h2>
        <ul>
          <li>To operate, maintain and improve the Site.</li>
          <li>To display advertising that keeps SnapQR free.</li>
          <li>To respond to your messages and requests.</li>
          <li>To detect and prevent abuse or security issues.</li>
        </ul>
        <h2>6. Data Sharing</h2>
        <p>We do not sell your personal information. Data may be processed by service providers such as our hosting provider and Google, or disclosed when required by law.</p>
        <h2>7. Your Rights</h2>
        <p>Depending on where you live (for example under the GDPR or CCPA), you may have the right to access, correct, delete or restrict the processing of your personal data, and to object to personalised advertising. To make a request, email us at {CONTACT_EMAIL}.</p>
        <h2>8. Children's Privacy</h2>
        <p>The Site is not directed to children under 13, and we do not knowingly collect personal information from them.</p>
        <h2>9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes take effect when posted on this page with a new "Last updated" date.</p>
        <h2>10. Contact</h2>
        <p>If you have questions about this policy, contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </div>
    </article>
  );
}
