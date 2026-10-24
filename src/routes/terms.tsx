import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { CONTACT_EMAIL, seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => seo("/terms", "Terms of Service | SnapQR", "The terms and conditions for using SnapQR, the free online QR code generator."),
  component: Terms,
});

function Terms() {
  return (
    <article className="mx-auto max-w-[720px] px-4 py-10 md:py-14">
      <Breadcrumb items={[{ label: "Terms of Service" }]} />
      <h1 className="text-4xl font-extrabold text-foreground">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: October 22, 2026</p>
      <div className="prose-article mt-6">
        <p>These Terms of Service ("Terms") govern your use of SnapQR at https://snapqr-j.com (the "Service"). By using the Service you agree to these Terms. If you do not agree, please do not use the Service.</p>
        <h2>1. The Service</h2>
        <p>SnapQR provides a free tool for generating QR codes in your browser. We may change, suspend or discontinue any part of the Service at any time without notice.</p>
        <h2>2. Acceptable Use</h2>
        <p>You agree not to use SnapQR to create QR codes that:</p>
        <ul>
          <li>Link to malware, phishing pages or other harmful content.</li>
          <li>Promote illegal activity, fraud or scams.</li>
          <li>Infringe the intellectual property or privacy rights of others.</li>
          <li>Contain hateful, harassing or abusive content.</li>
        </ul>
        <p>You must not attempt to disrupt, overload or gain unauthorised access to the Service.</p>
        <h2>3. Your Content</h2>
        <p>You are solely responsible for the URLs and text you encode. Because QR codes are generated on your device, we do not review, store or monitor them.</p>
        <h2>4. Ownership of Generated QR Codes</h2>
        <p>You may use QR codes created with SnapQR for personal and commercial purposes without attribution. The SnapQR name, logo and website design remain our property.</p>
        <h2>5. Advertising</h2>
        <p>The Service is supported by advertising, including Google AdSense. We are not responsible for the content of third-party ads or the websites they link to.</p>
        <h2>6. No Warranty</h2>
        <p>The Service is provided "as is" and "as available" without warranties of any kind. We do not guarantee that every QR code will scan on every device. Always test your codes before printing or distributing them.</p>
        <h2>7. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, SnapQR shall not be liable for any indirect, incidental or consequential damages, including printing costs or lost revenue, arising from your use of the Service.</p>
        <h2>8. Changes to These Terms</h2>
        <p>We may revise these Terms at any time. Continued use of the Service after changes are posted means you accept the revised Terms.</p>
        <h2>9. Contact</h2>
        <p>Questions about these Terms can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </div>
    </article>
  );
}
