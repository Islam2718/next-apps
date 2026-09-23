import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-semibold leading-10 tracking-tight text-black ">
            Next.js &mdash; Static Routing Apps
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Home Page
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">          
          <Link className="flex h-12 w-full items-center justify-center rounded-full bg-black px-5 text-white transition-colors hover:bg-black/[.85] dark:bg-white dark:text-black dark:hover:bg-white/[.85] md:w-[158px]" href="/">
            Home
          </Link>
          <Link className="flex h-12 w-full items-center justify-center rounded-full bg-black px-5 text-white transition-colors hover:bg-black/[.85] dark:bg-white dark:text-black dark:hover:bg-white/[.85] md:w-[158px]" href="/about">
            About
          </Link>
          <Link className="flex h-12 w-full items-center justify-center rounded-full bg-black px-5 text-white transition-colors hover:bg-black/[.85] dark:bg-white dark:text-black dark:hover:bg-white/[.85] md:w-[158px]" href="/contact">
            Contact
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}
