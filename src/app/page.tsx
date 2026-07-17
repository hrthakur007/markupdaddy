import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/wordpress";

export const revalidate = 60; // ISR cache validation interval

export default async function Home() {
  const posts = await getPosts();
  // Display only the first 3 posts for the agency blog preview section
  const previewPosts = posts.slice(0, 3);

  // Agency Services list
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Drive high-intent organic search traffic, scale keyword rankings, and establish authority with modern technical and on-page SEO frameworks.",
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      badge: "Organic Growth",
    },
    {
      title: "Paid Ads & Media (PPC)",
      description: "Scale Customer Acquisition via Meta Ads, Google Search & Display, and LinkedIn Campaigns engineered for maximum Return on Ad Spend (ROAS).",
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: "Paid Acquisition",
    },
    {
      title: "Social Media Marketing (SMM)",
      description: "Build native communities, increase engagement, and launch campaigns that capture attention across Instagram, YouTube, and TikTok.",
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      badge: "Community",
    },
    {
      title: "Conversion Optimization (CRO)",
      description: "Transform existing site traffic into paying leads with A/B testing, user journey mapping, and premium UX copywriting.",
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      badge: "Performance",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "MarkupDaddy transformed our entire organic acquisition. Our inbound pipeline grew by 140% in just 6 months, and our customer acquisition cost dropped significantly.",
      author: "David Miller",
      role: "VP of Growth, FinTech Scale",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    },
    {
      quote: "Their performance marketing team has an unparalleled focus on unit economics. We scaled our meta budget by 3x while successfully maintaining target return-on-ad-spend.",
      author: "Elena Rostova",
      role: "Head of Marketing, BloomRetail",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    },
    {
      quote: "The combination of high-speed Next.js frontend and WordPress headless CMS backend they built makes our marketing site insanely fast. Best engineering decision we've made.",
      author: "Marcus Vance",
      role: "CTO, NextStream",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    },
  ];

  // Tech stack logos/names
  const technologies = [
    "Google Ads",
    "Meta Ads",
    "Semrush",
    "HubSpot",
    "Next.js",
    "Headless WordPress",
    "Google Analytics",
    "Vercel Edge",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-white py-20 md:py-32 border-b border-neutral-100">
          <div className="absolute inset-0 bg-radial-at-t from-indigo-50/40 via-transparent to-transparent"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 border border-indigo-100/50 mb-6">
                Data-Driven Marketing Agency
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Data-Driven Marketing,{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 bg-clip-text text-transparent">
                  Amplified.
                </span>
              </h1>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
                We design, scale, and optimize customer acquisition funnels for hyper-growth brands. Using advanced analytics, conversion copy, and modern headless frontends, we turn traffic into predictable revenue.
              </p>
              <div className="mt-10 flex gap-4 justify-center">
                <Link
                  href="#services"
                  className="rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5"
                >
                  Explore Services
                </Link>
                <Link
                  href="#contact"
                  className="rounded-xl border border-neutral-200 hover:bg-neutral-50 px-6 py-3.5 text-sm font-bold text-neutral-700 transition-all hover:-translate-y-0.5"
                >
                  Let's Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-neutral-50/50 border-b border-neutral-100 scroll-mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                Growth Capabilities Built to Scale
              </h2>
              <p className="mt-4 text-base text-neutral-600">
                Forget vanity metrics. We focus on pipelines, customer acquisition cost, and net margins. Here is how we accelerate your growth.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white border border-neutral-100 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">
                    {service.badge}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES USED */}
        <section id="tech" className="py-20 bg-white border-b border-neutral-100 scroll-mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                Core Integrations & Platforms
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                We leverage industry-leading software to automate, run, and track execution.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-2xl bg-neutral-50 px-5 py-3 text-sm font-semibold text-neutral-700 border border-neutral-200/60 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-24 bg-neutral-50/50 border-b border-neutral-100 scroll-mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                What Partners Say About Us
              </h2>
              <p className="mt-4 text-base text-neutral-600">
                Discover the real financial and scaling outcomes achieved by our client partners.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-white border border-neutral-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-neutral-700 italic text-base leading-relaxed font-normal">
                      "{t.quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-8 border-t border-neutral-50 pt-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">{t.author}</h4>
                      <p className="text-xs text-neutral-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST INSIGHTS / BLOG INTEGRATION */}
        <section id="insights" className="py-24 bg-white scroll-mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Headless Blog Feed
                </span>
                <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl mt-2">
                  Growth Insights & Tactics
                </h2>
              </div>
              <p className="mt-4 md:mt-0 text-sm text-neutral-500 max-w-md">
                We write about technology, campaign management, conversion rate optimization, and our experimental frameworks.
              </p>
            </div>

            {previewPosts.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {previewPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-neutral-200 rounded-3xl bg-neutral-50/20">
                <p className="text-neutral-500">Connecting insights feed...</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
