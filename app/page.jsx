import Image from "next/image";
import Post from "@/components/Post/Post";
import getCategorisedPosts from "@/lib/posts";

export default function Home() {
  const posts = getCategorisedPosts();
  return (
    <section className="w-full flex flex-col items-center pt-20">
      <div className="w-[50%]">
        <h1 className="text-7xl -font-mona-sans font-semibold text-neutral-700">
          Welcome, <br /> to my Minimalist Blog.
        </h1>
      </div>
      <div className="w-[50%] pt-30">
        <h2 className="text-4xl text-neutral-500 -font-mona-sans">
          Latest posts.
        </h2>
        <hr className="w-[50%] text-neutral-700" />
        <section className="w-full pt-10 -font-poppins">
          {posts &&
            Object.entries(posts).map(([category, categoryPosts]) => (
              <Post key={category} category={category} posts={categoryPosts} />
            ))}
        </section>
      </div>
    </section>
  );
}
