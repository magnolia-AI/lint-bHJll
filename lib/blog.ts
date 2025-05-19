}

.bounce {
  animation: bounce 1s ease-in-out infinite;
}
,
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: '2025-05-05',
    author: {
      name: 'Emily Johnson',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    tags: ['CSS', 'Animation', 'Web Design'],
  },
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function formatDate(date: string): string {
  return format(new Date(date), 'MMMM dd, yyyy');
}
