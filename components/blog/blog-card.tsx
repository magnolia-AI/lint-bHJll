'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/lib/blog'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link className="block h-full">
        <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              fill 
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardContent className="p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight">{post.title}</h3>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={post.author.image} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{post.author.name}</span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
