import Link from "next/link";
import blogs from "./blogData";

const Blog = () => {
  console.log(blogs);
  return (
    <>
      <h3>All blogs</h3>
      {blogs.map((blog) => (
        <li key={blog.blogTitle}>
          <Link href={`/homework/blog/${blog.slug}`}>{blog.blogTitle}</Link>
        </li>
      ))}
    </>
  );
}

export default Blog;