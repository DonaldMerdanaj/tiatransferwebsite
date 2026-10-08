import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts, getPostBySlug } from "@/lib/data/blog";
import { getRouteBySlug } from "@/lib/data/routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | TiaTransfer`,
    description: post.description,
    alternates: { canonical: `https://tiatransfer.com/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedRoute = post.relatedRouteSlug ? getRouteBySlug(post.relatedRouteSlug) : undefined;

  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Guides", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
      <main className="mx-auto max-w-[700px] px-5 py-16 lg:px-8">
        <p className="text-xs text-[#647386]">
          {new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-[-.03em]">{post.title}</h1>
        <div className="mt-8 space-y-5 text-sm leading-7 text-[#647386]">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {relatedRoute && (
          <a
            href={`/routes/${relatedRoute.slug}`}
            className="mt-12 flex items-center justify-between rounded-[10px] bg-[#f5f7f9] p-5 hover:bg-[#e1e0df]"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#ef1d25]">Book this transfer</p>
              <p className="mt-1 font-semibold">Tirana Airport → {relatedRoute.city} — from €{relatedRoute.priceFromEUR}</p>
            </div>
            <span>→</span>
          </a>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
