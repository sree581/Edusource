import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import logo from "../Pictures/logo.jpeg";

export default function Home() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-gray-100 overflow-x-hidden">

            {/* GLOBAL SOFT TECH GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-400/15 rounded-full blur-[140px]" />
            </div>

            {/* ================= HERO ================= */}
            <section className="relative h-[calc(100vh-6rem)] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <motion.div
                    className="relative z-10 max-w-6xl px-6 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h1 className="text-5xl md:text-6xl font-semibold mb-6">
                        Industry-Focused Professional Diploma Programs
                    </h1>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-10">
                        Government-recognised certifications in Hospital Administration,
                        HR Management, Travel & Tourism, Logistics, and German Language.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 rounded-xl shadow-xl hover:scale-105 transition">
                            Explore Courses
                        </button>

                        <button className="border border-white/30 px-10 py-4 rounded-xl backdrop-blur-md hover:bg-white hover:text-black transition">
                            Login
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* ================= COURSES ================= */}
            <section className="py-32">
                <motion.div
                    className="max-w-7xl mx-auto px-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-4xl font-semibold text-center mb-20 text-white">
                        Our Professional Programs
                    </h3>

                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        <ImageCard
                            title="Diploma in Hospital Administration"
                            description="1-year professional program in hospital & healthcare management."
                            image="https://images.unsplash.com/photo-1584982751601-97dcc096659c"
                        />
                        <ImageCard
                            title="German Language (A1–B2)"
                            description="Structured German training aligned with international standards."
                            image="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                        />
                        <ImageCard
                            title="Advanced Diploma in Human Resource Management"
                            description="6-month intensive HR management training."
                            image="https://images.unsplash.com/photo-1552664730-d307ca884978"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <ImageCard
                            title="Diploma in Logistics & Shipping Management"
                            description="Supply chain, shipping & EXIM management training."
                            image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                        />
                        <ImageCard
                            title="Professional Diploma in Travel & Tourism"
                            description="Tourism & hospitality industry-focused program."
                            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                        />
                    </div>
                </motion.div>
            </section>

            {/* ================= GALLERY ================= */}
            <section className="py-32">
                <GallerySection />
            </section>

            {/* ================= CERTIFICATION ================= */}
            <section className="py-32">
                <motion.div className="max-w-6xl mx-auto px-6 bg-white/5 backdrop-blur-2xl rounded-3xl p-14 flex flex-col md:flex-row items-center gap-12 border border-white/10 shadow-2xl">
                    <div className="w-52 h-52 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10 shadow-xl">
                        <img
                            src={logo}
                            alt="Certification Logo"
                            className="max-h-36 object-contain"
                        />
                    </div>

                    <div>
                        <h3 className="text-3xl font-semibold mb-4 text-white">
                            Government Recognised Certification
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Certified by Youth Employability Skill Training / MSME Technology Development Centre.
                        </p>
                    </div>
                </motion.div>
            </section>
            {/* ================= CONTACT SECTION ================= */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#0f1b2d] to-[#0c1424] text-white">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                            Get in Touch
                        </h2>
                        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {/* Address */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                                Address
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Edusource HRD Center<br />
                                Space No 460, Minerva Complex,<br />
                                Opp. to Unoomony Motor,<br />
                                Madannada, Kollam, Kerala 691010
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                                Phone
                            </h3>
                            <p className="text-gray-300 text-lg">
                                +91 XXXXX XXXXX
                            </p>
                        </div>

                        {/* Email */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                                Email
                            </h3>
                            <p className="text-gray-300 text-lg">
                                info@edusourcehrd.in
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
}

/* ================= IMAGE CARD ================= */
function ImageCard({ title, description, image }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group overflow-hidden rounded-3xl shadow-2xl border border-white/10"
        >
            <img
                src={`${image}?auto=format&fit=crop&w=900&q=80`}
                alt={title}
                className="h-[450px] w-full object-cover transition duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-10 left-8 right-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-sm opacity-90 mb-6">{description}</p>
            </div>
        </motion.div>
    );
}

/* ================= GALLERY ================= */
function GallerySection() {
    const [active, setActive] = useState("graduation");

    const galleryData = {
        graduation: {
            title: "Graduation Ceremony",
            image: "https://via.placeholder.com/1200x600?text=Graduation+Ceremony",
        },
        festival: {
            title: "Onam Celebration",
            image: "https://via.placeholder.com/1200x600?text=Onam+Celebration",
        },
        seminar: {
            title: "Workshops & Seminars",
            image: "https://via.placeholder.com/1200x600?text=Seminars",
        },
    };

    return (
        <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-4xl font-semibold text-center mb-16 text-white">
                Inside EduSource: Learning in Action
            </h3>

            <div className="flex justify-center gap-6 mb-12 flex-wrap">
                {Object.keys(galleryData).map((key) => (
                    <button
                        key={key}
                        onClick={() => setActive(key)}
                        className={`px-6 py-3 rounded-full transition-all duration-300 border ${active === key
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                            }`}
                    >
                        {galleryData[key].title}
                    </button>
                ))}
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={galleryData[active].image}
                        src={galleryData[active].image}
                        alt={galleryData[active].title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-[550px] object-cover"
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}
