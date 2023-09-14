"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div
        className={`fixed top-0 z-30 flex w-full justify-center transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Viking Tech Labs</p>
          </Link>
        </div>
      </div>
    </>
  );
}
