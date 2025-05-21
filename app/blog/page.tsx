'use client';

import { BlogList } from '@/components/blog/BlogList';
import { blogPosts } from '@/lib/blog';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Insights, tutorials, and updates from our team
          </p>
        </div> 
        <BlogList posts={blogPosts} />
      </div>
    </div>
  );
}
