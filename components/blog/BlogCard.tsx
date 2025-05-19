import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/blog';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { type Post } from '@/lib/blog';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {formatDate(post.date)}
            </Badge>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight">{post.title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center gap-3 border-t p-4">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image 
              src={post.author.image} 
              alt={post.author.name} 
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium">{post.author.name}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
