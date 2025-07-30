import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="w-full h-15 flex items-center justify-around -font-mona-sans text-white">
      <Link href={"/"}>
        <div className="w-10 h-10 bg-neutral-700 flex items-center justify-center rounded-[5px] text-2xl font-semibold">
          <p>B.</p>
        </div>
      </Link>
      <div className="">
        <div className="flex items-center justify-center rounded-[5px] text-2xl font-semibold text-neutral-700">
          <p>contact.</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
