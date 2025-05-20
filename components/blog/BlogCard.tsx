'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Post } from '@/lib/blog';
import { format, parseISO } from 'date-fns';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={post.coverImage} 
          alt={post.title} 
          fill 
          className="object-cover transition-transform duration-300 hover:scale-105" 
          priority
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image 
              src={post.author.image} 
              alt={post.author.name} 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="text-sm text-muted-foreground">{post.author.name}</div>
        </div>
        <div className="text-xs text-muted-foreground">
          {format(parseISO(post.date), 'MMMM dd, yyyy')}
        </div>
        <Link href={`/blog/${post.slug}`} className="group">
          <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
            {post.title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link 
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}





