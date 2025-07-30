import React from "react";
import Link from "next/link";

const Post = ({ category, posts }) => {
  return (
    <div className="w-full mb-8">
      <h2 className="text-2xl font-semibold mb-4">{category}</h2>
      <div className="w-full flex flex-col gap-2">
        {posts?.map((post) => (
          <Link
            href={`/${post.id}`}
            key={post.id}
            className="hover:text-blue-500 transition-colors"
          >
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Post;
