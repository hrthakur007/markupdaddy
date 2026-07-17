import Link from "next/link";
import { WordPressPost } from "@/types/wordpress";

interface PostCardProps {
  post: WordPressPost;
}

export default function PostCard({ post }: PostCardProps) {
  const { title, slug, excerpt, date, featuredImage, author, categories } = post;

  // Format date nicely
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const imageUrl = featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=80";
  const imageAlt = featuredImage?.node?.altText || title;
  const authorName = author?.node?.name || "WordPress Writer";
  const authorAvatar = author?.node?.avatar?.url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80";

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 transition-all hover:translate-y-[-4px] hover:border-neutral-800 hover:shadow-2xl hover:shadow-teal-500/5 group">
      {/* Thumbnail */}
      <Link href={`/posts/${slug}`} className="relative block aspect-video w-full overflow-hidden bg-neutral-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {categories?.nodes?.[0] && (
          <span className="absolute top-4 left-4 rounded-full bg-neutral-950/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-teal-400 border border-neutral-800">
            {categories.nodes[0].name}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs text-neutral-500 mb-2">{formattedDate}</span>
        
        <h3 className="text-xl font-bold text-neutral-100 group-hover:text-teal-400 transition-colors line-clamp-2">
          <Link href={`/posts/${slug}`} dangerouslySetInnerHTML={{ __html: title }} />
        </h3>

        <div
          className="mt-3 text-sm text-neutral-400 line-clamp-3 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />

        {/* Author / Footer */}
        <div className="mt-6 flex items-center gap-3 border-t border-neutral-900 pt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={authorAvatar}
            alt={authorName}
            className="h-8 w-8 rounded-full border border-neutral-800 bg-neutral-900 object-cover"
          />
          <span className="text-xs font-medium text-neutral-300">{authorName}</span>
        </div>
      </div>
    </article>
  );
}
