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
      <h2 className="text-3xl font-semibold text-[#495057] pb-2">
        {category}
      </h2>
      <div className="w-full flex flex-col md:flex-row gap-10 md:items-center items-start text-xl">
        {posts?.map((post, i) => (
          <div key={i} className="w-full h-[400px] bg-slate-200 rounded-[20px]">

          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;