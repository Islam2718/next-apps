import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          {/* Products  */}
          <Link href="/products" className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">            
            Products
          </Link>
          {/* categories  */}
          <Link href="/categories" className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">            
            Categories
          </Link>
          {/* orders  */}
          <Link href="/orders" className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">            
            Orders
          </Link>
          {/* customers  */}
          <Link href="/customers" className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200">            
            Customers
          </Link>
        </div>
      </main>
    </div>
  );
}
