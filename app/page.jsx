import Image from "next/image";
import sortPosts from "@/lib/posts";


export default function Home() {
	const sorted = sortPosts();
	console.log(sorted);
  return (
    <section className="w-full flex flex-col items-center pt-20">
      <div className="w-[50%]">
        <h1 className="text-7xl -font-mona-sans font-semibold">
          Welcome, to my <br /> Minimalist Blog.
        </h1>
      </div>
    </section>
  );
}
