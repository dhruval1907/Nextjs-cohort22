import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-black flex justify-between items-center h-20 w-full bg-blue-300">
      <h1 className="font-semibold text-2xl">Sheriynas</h1>
      <div className="flex items-center gap-5">
        <Link className="font-semibold text-2xl" href="/about">
          About
        </Link>
        <Link className="font-semibold text-2xl" href="/contact">
          Contact
        </Link>
        <Link className="font-semibold text-2xl" href="/courses">
          courses
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
