"use client";
import * as React from "react";
import { InfoCircle, List, Person, Phone, Search } from "react-bootstrap-icons";
import Button from "../button";
import Brand from "../brand";
import SearchBoxContext from "../contexts/search_bar_context";
import Link from "next/link";

export default function Header() {
    const [headerFixed] = React.useState(true);
    const [menuOpen, setMenuOpen] = React.useState(true);
    const { open, setOpen } = React.useContext(SearchBoxContext);
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
            className={`${headerFixed ? "sticky top-0 left-0" : ""
                } w-full h-20 max-[745px]:h-16 flex justify-center items-center px-4 z-50 transition-all duration-300 ease-in-out ${scrolled ? "bg-black" : "bg-white"}`}
        >
            <div className="relative w-full max-[745px]:w-full h-20 flex flex-row justify-between items-center px-6">
                <Link href={"/"}>
                    <div className="flex justify-center items-center w-fit h-full">
                        <h4 className={`text-2xl font-bold  ${!scrolled ? 'text-black' : 'text-white'}`}>BHUMI SEWA FOUNDATION</h4>
                    </div>
                </Link>
                <div className="flex flex-row flex-nowrap flex-grow justify-end items-center space-x-6">
                    <nav className="flex justify-center items-center space-x-6 h-full">
                        <ul
                            className={`${menuOpen ? "flex" : "hidden"
                                } flex-row justify-center items-center space-x-6 h-full rounded-lg transition-all duration-300`}
                        >
                            <li className="text-sm relative group hover:text-orange-600 transition-colors duration-300">
                                <Link href={"/"}>
                                    <h4 className={`text-lg font-medium  ${!scrolled ? 'text-black' : 'text-white '}`}>Home</h4>
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </Link>
                            </li>
                            {/* <li className="text-sm relative group hover:text-orange-600 transition-colors duration-300">
                                <Link href={"/causes"}>
                                    <h4 className={`text-lg font-medium  ${!scrolled ? 'text-black' : 'text-white'}`}>Causes</h4>
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </Link>
                            </li> */}
                            <li className="text-sm relative group hover:text-orange-600 transition-colors duration-300">
                                <Link href={"/events"}>
                                    <h4 className={`text-lg font-medium ${!scrolled ? 'text-black' : 'text-white'}`}>Blogs</h4>
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </Link>
                            </li>
                            {/* <li className="text-sm relative group hover:text-orange-600 transition-colors duration-300">
                                <Link href={"/volunteers"}>
                                    <h4 className={`text-lg font-medium ${!scrolled ? 'text-black' : 'text-white'}`}>Volunteers</h4>
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </Link>
                            </li>
                            <li className="text-sm relative group hover:text-orange-600 transition-colors duration-300">
                                <Link href={"/faq"}>
                                    <h4 className={`text-lg font-medium  ${!scrolled ? 'text-black' : 'text-white'}`}>FAQ</h4>
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </Link>
                            </li> */}
                            <li className="text-sm relative group hover:text-orange-600 transition-colors duration-300">
                                <Link href={"/about_us"}>
                                    {/* <InfoCircle className={`text-lg font-medium  ${!scrolled ? 'text-black' : 'text-white'}`} /> */}
                                    <h4 className={`text-lg font-medium  ${!scrolled ? 'text-black' : 'text-white'}`}>About Us</h4>

                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </Link>
                            </li>
                            <li className="text-sm relative group hover:text-orange-600 transition-colors duration-300">
                                <Link href={"/contact_us"}>
                                    {/* <Phone className={`text-lg  font-medium ${!scrolled ? 'text-black' : 'text-white'}`} /> */}
                                    <h4 className={`text-lg font-medium  ${!scrolled ? 'text-black' : 'text-white'}`}>Contact us</h4>

                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-row justify-center items-center space-x-3 h-8">
                            {/* <li className="text-xl cursor-pointer hover:text-orange-600 transition-colors duration-300">
                                <h4 onClick={() => setOpen(!open)}>
                                    <Search className={`text-lg  ${!scrolled ? 'text-black' : 'text-white'}`} />
                                </h4>
                            </li> */}
                            <li className="w-[0.6px] h-full bg-gray-300 m-2"></li>
                            {/* <li className="hidden min-[745px]:block text-2xl">
                                <Link href={"#account"}>
                                    <h4 className={`text-lg  ${!scrolled ? 'text-black' : 'text-white'}`}>
                                        <Person className={`text-lg  ${!scrolled ? 'text-black' : 'text-white'}`} />
                                    </h4>
                                </Link>
                            </li> */}
                            <li className="hidden max-[745px]:block text-2xl">
                                <h4 className={`text-lg  ${!scrolled ? 'text-black' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
                                    <List className={`text-lg  ${!scrolled ? 'text-black' : 'text-white'}`} />
                                </h4>
                            </li>
                        </ul>
                        <div className="max-[900px]:hidden flex justify-center items-center">
                            <Button
                                href="/donate_now"
                                text="Donate Now"
                                color="red-600"
                                className="hover:bg-red-500 transition-colors duration-300 rounded-lg py-2 px-4 shadow-lg"
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
