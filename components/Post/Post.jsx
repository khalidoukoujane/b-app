import React from "react";
import Link from "next/link";
import Image from "next/image";

const Post = ({ category, posts }) => {
  const truncateTitle = (title) => {
    const words = title.split(" ");
    if (words.length <= 3) {
      return title;
    }
    return words.slice(0, 5).join(" ") + "...";
  };

  return (
    <div className="w-full mb-8">
      <h2 className="text-3xl font-semibold text-[#495057] pb-2">{category}</h2>
      <div className="w-full flex flex-col md:flex-row gap-10 md:items-center items-start text-xl">
        {posts?.map((post, i) => (
          <div key={i} className="w-full h-[400px] bg-[#f8f9fa] rounded-[20px] overflow-hidden border-[2px] border-[#212529] p-[10px]">
            <img src={post.img} alt="post image" className="w-full h-[80%] object-cover mb-[10px] rounded-[10px]" />
            <Link href={`/${post.id}`} key={post.id}>
            <p className="-font-mona-sans hover:text-neutral-400 text-[#212529] text-2xl font-semibold">
              {truncateTitle(post.title)}
            </p>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
