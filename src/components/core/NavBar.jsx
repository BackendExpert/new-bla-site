import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";
import DefaultButton from "../buttons/DefaultButton";


const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > 20);

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navmenu = [
        {
            id: 1,
            name: "Eco System",
            link: "/eco-system",
            submenu: [
                {
                    name: "JKCSS - CSS Framework",
                    link: "#",
                    shortdesc: "South Asian 1st CSS Framework",
                },
                {
                    name: "CoconutDB",
                    link: "#",
                    shortdesc: "South Asian 1st NoSQL Document-oriented Database Engine",
                },
                {
                    name: "CoconutServeJS",
                    link: "#",
                    shortdesc: "Research-level backend security runtime engine",
                },
            ],
        },
        {
            id: 2,
            name: "Dev Tools",
            link: "/dev-tools",
            submenu: [
                {
                    name: "NPMs",
                    link: "#",
                    shortdesc: "Custom Node Package Managers",
                },
                {
                    name: "VScode Extensions",
                    link: "#",
                    shortdesc: "Custom Visual Studio Code Extensions",
                },
            ],
        },
        {
            id: 3,
            name: "Products",
            link: "/dev-tools",
            submenu: [
                {
                    name: "Custom APIs",
                    link: "#",
                    shortdesc: "Custom Application Programming Interface",
                },
            ],
        },
        {
            id: 4,
            name: "About",
            submenu: [
                {
                    name: "Company",
                    link: "#",
                    shortdesc: "Who we are & what we build",
                },
                {
                    name: "Publications",
                    link: "#",
                    shortdesc: "Reseach-Driven Software Publications",
                },
                {
                    name: "Founder's Note",
                    link: "#",
                    shortdesc: "Architecting a sovereign developer workspace",
                },
            ],
        },
    ];

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${hidden ? "-translate-y-full" : "translate-y-0"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
                <div
                    className={`flex items-center justify-between rounded-3xl border px-5 py-4 transition-all duration-300 lg:px-8 ${scrolled
                        ? "border-white/10 bg-zinc-900/80 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
                        : "border-white/5 bg-zinc-900/40 backdrop-blur-xl"
                        }`}
                >
                    <a href="/" className="flex items-center gap-3 group">
                        <h1 className="text-2xl font-black uppercase tracking-[0.35em] text-white transition-all duration-300 group-hover:scale-105">
                            <span className="md:block hidden"> blackalphalabs</span>
                            <span className="md:hidden block"> bal</span>
                        </h1>
                    </a>

                    <nav className="hidden lg:flex items-center gap-10">
                        {navmenu.map((item) => (
                            <div key={item.id} className="relative group">
                                <a
                                    href={item.link || "#"}
                                    className="flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition"
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <FaChevronDown className="text-xs transition group-hover:rotate-180" />
                                    )}
                                </a>

                                {item.submenu && (
                                    <div className="absolute left-1/2 top-full mt-8 w-[600px] -translate-x-1/2 invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <div className="absolute -top-8 left-0 w-full h-8" />
                                        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                                            <div className="grid grid-cols-2 gap-2">
                                                {item.submenu.map((sub, i) => (
                                                    <a
                                                        key={i}
                                                        href={sub.link}
                                                        className="block p-4 border border-gray-800 hover:border-blue-400 hover:bg-blue-500/5 transition"
                                                    >
                                                        <h4 className="text-sm font-semibold text-white">
                                                            {sub.name}
                                                        </h4>
                                                        <p className="mt-1 text-xs text-zinc-400">
                                                            {sub.shortdesc}
                                                        </p>
                                                    </a>
                                                ))}
                                            </div>
                                            <div className="text-center p-2 bg-gay-800 mx-16 mt-4">
                                                {
                                                    item.name === "About" ?
                                                        <div className=""></div>
                                                        :
                                                        <a href={item.link}>
                                                            <div className="text-center hover:text-purple-500 uppercase cursor-pointer">see all {item.name}</div>
                                                        </a>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="hidden lg:flex">
                        <DefaultButton
                            onClick={() => {
                                const el = document.querySelector("#contact");
                                el?.scrollIntoView({ behavior: "smooth" });
                            }}
                            text="Contact Us"
                            className="px-6 py-3 text-sm"
                        />
                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/80 text-white lg:hidden"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? "mt-3 max-h-[900px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="rounded-3xl border border-white/10 bg-zinc-900/95 p-6 backdrop-blur-2xl">
                        <nav className="flex flex-col gap-2">
                            {navmenu.map((item) => (
                                <div key={item.id}>
                                    <button
                                        onClick={() => {
                                            if (!item.submenu) {
                                                setOpen(false);
                                                return;
                                            }
                                            setMobileOpen(
                                                mobileOpen === item.id ? null : item.id
                                            );
                                        }}
                                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-zinc-300 hover:bg-white/5 hover:text-white"
                                    >
                                        {item.name}
                                        {item.submenu && (
                                            <FaChevronDown
                                                className={`transition ${mobileOpen === item.id
                                                    ? "rotate-180"
                                                    : ""
                                                    }`}
                                            />
                                        )}
                                    </button>

                                    {item.submenu && mobileOpen === item.id && (
                                        <div className="ml-4 mt-2 border-l border-white/10 pl-4">
                                            {item.submenu.map((sub, i) => (
                                                <a
                                                    key={i}
                                                    href={sub.link}
                                                    className="block py-3"
                                                >
                                                    <div className="text-sm text-white">
                                                        {sub.name}
                                                    </div>
                                                    <div className="text-xs text-zinc-500">
                                                        {sub.shortdesc}
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="mt-6">
                            <DefaultButton text="Contact Us" className="w-full justify-center" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;