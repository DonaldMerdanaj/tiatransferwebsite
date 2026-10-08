import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Travel Guides | TiaTransfer",
  description:
    "Guides to arriving at Tirana Airport and getting around Albania — written to support your transfer booking.",
  alternates: { canonical: "https://tiatransfer.com/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white text-[#132235]">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Guides", href: "/blog" }]} />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[900px] px-5 py-16 lg:px-8"
      >
        <h1 className="text-4xl font-extrabold tracking-[-.03em] sm:text-[38px]">
          Travel guides
        </h1>
        <div className="mt-10 grid gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-[10px] border border-[#e6eaf0] p-6 hover:border-[#ef1d25]"
            >
              <p className="text-xs text-[#647386]">
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-2 text-xl font-bold">{post.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#647386]">
                {post.description}
              </p>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
