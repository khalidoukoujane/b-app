import Image from "next/image";
import Post from "@/components/Post/Post";
import getCategorisedPosts from "@/lib/posts";

export default function Home() {
  const posts = getCategorisedPosts();
  return (
    <section className="w-full flex flex-col items-center justify-center pt-20">
	<div className="container px-5">
      <div className="flex flex-col text-center">
        <h1 className="text-5xl md:text-7xl -font-mona-sans font-semibold text-[#212529]">
          <span className="text-[#343a40]"> Welcome,</span> <br /> to my
          Minimalist Blog.
        </h1>
        <div className="mt-10">
          <Image
            src={"/Futuristic Brain Art.png"}
            width={800}
            height={800}
            alt="main img"
            layout="responsive"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col text-start mt-10">
          <h1 className="text-5xl -font-mona-sans font-semibold text-[#343a40]">
            Latest articles.
          </h1>
          <hr className="w-1/2 text-neutral-500" />
          <section className="w-full pt-10 -font-poppins">
            {posts &&
              Object.entries(posts).map(([category, categoryPosts]) => (
                <Post
                  key={category}
                  category={category}
                  posts={categoryPosts}
                />
              ))}
          </section>
        </div>
      </div>
	  </div>
    </section>
  );
}
