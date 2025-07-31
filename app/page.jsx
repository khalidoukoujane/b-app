import Image from "next/image";
import Post from "@/components/Post/Post";
import getCategorisedPosts from "@/lib/posts";

export default function Home() {
  const posts = getCategorisedPosts();
  return (
    <section className="w-full flex flex-col items-center justify-center pt-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-7xl -font-mona-sans font-semibold text-neutral-700">
          <span className="text-neutral-500"> Welcome,</span> <br /> to my
          Minimalist Blog.
        </h1>
        <div className="mt-10 w-auto">
          <Image
            src={"/main-img2.webp"}
            width={800}
            height={800}
            alt="main img"
            layout="responsive"
            className="rounded-2xl"
          />
        </div>
      </div>
      {/* <section className="w-full pt-10 -font-poppins">
				{posts &&
				  Object.entries(posts).map(([category, categoryPosts]) => (
					<Post key={category} category={category} posts={categoryPosts} />
				  ))}
			  </section> */}
    </section>
  );
}
