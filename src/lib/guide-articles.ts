const sources: Record<string, string> = Object.fromEntries(
  Object.entries(import.meta.glob<string>("../content/guides/*.md", { query: "?raw", import: "default", eager: true }))
    .map(([path, content]) => [path.replace(/^.*\//, "").replace(/\.md$/, ""), content]),
);

export function getGuideArticle(slug: string) {
  const source = sources[slug];
  if (!source) return undefined;
  const [heading, ...lines] = source.trim().split("\n");
  if (!heading) return undefined;
  const body = lines.join("\n").trim();
  const description = body.split(/\n\s*\n/)[0] ?? "";
  return {
    title: heading.replace(/^#\s+/, ""),
    description,
    body,
  };
}