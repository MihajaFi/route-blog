import { Blog } from "@/utils/constants";
type itemProps = {
  blog: Blog;
};
export function Item({ blog }: itemProps) {
  return (
    <div className="w-full  mx-auto p-5 max-w-[800px] bg-blue-500 my-2">
      <p className="text-center">
        <span className="font-bold">ID</span>: {blog.id}
      </p>
      <p className="text-center">{blog.title}</p>
    </div>
  );
}
