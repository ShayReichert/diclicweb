import posts from "../_data/blog";

export const fetchPostById = (id: number): Post => {
  const post = posts.find((post) => post.id === id);

  if (!post) {
    throw new Error(`Aucun article trouvé avec l'id ${id}`);
  }

  return post;
};

export const filterCategories = (categoriesData: Categories, posts: Post[]) => {
  return categoriesData.categories.filter((category) => {
    return posts.some((post) => post.category.includes(category.id));
  });
};

export const getRandomRelatedPosts = (relatedPosts: number[], totalRelatedPosts: number, currentPostId: number): number[] => {
  const randomPosts = new Set<number>();

  // Add related posts IDs
  for (let i = 0; i < Math.min(totalRelatedPosts, relatedPosts.length); i++) {
    const randomIndex = Math.floor(Math.random() * relatedPosts.length);
    randomPosts.add(relatedPosts[randomIndex]);
  }

  // Add random post IDs
  while (randomPosts.size < totalRelatedPosts) {
    const randomIndex = Math.floor(Math.random() * posts.length);
    const randomPostId = posts[randomIndex].id;

    if (randomPostId !== currentPostId) {
      randomPosts.add(randomPostId);
    }
  }

  return Array.from(randomPosts);
};
