import Link from "next/link";

export default function Nav(){

    return(
        <nav className="flex space-x-6 shadow-xl p-5 items-center text-center">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
        </nav>
    )
}