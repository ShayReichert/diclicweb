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
