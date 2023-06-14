import BlogCard from "./BlogCard";
import { blogData } from "../data/blogData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export interface BlogData {
  id: number;
  title: string;
  content: string;
  date: string;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1065 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1065, min: 740 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 740, min: 0 },
    items: 1,
  },
};

const BlogPicker = () => {
  return (
    <section
      id="blog"
      className="min-h-screen flex flex-col md:flex-row content-center items-center justify-center px-6 pt-[10vh]"
    >
      <div className="flex flex-row items-center justify-center w-[90vw] h-fit">
        <Carousel responsive={responsive} containerClass={`w-full z-0`}>
          {blogData
            .sort((a, b) => b.id - a.id)
            .map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col items-center justify-center"
              >
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  content={blog.content}
                  date={blog.date}
                />
              </div>
            ))}
        </Carousel>
      </div>
    </section>
  );
};

export default BlogPicker;
