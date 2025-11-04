import blogs from "../blogData";
import { notFound } from "next/navigation";

const BlogPosts = async ({ params }) => {
  console.log(blogs);
  const { slug } = await params;
  console.log("Params:", params);


  const blogPost = blogs.find((b) => b.slug === slug);

  if (!blogPost) {
    notFound();
  }

  return (
    <article>
      <h3>{blogPost.blogTitle}</h3>
      <p>{blogPost.blogDescription}</p>
    </article>
  );
};

export default BlogPosts;
