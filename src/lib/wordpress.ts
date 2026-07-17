import { WordPressPost } from "@/types/wordpress";

const API_URL = process.env.WORDPRESS_API_URL || process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// Beautiful mock posts to fall back to if the API is not configured or fails
const MOCK_POSTS: WordPressPost[] = [
  {
    id: "mock-1",
    title: "Why Headless WordPress is the Future of Content Management",
    slug: "why-headless-wordpress-future",
    excerpt: "Discover the architectural, security, and performance benefits of using WordPress as a backend CMS coupled with a Next.js frontend on Vercel.",
    date: "2026-07-15T12:00:00Z",
    content: `
      <p class="lead text-xl text-neutral-400 mb-6 font-light">The web is evolving, and monolithic CMS setups are no longer the default choice. Coupling WordPress's world-class editor with Next.js is the ultimate setup for speed and SEO.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Architectural Shift</h2>
      <p class="mb-4">Traditionally, WordPress handles both the database (admin dashboard) and the presentation layer (themes). While this was revolutionary in 2003, it introduces significant speed overhead and security risks in 2026. Separating the frontend from the backend—an architecture known as <strong>Headless CMS</strong>—solves these problems elegantly.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Key Benefits of Headless WordPress</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Blazing Fast Performance:</strong> Using Next.js with Incremental Static Regeneration (ISR) lets you build static HTML files served via Vercel's global CDN. Page transitions are instant.</li>
        <li><strong>Improved Security:</strong> Your database and WordPress login pages are hidden from the public. Since the frontend only communicates via API, there is no direct PHP or SQL execution exposed to web visitors.</li>
        <li><strong>Developer Experience:</strong> Developers can build stunning UI using modern tools like Tailwind CSS, React, and TypeScript, instead of writing PHP templates.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Setting up the Pipeline</h2>
      <p class="mb-4">The core connection is established via WPGraphQL, a plugin that turns your WordPress site into a high-performance GraphQL API. On Vercel, we set up deploy hooks so that whenever you click "Publish" in your WordPress admin, Vercel initiates a webhook to update the static build in seconds.</p>
    `,
    featuredImage: {
      node: {
        sourceUrl: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?w=1200&auto=format&fit=crop&q=80",
        altText: "Headless CMS abstract illustration",
      },
    },
    author: {
      node: {
        name: "Alex Rivera",
        avatar: {
          url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        },
      },
    },
    categories: {
      nodes: [
        { name: "Development", slug: "development" },
        { name: "Headless", slug: "headless" },
      ],
    },
  },
  {
    id: "mock-2",
    title: "Mastering Fluid Design with Tailwind CSS v4",
    slug: "mastering-fluid-design-tailwind-v4",
    excerpt: "Explore the new features of Tailwind CSS v4, including CSS-first configuration, simplified theme customizations, and modern typography.",
    date: "2026-07-16T10:30:00Z",
    content: `
      <p class="lead text-xl text-neutral-400 mb-6 font-light">Tailwind CSS v4 is a complete rewrite built for speed. It drops the JavaScript configuration file in favor of a native CSS-first approach.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">CSS-First Configuration</h2>
      <p class="mb-4">In Tailwind v4, you no longer need <code>tailwind.config.js</code>. Instead, configuration is written directly in your CSS using the new <code>@theme</code> directive. This fits perfectly with modern browser standards and keeps the project clean.</p>
      
      <h3 class="text-xl font-semibold text-white mt-6 mb-2">Example Configuration</h3>
      <pre class="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm border border-neutral-800 text-teal-400 mb-6">
@import "tailwindcss";

@theme {
  --color-primary-500: #06b6d4;
  --font-sans: "Inter", sans-serif;
}</pre>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Under-the-Hood Performance</h2>
      <p class="mb-4">The new Rust-based compiler makes builds up to 10x faster. Incremental build updates happen in single-digit milliseconds, making local development feel incredibly snappy. In addition, Tailwind v4 features automatic source detection, meaning it will scan your Next.js project files automatically without manual path configuration.</p>
    `,
    featuredImage: {
      node: {
        sourceUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
        altText: "Stylized layout design workspace",
      },
    },
    author: {
      node: {
        name: "Sarah Chen",
        avatar: {
          url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        },
      },
    },
    categories: {
      nodes: [
        { name: "Design", slug: "design" },
        { name: "CSS", slug: "css" },
      ],
    },
  },
  {
    id: "mock-3",
    title: "Optimizing Next.js for Core Web Vitals on Vercel",
    slug: "optimizing-nextjs-core-web-vitals",
    excerpt: "Achieve perfect Lighthouse scores using advanced Next.js routing, server components, image optimization, and Vercel edge capabilities.",
    date: "2026-07-17T09:15:00Z",
    content: `
      <p class="lead text-xl text-neutral-400 mb-6 font-light">Performance is user experience. Google ranks faster sites higher. Let's look at how we can optimize our Next.js metrics for a perfect 100/100 score.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Focusing on LCP (Largest Contentful Paint)</h2>
      <p class="mb-4">LCP measures when the main content of a page has likely loaded. For a blog, this is usually the hero image or the post title. To optimize LCP:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Use Next.js <code>next/image</code> component with <code>priority</code> set to <code>true</code> for the main image.</li>
        <li>Preload crucial fonts to avoid Flash of Unstyled Text (FOUT) or layout shifts.</li>
        <li>Avoid using massive JavaScript libraries on the client. Lean heavily on React Server Components (RSC) which render markup on the server.</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Leveraging Vercel Edge Cache</h2>
      <p class="mb-4">By utilizing Next.js Incremental Static Regeneration (ISR), pages are built statically and cached at Vercel's edge locations. When a user requests a page, it is served globally within milliseconds. When content is updated, Next.js rebuilds the page in the background while keeping the cached version live until the build completes.</p>
    `,
    featuredImage: {
      node: {
        sourceUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
        altText: "Performance analytics graph on screen",
      },
    },
    author: {
      node: {
        name: "Marcus Vance",
        avatar: {
          url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        },
      },
    },
    categories: {
      nodes: [
        { name: "Performance", slug: "performance" },
        { name: "Next.js", slug: "nextjs" },
      ],
    },
  },
];

// Helper to execute GraphQL queries on WordPress
async function fetchWordPressAPI(query: string, variables: Record<string, any> = {}) {
  if (!API_URL) {
    throw new Error("WordPress API URL is not defined.");
  }

  const headers = { "Content-Type": "application/json" };
  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 }, // Cache pages for 60 seconds (ISR)
  });

  const json = await res.json();
  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error("Failed to fetch WordPress API: " + JSON.stringify(json.errors));
  }

  return json.data;
}

// Get all posts (or fall back to mock data if API fails or is not configured)
export async function getPosts(): Promise<WordPressPost[]> {
  if (!API_URL) {
    console.log("No WORDPRESS_API_URL defined. Using mock data.");
    return MOCK_POSTS;
  }

  try {
    const data = await fetchWordPressAPI(`
      query GetPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
          nodes {
            id
            title
            slug
            excerpt
            content
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    `);

    // Ensure we map fields safely
    return data.posts.nodes;
  } catch (error) {
    console.warn("Failed to fetch from WordPress, falling back to mock posts. Error:", error);
    return MOCK_POSTS;
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  // If slug matches a mock post, we can return it when API is not configured
  const mockPost = MOCK_POSTS.find((post) => post.slug === slug);

  if (!API_URL) {
    return mockPost || null;
  }

  try {
    const data = await fetchWordPressAPI(
      `
      query GetPostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          id
          title
          slug
          excerpt
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
      `,
      { slug }
    );

    return data.post || null;
  } catch (error) {
    console.warn(`Failed to fetch slug "${slug}" from WordPress, checking mock fallback. Error:`, error);
    return mockPost || null;
  }
}

// Get all post slugs for generating static paths (Next.js generateStaticParams)
export async function getAllPostSlugs(): Promise<string[]> {
  if (!API_URL) {
    return MOCK_POSTS.map((post) => post.slug);
  }

  try {
    const data = await fetchWordPressAPI(`
      query GetAllSlugs {
        posts(first: 100) {
          nodes {
            slug
          }
        }
      }
    `);
    return data.posts.nodes.map((post: { slug: string }) => post.slug);
  } catch (error) {
    console.warn("Failed to fetch all slugs, using mock paths.", error);
    return MOCK_POSTS.map((post) => post.slug);
  }
}
