export interface BlogData {
  id: number;
  title: string;
  content: string;
  date: string;
}

const BlogCard = ({ title, date, content }: BlogData) => {
  return (
    <div className="p-2 border-8 border-primary rounded-md w-[15rem] sm:w-[20rem] xl:w-[25rem] h-[50vh] bg-lightest transition-all duration-500">
      <ul className="flex flex-col justify-between h-full w-full">
        <li className="text-light text-center">{title}</li>
        <li className="text-light">{content}</li>
        <li className="text-light text-right">{date}</li>
      </ul>
    </div>
  );
};

export default BlogCard;
