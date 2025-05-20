'use client';

import { BlogCard } from './BlogCard';
import { Post } from '@/lib/blog';

interface BlogListProps {
  posts: Post[];
  limit?: number;
}

export function BlogList({ posts, limit }: BlogListProps) {
  const displayPosts = limit ? posts.slice(0, limit) : posts;
  
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {displayPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
