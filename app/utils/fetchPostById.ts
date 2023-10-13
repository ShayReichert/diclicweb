import posts from "../_data/blog";

const fetchPostById = (id: number) => {
  const post = posts.find((post) => post.id === id);

  if (!post) {
    throw new Error(`Aucun article trouvé avec l'id ${id}`);
  }

  return post;
};

export default fetchPostById;
