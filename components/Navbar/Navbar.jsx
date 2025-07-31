import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="w-full h-15 -font-mona-sans text-white ">
      <div className="container mx-auto p-5">
		<div className="flex items-center justify-between">

        <Link href={"/"}>
          <div className="w-10 h-10 bg-neutral-700 flex items-center justify-center rounded-[5px] text-2xl font-semibold">
            <p>B.</p>
          </div>
        </Link>
        <div className="">
          <div className="flex items-center justify-center rounded-[5px] text-2xl font-semibold text-neutral-500">
            <p>contact.</p>
          </div>
        </div>
		</div>
      </div>
    </header>
  );
};

export default Navbar;
