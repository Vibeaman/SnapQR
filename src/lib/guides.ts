export type Guide = { slug: string; title: string; summary: string };

export const guides: Guide[] = [
  {
    slug: "whatsapp-qr-code",
    title: "How to Create a WhatsApp QR Code",
    summary: "Let customers start a WhatsApp chat with you in one scan, with an optional pre-filled message.",
  },
  {
    slug: "wifi-qr-code",
    title: "How to Make a Wi-Fi QR Code",
    summary: "Share your Wi-Fi network with guests instantly, without reading out long passwords.",
  },
  {
    slug: "static-vs-dynamic-qr-codes",
    title: "Static vs Dynamic QR Codes",
    summary: "Understand the difference between static and dynamic QR codes and when to use each one.",
  },
  {
    slug: "restaurant-menu-qr-code",
    title: "Restaurant Menu QR Codes",
    summary: "Put your menu on every table with a contactless QR code that guests can scan in seconds.",
  },
  {
    slug: "qr-code-size-print-guide",
    title: "QR Code Size and Print Guide",
    summary: "Choose the right QR code size, contrast and resolution so your printed codes always scan.",
  },
];

// The homepage retains its original featured selection.
export const allGuides: Guide[] = [
  ...guides,
  { slug: "business-card-qr-code", title: "How to Add a QR Code to Your Business Card", summary: "Choose a clear action, size your code correctly and test it before printing your business cards." },
  { slug: "website-link-qr-code", title: "How to Create a QR Code for a Website Link", summary: "Turn a website link into a QR code with a clear label and a mobile-friendly destination." },
  { slug: "instagram-social-media-qr-code", title: "How to Create a QR Code for Instagram and Social Media", summary: "Share your social profiles through printed QR codes and give people a reason to follow." },
  { slug: "pdf-qr-code", title: "How to Create a QR Code for a PDF File", summary: "Host your document online, create a code from its public link and test it on real phones." },
  { slug: "event-invitation-qr-code", title: "How to Use QR Codes for Event Invitations", summary: "Add RSVP forms, directions or event details to invitations with one easy scan." },
  { slug: "contact-vcard-qr-code", title: "How to Create a Contact Card (vCard) QR Code", summary: "Create a vCard QR code that lets people save your contact details straight to their phone." },
  { slug: "are-qr-codes-safe", title: "Are QR Codes Safe? How to Avoid QR Code Scams", summary: "Recognize QR phishing, check links before opening them and protect your private details." },
  { slug: "how-to-scan-qr-code-iphone-android", title: "How to Scan a QR Code on iPhone and Android", summary: "Scan codes with your camera or Google Lens, including codes in saved images." },
  { slug: "qr-codes-small-business-marketing", title: "How to Use QR Codes to Market a Small Business", summary: "Connect flyers, packaging and shop displays to online actions with a simple QR campaign." },
  { slug: "google-maps-location-qr-code", title: "How to Create a QR Code for a Google Maps Location", summary: "Share your exact location so one scan opens directions in the visitor's maps app." },
];

const relatedSlugs: Record<string, string[]> = {
  "whatsapp-qr-code": ["business-card-qr-code", "event-invitation-qr-code", "qr-codes-small-business-marketing"],
  "wifi-qr-code": ["how-to-scan-qr-code-iphone-android", "are-qr-codes-safe", "qr-code-size-print-guide"],
  "static-vs-dynamic-qr-codes": ["website-link-qr-code", "pdf-qr-code", "contact-vcard-qr-code"],
  "restaurant-menu-qr-code": ["pdf-qr-code", "google-maps-location-qr-code", "qr-codes-small-business-marketing"],
  "qr-code-size-print-guide": ["business-card-qr-code", "event-invitation-qr-code", "how-to-scan-qr-code-iphone-android"],
  "business-card-qr-code": ["contact-vcard-qr-code", "whatsapp-qr-code", "qr-code-size-print-guide"],
  "website-link-qr-code": ["static-vs-dynamic-qr-codes", "qr-code-size-print-guide", "qr-codes-small-business-marketing"],
  "instagram-social-media-qr-code": ["website-link-qr-code", "business-card-qr-code", "qr-codes-small-business-marketing"],
  "pdf-qr-code": ["restaurant-menu-qr-code", "website-link-qr-code", "static-vs-dynamic-qr-codes"],
  "event-invitation-qr-code": ["whatsapp-qr-code", "google-maps-location-qr-code", "qr-code-size-print-guide"],
  "contact-vcard-qr-code": ["business-card-qr-code", "static-vs-dynamic-qr-codes", "qr-code-size-print-guide"],
  "are-qr-codes-safe": ["how-to-scan-qr-code-iphone-android", "website-link-qr-code", "static-vs-dynamic-qr-codes"],
  "how-to-scan-qr-code-iphone-android": ["are-qr-codes-safe", "qr-code-size-print-guide", "wifi-qr-code"],
  "qr-codes-small-business-marketing": ["instagram-social-media-qr-code", "google-maps-location-qr-code", "whatsapp-qr-code"],
  "google-maps-location-qr-code": ["event-invitation-qr-code", "qr-codes-small-business-marketing", "qr-code-size-print-guide"],
};

export function getRelatedGuides(slug: string): Guide[] {
  return (relatedSlugs[slug] ?? []).flatMap((relatedSlug) => {
    const guide = allGuides.find((item) => item.slug === relatedSlug);
    return guide ? [guide] : [];
  });
}
