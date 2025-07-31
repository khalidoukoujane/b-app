import React from "react";
import Link from "next/link";

const Post = ({ category, posts }) => {
  return (
    <div className="w-full mb-8">
      <h2 className="text-2xl  font-semibold text-neutral-700 pb-2">
        {" "}
        {category}
      </h2>
      <div className="w-full flex gap-2 justify-center">
        {posts?.map((post) => (
          <Link href={`/${post.id}`} key={post.id} className="w-[20%]">
            <p className="-font-mona-sans font-semibold text-neutral-600 hover:text-neutral-400">
              {post.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Post;
