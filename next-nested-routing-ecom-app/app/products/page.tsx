import Link from "next/link";

export default function ProductsPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">Products Page</h1>
                <Link href="/products/add" className="mt-4 text-blue-500 hover:underline">
                    Add Product
                </Link>
                <Link href="/" className="mt-4 text-blue-500 hover:underline">
                    Go back to Home
                </Link>
            </main>
        </div>
    );
}