'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter transition-colors hover:text-primary">
          Magnolia Blog
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="/subscribe">Subscribe</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
