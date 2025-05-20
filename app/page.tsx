'use client';
import { Button } from '@/components/ui/button';
import { BlogList } from '@/components/blog/BlogList';
import { blogPosts } from '@/lib/blog';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="font-bold tracking-tight text-5xl lg:text-6xl text-rose-700">
            My Awesome Blog
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Sharing insights about web development, design, and technology.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/blog">Read Blog</Link>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <Button variant="ghost" asChild className="group">
              <Link href="/blog" className="flex items-center gap-2">
                View All
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <BlogList posts={blogPosts} limit={3} />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest posts and updates delivered to your inbox.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

