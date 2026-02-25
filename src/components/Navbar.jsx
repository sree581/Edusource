import { useState, useEffect } from "react";

export default function Navbar() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navItem = (id, label) => (
        <a
            href={`#${id}`}
            className={`transition ${active === id
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "hover:text-cyan-400"
                }`}
        >
            {label}
        </a>
    );

    return (
        <nav className="bg-[#0f1b2d] text-white px-12 py-5 flex justify-between items-center shadow-xl sticky top-0 z-50">
            {/* LOGO */}
            <a
                href="#home"
                className="text-2xl font-semibold text-cyan-400 hover:text-cyan-300 transition"
            >
                EduSource
            </a>

            {/* MENU */}
            <div className="flex gap-8 items-center text-sm font-medium">
                {navItem("home", "Home")}
                {navItem("about", "About")}
                {navItem("programs", "Programs")}
                {navItem("gallery", "Gallery")}
                {navItem("certification", "Certification")}
                {navItem("contact", "Contact")}
            </div>
        </nav>
    );
}