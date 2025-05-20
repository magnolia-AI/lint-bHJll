export interface Author {
  name: string;
  image: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: Author;
}

export const blogPosts: Post[] = [
  {
    id: 'nextjs-15-features',
    title: 'Exciting New Features in Next.js 15',
    excerpt: 'Explore the latest features and improvements in Next.js 15 that make web development even better.',
    content: 'Next.js 15 introduces several exciting features that enhance developer experience and application performance. The new App Router provides a more intuitive way to handle routing in your applications. Server Components allow you to render components on the server, reducing client-side JavaScript and improving performance. The improved image optimization ensures your images load faster while maintaining quality. Additionally, the new middleware capabilities give you more control over requests before they complete.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    date: '2025-05-15',
    author: {
      name: 'John Smith',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
  },
  {
    id: 'css-grid-layout',
    title: 'Mastering CSS Grid Layout',
    excerpt: 'Learn how to create complex layouts with CSS Grid.',
    content: 'CSS Grid Layout is a powerful tool for creating two-dimensional layouts. Unlike Flexbox, which is primarily designed for one-dimensional layouts, Grid allows you to control both rows and columns simultaneously. This makes it perfect for creating complex page layouts. In this post, we explore how to use CSS Grid effectively, from basic grid creation to advanced techniques like grid template areas and auto-placement algorithms.',
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    date: '2025-05-05',
    author: {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80'
    }
  },
  {
    id: 'react-hooks-explained',
    title: 'React Hooks Explained',
    excerpt: 'A deep dive into React Hooks and how to use them effectively.',
    content: 'React Hooks revolutionized how we write React components by allowing us to use state and other React features without writing classes. The useState hook lets you add state to functional components, while useEffect handles side effects like data fetching and subscriptions. The useContext hook provides a way to pass data through the component tree without having to pass props down manually at every level. This post explores these hooks and more, with practical examples to help you understand when and how to use them.',
    coverImage: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    date: '2025-04-28',
    author: {
      name: 'Mike Wilson',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
  }
];

export const getPostById = (id: string): Post | undefined => {
  return blogPosts.find(post => post.id === id);
};
