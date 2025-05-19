import Image from 'next/image';
import { formatDate } from '@/lib/blog';
import { type Post } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

interface BlogDetailProps {
  post: Post;
}

export function BlogDetail({ post }: BlogDetailProps) {
  return (
    <article className="mx-auto max-w-3xl">
      <div className="mb-8 space-y-4">
        <Badge variant="outline">{formatDate(post.date)}</Badge>
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image 
              src={post.author.image} 
              alt={post.author.name} 
              fill
              className="object-cover"
            />
          </div>
          <span className="font-medium">{post.author.name}</span>
        </div>
      </div>
      
      <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
        <Image 
          src={post.coverImage} 
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <Card className="p-6">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </Card>
    </article>
  );
}
