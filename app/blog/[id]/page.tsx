'use client';

import { getPostById } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8 group">
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to all posts
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image 
                src={post.author.image} 
                alt={post.author.name} 
                fill 
                className="object-cover" 
              />
            </div>
            <span className="text-muted-foreground">{post.author.name}</span>
          </div>
          <span className="text-muted-foreground">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </span>
        </div>

        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
