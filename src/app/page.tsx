import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/wordpress";

export const revalidate = 60; // Regenerate pages every 60 seconds (ISR)

export default async function Home() {
  const posts = await getPosts();
  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex-grow">
        {/* Hero Section */}
        <section className="text-center md:text-left md:flex md:items-center md:justify-between border-b border-neutral-900 pb-12 md:pb-16 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Headless WordPress
            </h1>
            <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
              Welcome to your modern, high-performance blog. Powered by **WordPress** hosted on cPanel as a decoupled backend, and **Next.js** deployed on Vercel as the lightning-fast frontend.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-teal-500 hover:bg-teal-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors shadow-lg shadow-teal-500/20"
            >
              Get Code
            </a>
            <Link
              href="#posts"
              className="rounded-xl border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 px-5 py-3 text-sm font-semibold text-neutral-200 transition-colors"
            >
              Read Articles
            </Link>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-6">
              Featured Article
            </h2>
            <div className="overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950/40 transition-all hover:border-neutral-800 hover:shadow-2xl hover:shadow-teal-500/5 group">
              <div className="grid gap-8 lg:grid-cols-12 items-center">
                {/* Image */}
                <Link
                  href={`/posts/${featuredPost.slug}`}
                  className="relative block aspect-video w-full overflow-hidden bg-neutral-900 lg:col-span-7 h-full min-h-[300px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      featuredPost.featuredImage?.node?.sourceUrl ||
                      "https://images.unsplash.com/photo-1618401471353-b98aedd07871?w=1200&auto=format&fit=crop&q=80"
                    }
                    alt={featuredPost.featuredImage?.node?.altText || featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  {featuredPost.categories?.nodes?.[0] && (
                    <span className="absolute top-6 left-6 rounded-full bg-neutral-950/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-teal-400 border border-neutral-800">
                      {featuredPost.categories.nodes[0].name}
                    </span>
                  )}
                </Link>

                {/* Info */}
                <div className="p-8 lg:p-12 lg:col-span-5 flex flex-col justify-center h-full">
                  <span className="text-xs text-neutral-500 mb-3">
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  
                  <h3 className="text-2xl font-black text-white group-hover:text-teal-400 transition-colors leading-snug lg:text-3xl">
                    <Link
                      href={`/posts/${featuredPost.slug}`}
                      dangerouslySetInnerHTML={{ __html: featuredPost.title }}
                    />
                  </h3>

                  <div
                    className="mt-4 text-base text-neutral-400 line-clamp-4 leading-relaxed font-light"
                    dangerouslySetInnerHTML={{ __html: featuredPost.excerpt }}
                  />

                  {/* Author / Details */}
                  <div className="mt-8 flex items-center gap-3 border-t border-neutral-900 pt-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        featuredPost.author?.node?.avatar?.url ||
                        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
                      }
                      alt={featuredPost.author?.node?.name || "WordPress Writer"}
                      className="h-10 w-10 rounded-full border border-neutral-800 bg-neutral-900 object-cover"
                    />
                    <div>
                      <div className="text-sm font-semibold text-neutral-200">
                        {featuredPost.author?.node?.name || "WordPress Writer"}
                      </div>
                      <div className="text-xs text-neutral-500">Author</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Post Grid */}
        <section id="posts" className="scroll-mt-24">
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-8">
            Latest Articles
          </h2>
          {gridPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-neutral-800 rounded-2xl bg-neutral-950/20">
              <p className="text-neutral-500">More articles are being prepared. Check back shortly!</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
