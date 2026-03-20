import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState("home");

    useEffect(() => {
        if (location.pathname !== "/") return;

        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [location]);

    // 🔥 HANDLE SCROLL OR NAVIGATION
    const handleNavClick = (id) => {
        if (location.pathname === "/") {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    const navItem = (id, label) => (
        <button
            onClick={() => handleNavClick(id)}
            className={`transition ${active === id
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "hover:text-cyan-400"
                }`}
        >
            {label}
        </button>
    );

    return (
        <nav className="bg-[#0f1b2d] text-white px-12 py-5 flex justify-between items-center shadow-xl sticky top-0 z-50">

            {/* LOGO */}
            <Link
                to="/"
                className="text-2xl font-semibold text-cyan-400 hover:text-cyan-300 transition"
            >
                EduSource
            </Link>

            {/* MENU */}
            <div className="flex gap-8 items-center text-sm font-medium">

                {/* SCROLL SECTIONS */}
                {navItem("home", "Home")}
                {navItem("about", "About")}
                {navItem("programs", "Programs")}
                {navItem("certification", "Certification")}
                {navItem("contact", "Contact")}

                {/* ROUTE PAGES */}
                <Link to="/admission" className="hover:text-cyan-400">
                    Admission
                </Link>

                <Link to="/placement" className="hover:text-cyan-400">
                    Placement
                </Link>

                <Link to="/blog" className="hover:text-cyan-400">
                    Blog
                </Link>

            </div>
        </nav>
    );
}