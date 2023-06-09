import { blogData } from "../data/blogData";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { useRef, useEffect } from "react";

const BlogPost = () => {
  const { blog_id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);

  const blog = blogData.find((blog) => blog.id === Number(blog_id));

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div ref={containerRef} className=" px-[10vw] pt-[20vh] pb-[10vh]">
        <h1 className="text-3xl text-center pb-10 text-primary">
          {blog?.title}
        </h1>
        <div
          className="blog_post"
          dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
        ></div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
