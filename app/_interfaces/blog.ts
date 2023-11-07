// ARCHIVE POST
interface BlogContainerProps {
  posts: Post[];
  categoriesData: Categories;
}

interface ItemPostProps {
  post: Post;
  isFirst?: boolean;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  next: () => void;
  prev: () => void;
}

interface SectionCategoriesProps {
  categories: Category[];
  onCategoryClick: (id: Category["id"] | null) => void;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Categories {
  categories: Category[];
}

interface SectionPostsProps {
  posts: Post[];
  currentPage: number;
}

interface Content {
  type: string;
  text?: JSX.Element[];
  path?: string;
  alt?: string;
}

interface Post {
  id: number;
  title: string;
  author: string;
  slug: string;
  date: string;
  category: number[];
  excerpt: string;
  thumbnail: { path: string; alt: string };
  content: Content[];
  related_posts: number[];
}

// SINGLE POST
interface SectionContentProps {
  data: Post;
}

interface SectionRelatedPostsProps {
  relatedPosts: number[];
}

interface SectionBlogTitleProps {
  title: string;
}

interface PostProps {
  params: {
    id: string;
  };
}
