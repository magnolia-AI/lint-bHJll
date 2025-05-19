import { BlogList } from '@/components/blog/BlogList';
import { blogPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | My Cool Blog',
  description: 'Read the latest articles on web development, design, and more.',
};

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Our Blog
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Explore our latest articles on web development, design, and technology.
        </p>
      </div>
      <BlogList posts={blogPosts} />
    </div>
  );
}
