import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllPostSlugs } from "@/lib/wordpress";

export const revalidate = 60; // ISR validation interval

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all existing slugs
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { title, content, date, featuredImage, author, categories } = post;
  
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const imageUrl = featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&auto=format&fit=crop&q=80";
  const imageAlt = featuredImage?.node?.altText || title;
  const authorName = author?.node?.name || "WordPress Writer";
  const authorAvatar = author?.node?.avatar?.url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80";

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-teal-400 transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Home
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 text-center md:text-left">
          {categories?.nodes?.[0] && (
            <span className="inline-block rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-teal-400 border border-neutral-800 mb-4">
              {categories.nodes[0].name}
            </span>
          )}

          <h1
            className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {/* Author metadata */}
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 border-t border-b border-neutral-900 py-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={authorAvatar}
                alt={authorName}
                className="h-10 w-10 rounded-full border border-neutral-800 bg-neutral-900 object-cover"
              />
              <span className="text-sm font-semibold text-neutral-200">{authorName}</span>
            </div>
            <div className="hidden sm:block text-neutral-700">|</div>
            <time className="text-sm text-neutral-400">{formattedDate}</time>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-neutral-900 aspect-video max-h-[500px] w-full bg-neutral-950">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="wordpress-content">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>

      <Footer />
    </>
  );
}
