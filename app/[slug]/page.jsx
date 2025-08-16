import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getPostContent } from "@/lib/posts";
const page = async ({ params }) => {
  const resolvedParams = await params;
  const PostContent = await getPostContent(resolvedParams.slug);
  return (
    <div className="w-full flex flex-col items-center justify-center my-20">
      <div className="flex flex-col w-10/12 md:w-1/2 -font-mona-sans text-xl">
        <div className="w-full flex justify-between h-20 items-center">
          <Link
            href={"/"}
            className="flex gap-1 text-3xl font-semibold text-neutral-600 -font-poppins"
          >
            <ArrowLeftIcon width={30} />
            <h1>home.</h1>
          </Link>
          <h2 className="text-neutral-500">{PostContent.date.toString()}</h2>
        </div>
        <article
          dangerouslySetInnerHTML={{ __html: PostContent.htmlContent }}
        ></article>
      </div>
    </div>
  );
};

export default page;
