import { Link } from "react-router-dom";

export interface BlogData {
  id: number;
  title: string;
  content: string;
  date: string;
}

const BlogCard = ({ id, title, date, content }: BlogData) => {
  const preview = content.slice(0, 160).replace(/(<([^>]+)>)/gi, "") + "...";

  return (
    <div className="p-2 border-8 border-primary rounded-md w-[15rem] sm:w-[20rem] xl:w-[25rem] h-[50vh] bg-lightest transition-all duration-500">
      <ul className="flex flex-col justify-between h-full w-full text-light">
        <li className="flex items-center justify-center text-center text-black h-[30%] border-b-2">
          <h2 className="text-[0.9em] sm:text-[1.2em]">{title}</h2>
        </li>
        <li className="text-[0.8em] sm:text-[1em] px-2 sm:px-4 py-2">
          {preview}
        </li>
        <li className=" flex flex-row items-end">
          <Link
            to={`/blog/${id}`}
            className="underline text-[1.2em] italic flex-1"
          >
            Read Full Blog!
          </Link>
          <span className="text-[0.7rem] sm:text-[0.9em] ">{date}</span>
        </li>
      </ul>
    </div>
  );
};

export default BlogCard;
