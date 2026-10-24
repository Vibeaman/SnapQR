import { describe, expect, it } from "vitest";
import { allGuides, guides, getRelatedGuides } from "@/lib/guides";
import { getGuideArticle } from "@/lib/guide-articles";

describe("Guide catalog", () => {
  it("keeps the original homepage selection while adding the nine unique guide destinations", () => {
    expect(guides.map((guide) => guide.slug)).toEqual([
      "whatsapp-qr-code", "wifi-qr-code", "static-vs-dynamic-qr-codes", "restaurant-menu-qr-code", "qr-code-size-print-guide",
    ]);
    expect(allGuides).toHaveLength(15);
    expect(new Set(allGuides.map((guide) => guide.slug)).size).toBe(15);
    for (const guide of allGuides) expect(getGuideArticle(guide.slug)).toBeDefined();
  });
  it("provides valid related destinations without linking an article to itself", () => {
    for (const guide of allGuides) {
      const related = getRelatedGuides(guide.slug);
      expect(related).toHaveLength(3);
      expect(related.some((item) => item.slug === guide.slug)).toBe(false);
      for (const item of related) expect(getGuideArticle(item.slug)).toBeDefined();
    }
    expect(getRelatedGuides("restaurant-menu-qr-code").map((guide) => guide.slug)).toContain("pdf-qr-code");
  });
});