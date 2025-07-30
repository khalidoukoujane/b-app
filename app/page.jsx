import Image from "next/image";

export default function Home() {
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
