export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText?: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  };
}

export interface Author {
  node: {
    name: string;
    avatar?: {
      url: string;
    };
  };
}

export interface Category {
  name: string;
  slug: string;
}

export interface Categories {
  nodes: Category[];
}

export interface WordPressPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage?: FeaturedImage | null;
  author?: Author | null;
  categories?: Categories | null;
}

export interface WordPressPostNode {
  node: WordPressPost;
}

export interface WordPressPostsConnection {
  nodes: WordPressPost[];
}

export interface WordPressGraphQLResponse<T> {
  data: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
  }>;
}
