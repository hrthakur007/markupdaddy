import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllPostSlugs } from "@/lib/wordpress";
import { notFound } from "next/navigation";

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
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-indigo-600 transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">&larr;</span> Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 text-center md:text-left">
          {categories?.nodes?.[0] && (
            <span className="inline-block rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 border border-indigo-100/50 mb-4 shadow-sm">
              {categories.nodes[0].name}
            </span>
          )}

          <h1
            className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {/* Author metadata */}
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 border-t border-b border-neutral-100 py-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={authorAvatar}
                alt={authorName}
                className="h-9 w-9 rounded-full border border-neutral-200 bg-neutral-50 object-cover"
              />
              <span className="text-sm font-bold text-neutral-800">{authorName}</span>
            </div>
            <div className="hidden sm:block text-neutral-300">|</div>
            <time className="text-sm text-neutral-500 font-medium">{formattedDate}</time>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-neutral-100 aspect-video max-h-[480px] w-full bg-neutral-100 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="wordpress-content max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>

      <Footer />
    </div>
  );
}
