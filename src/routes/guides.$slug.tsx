import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { allGuides as guides, getRelatedGuides } from "@/lib/guides";
import { getGuideArticle } from "@/lib/guide-articles";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = guides.find((g) => g.slug === params.slug);
    const article = getGuideArticle(params.slug);
    if (!guide || !article) throw notFound();
    return { ...guide, ...article };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? seo(`/guides/${params.slug}`, `${loaderData.title} | SnapQR`, loaderData.description, "article")
      : { meta: [{ title: "Guide not found | SnapQR" }, { name: "robots", content: "noindex" }] },
  component: GuidePage,
});

function GuidePage() {
  const guide = Route.useLoaderData();
  const related = getRelatedGuides(guide.slug);
  return (
    <article className="mx-auto max-w-[720px] px-4 py-10 md:py-14">
      <Breadcrumb items={[{ label: "Guides", to: "/guides" }, { label: guide.title }]} />
      <h1 className="break-words text-4xl font-extrabold text-foreground md:text-5xl">{guide.title}</h1>
      <div className="prose-article mt-6 min-w-0 [overflow-wrap:anywhere] [&_code]:rounded-sm [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-foreground [&_h2]:tracking-normal [&_strong]:text-foreground">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ children }) => (
              <div className="max-w-full overflow-x-auto">
                <table>{children}</table>
              </div>
            ),
          }}
        >
          {guide.body}
        </ReactMarkdown>
      </div>
      <div className="mt-10 rounded-3xl bg-primary-soft p-6 text-center">
        <p className="font-semibold text-foreground">Ready to make your own?</p>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-primary hover:bg-primary/90">
          <Zap className="h-5 w-5" aria-hidden /> Try the free generator
        </Link>
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Related guides</h2>
        <div className="mt-6 grid gap-4">
          {related.map((g) => (
            <Link key={g.slug} to="/guides/$slug" params={{ slug: g.slug }} className="card-surface p-5 transition hover:border-primary">
              <h3 className="font-bold text-foreground">{g.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
