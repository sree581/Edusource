import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-[#0f1b2d] text-white px-12 py-5 flex justify-between items-center shadow-xl sticky top-0 z-50">
            <div className="flex items-center gap-12"></div>
            {/* LOGO */}
            <Link
                to="/"
                className="text-2xl font-semibold text-cyan-400 hover:text-cyan-300 transition relative -left-4"
            >
                EduSource
            </Link>
            {/* MENU */}
            <div className="flex gap-8 items-center text-sm font-medium">

                <Link to="/" className="hover:text-cyan-400 transition  ">
                    Home
                </Link>

                <Link
                    to="/hospital-administration"
                    className="hover:text-cyan-400 transition"
                >
                    Diploma in Hospital Administration
                </Link>

                <Link
                    to="/hr-management"
                    className="hover:text-cyan-400 transition"
                >
                    Advanced Diploma in HR Management
                </Link>

                <Link
                    to="/travel-tourism"
                    className="hover:text-cyan-400 transition"
                >
                    Professional Diploma in Travel & Tourism
                </Link>

                <Link
                    to="/logistics-shipping"
                    className="hover:text-cyan-400 transition"
                >
                    Diploma in Logistics & Shipping Management
                </Link>

                <Link
                    to="/german-language"
                    className="hover:text-cyan-400 transition"
                >
                    German Language Training
                </Link>

                {/* ================= RESOURCES DROPDOWN ================= */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setOpen(!open)}
                        className="hover:text-cyan-400 transition"
                    >
                        Resources
                    </button>

                    {open && (
                        <div className="absolute top-12 right-0 bg-white text-black rounded-xl shadow-2xl w-60 p-4 space-y-3 z-50">

                            <a
                                href="#"
                                onClick={() => setOpen(false)}
                                className="block hover:text-cyan-600 transition"
                            >
                                LMS Student Access
                            </a>

                            <a
                                href="#"
                                onClick={() => setOpen(false)}
                                className="block hover:text-cyan-600 transition"
                            >
                                Application Form
                            </a>

                            <a
                                href="#"
                                onClick={() => setOpen(false)}
                                className="block hover:text-cyan-600 transition"
                            >
                                Application Form - German
                            </a>

                            <a
                                href="#"
                                onClick={() => setOpen(false)}
                                className="block hover:text-cyan-600 transition"
                            >
                                Results
                            </a>

                            <a
                                href="#"
                                onClick={() => setOpen(false)}
                                className="block hover:text-cyan-600 transition"
                            >
                                Blog
                            </a>

                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
}