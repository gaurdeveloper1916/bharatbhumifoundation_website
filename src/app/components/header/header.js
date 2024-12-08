"use client";
import * as React from "react";
import { List } from "react-bootstrap-icons";
import Link from "next/link";
import Button from "../button";

export default function Header() {
    const [headerFixed] = React.useState(true);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    // Detect scroll event and update state
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${headerFixed ? "sticky top-0 left-0" : ""} w-full h-20 max-[745px]:h-16 flex justify-center items-center px-4 z-50 transition-all duration-300 ease-in-out ${scrolled ? "bg-black" : "bg-white"}`}
        >
            <div className="relative w-full h-20 max-[745px]:h-16 flex justify-between items-center lg:px-6 ">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center">
                        <h4 className={`lg:text-2xl text-lg font-bold ${scrolled ? "text-white" : "text-black"}`}>
                            BHUMI SEWA FOUNDATION
                        </h4>
                    </div>
                </Link>

                {/* Desktop Menu + Donate Button */}
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex items-center space-x-6">
                        <Link href="/">
                            <h4 className={`text-lg font-medium ${scrolled ? "text-white" : "text-black"}  hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600`}>
                                Home
                            </h4>
                        </Link>
                        <Link href="/events">
                        <h4 className={`text-lg font-medium ${scrolled ? "text-white" : "text-black"}  hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600`}>
                        Blogs
                            </h4>
                            
                        </Link>
                        <Link href="/about_us">
                        <h4 className={`text-lg font-medium ${scrolled ? "text-white" : "text-black"}  hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600`}>
                        About Us
                            </h4>
                           
                        </Link>
                        <Link href="/contact_us">
                        <h4 className={`text-lg font-medium ${scrolled ? "text-white" : "text-black"} hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600`}>
                        Contact Us
                            </h4>
                          
                        </Link>
                    </nav>
                    <Button
                        // href="/donate_now"
                        text="Donate Now"
                        color="red-600"
                        className="hover:bg-red-500 transition-colors duration-300 rounded-lg py-2 px-4 shadow-lg"
                    />
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        aria-label="Toggle Menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl focus:outline-none"
                    >
                        <List className={`${scrolled ? "text-white" : "text-black"}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <nav
                className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-transform duration-300 ${menuOpen ? "transform scale-y-100" : "transform scale-y-0"} origin-top`}
            >
                <ul className="flex flex-col space-y-4 p-4">
                    <li>
                        <Link href="/">
                            <h4 className="text-lg font-medium hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600">Home</h4>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                            <h4 className="text-lg font-medium hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600">Blogs</h4>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about_us">
                            <h4 className="text-lg font-medium hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600">About Us</h4>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact_us">
                            <h4 className="text-lg font-medium hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600">Contact Us</h4>
                        </Link>
                    </li>
                    <li>
                        <Button
                            // href="/donate_now"
                            text="Donate Now"
                            color="red-600"
                            className="w-full hover:bg-red-500 transition-colors duration-300 rounded-lg py-2 px-4 shadow-lg"
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
