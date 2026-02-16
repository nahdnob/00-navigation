import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-white shadow-md px-6 py-4 fixed top-0 left-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>
                {/* Menu */}
                <ul className="flex gap-6 text-gray-700 font-medium">
                    <li>
                        <a href="/" className="hover:text-blue-600 transition">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-blue-600 transition">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-blue-600 transition">Services</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}