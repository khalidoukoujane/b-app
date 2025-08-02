import React from "react";
import Link from "next/link";

const Post = ({ category, posts }) => {
  const truncateTitle = (title) => {
    const words = title.split(" ");
    if (words.length <= 3) {
      return title;
    }
    return words.slice(0, 3).join(" ") + "...";
  };

  return (
    <div className="w-full mb-8">
      <h2 className="text-3xl font-semibold text-neutral-700 pb-2">
        {category}
      </h2>
      <div className="w-full flex flex-col md:flex-row gap-10 md:items-center items-start text-xl">
        {posts?.map((post) => (
          <Link href={`/${post.id}`} key={post.id}>
            <p className="-font-mona-sans text-neutral-600 hover:text-neutral-400 hover:underline">
              {truncateTitle(post.title)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Post;
