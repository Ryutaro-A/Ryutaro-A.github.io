import React from "react"
import Link from 'next/link'


const Footer = () => {
    const links = [
        { href: "/", label: "About" },
        { href: "/publications", label: "Publications"},
        { href: "/blog", label: "Blog" },
    ];
    return (
    <footer className="bg-white rounded-lg shadow m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center"> <a href="https://flowbite.com/" className="hover:underline">Ryutaro Asahara</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        {links.map(({ href, label }) => (
            <li>
                <Link href={ href } className="hover:underline me-4 md:me-6">{ label }</Link>
            </li>
        ))}
        </ul>
        </div>
    </footer>
    )
}

export default Footer
