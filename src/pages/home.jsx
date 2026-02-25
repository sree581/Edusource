import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Pictures/logo.jpeg";

/* ================= IMAGE CARD ================= */
function ImageCard({ title, description, image, link }) {
    return (
        <Link to={link || "#"}>
            <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative group overflow-hidden rounded-3xl shadow-2xl border border-white/10 cursor-pointer"
            >
                <img
                    src={`${image}?auto=format&fit=crop&w=900&q=80`}
                    alt={title}
                    className="h-[450px] w-full object-cover transition duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-10 left-8 right-8 text-white">
                    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                    <p className="text-sm opacity-90">{description}</p>
                </div>
            </motion.div>
        </Link>
    );
}

/* ================= GALLERY ================= */
function GallerySection() {
    const [active, setActive] = useState("graduation");

    const galleryData = {
        graduation: {
            title: "Graduation Ceremony",
            image:
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
        },
        festival: {
            title: "Onam Celebration",
            image:
                "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
        },
        seminar: {
            title: "Workshops & Seminars",
            image:
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
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

/* ================= MAIN HOME COMPONENT ================= */
export default function Home() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-gray-100 overflow-x-hidden">

            {/* Background Glow */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-400/15 rounded-full blur-[140px]" />
            </div>

            {/* HERO */}
            <section id="home" className="relative h-[calc(100vh-6rem)] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/students.mp4" type="video/mp4" />
                    </video>
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
                </motion.div>
            </section>
            {/* ================= ABOUT US ================= */}
            <section id="about" className="py-28 bg-[#0c1424]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                            About EduSource
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            EduSource HRD Center is committed to delivering industry-focused
                            professional diploma programs that bridge the gap between
                            academic knowledge and real-world skills.
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our mission is to empower students with practical training,
                            government-recognised certifications, and career-ready
                            expertise in healthcare, management, logistics, tourism,
                            and international language education.
                        </p>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="Students learning"
                            className="rounded-3xl shadow-2xl object-cover h-[450px] w-full"
                        />

                        {/* Soft Glow Effect */}
                        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
                    </motion.div>

                </div>
            </section>
            {/* ================= OUR TEAM ================= */}
            <section id="team" className="py-28 bg-[#0f1b2d]">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                            Meet Our Team
                        </h2>
                        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                            Experienced professionals dedicated to delivering quality education and career guidance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">

                        {/* Member 1 */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
                                alt="Director"
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-6"
                            />
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Dr. Anil Kumar
                            </h3>
                            <p className="text-cyan-400 mb-3">Academic Director</p>
                            <p className="text-gray-400 text-sm">
                                15+ years of experience in professional skill development and academic leadership.
                            </p>
                        </div>

                        {/* Member 2 */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                                alt="HR Head"
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-6"
                            />
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Ms. Riya Thomas
                            </h3>
                            <p className="text-cyan-400 mb-3">HR & Training Head</p>
                            <p className="text-gray-400 text-sm">
                                Specialised in human resource development and student placement guidance.
                            </p>
                        </div>

                        {/* Member 3 */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
                                alt="Program Coordinator"
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-6"
                            />
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Mr. Rahul Nair
                            </h3>
                            <p className="text-cyan-400 mb-3">Program Coordinator</p>
                            <p className="text-gray-400 text-sm">
                                Oversees logistics, tourism, and healthcare program implementation.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            {/* ================= PROGRAMS OFFERED ================= */}
            <section id="programs" className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-4xl font-semibold text-center mb-20 text-white">
                        Our Professional Programs
                    </h3>

                    <div className="grid md:grid-cols-3 gap-12">

                        <ImageCard
                            title="Diploma in Hospital Administration"
                            description="1-year professional program in hospital & healthcare management."
                            image="https://images.unsplash.com/photo-1588776814546-ec7e6a9d9e30"
                            link="/hospital-administration"
                        />

                        <ImageCard
                            title="German Language (A1–B2)"
                            description="Structured German training aligned with international standards."
                            image="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                            link="/german-language"
                        />

                        <ImageCard
                            title="Diploma in Logistics & Shipping Management"
                            description="Supply chain, shipping & EXIM management training."
                            image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                            link="/logistics-shipping"
                        />

                        <ImageCard
                            title="Advanced Diploma in Human Resource Management"
                            description="6-month intensive HR management training."
                            image="https://images.unsplash.com/photo-1552664730-d307ca884978"
                            link="/hr-management"
                        />

                        <ImageCard
                            title="Professional Diploma in Travel & Tourism"
                            description="Tourism & hospitality industry-focused program."
                            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                            link="/travel-tourism"
                        />

                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className="py-32">
                <GallerySection />
            </section>

            {/* CERTIFICATION */}
            <section id="certification" className="py-32">
                <div className="max-w-6xl mx-auto px-6 bg-white/5 backdrop-blur-2xl rounded-3xl p-14 flex flex-col md:flex-row items-center gap-12 border border-white/10 shadow-2xl">
                    <div className="w-52 h-52 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10 shadow-xl">
                        <img src={logo} alt="Certification Logo" className="max-h-36 object-contain" />
                    </div>

                    <div>
                        <h3 className="text-3xl font-semibold mb-4 text-white">
                            Government Recognised Certification
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Certified by Youth Employability Skill Training / MSME Technology Development Centre.
                        </p>
                    </div>
                </div>
            </section>
            {/* ================= GET IN TOUCH ================= */}
            <section id="contact" className="py-28 bg-gradient-to-b from-[#0f1b2d] to-[#0c1424] text-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                            Get in Touch
                        </h2>
                        <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                            Have questions about our programs? Reach out to us and our team will guide you.
                        </p>
                    </div>

                    {/* Contact Grid */}
                    <div className="grid md:grid-cols-3 gap-10">

                        {/* Address */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition">
                            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                                Address
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                EduSource HRD Center <br />
                                Space No 460, Minerva Complex <br />
                                Madannada, Kollam <br />
                                Kerala 691010
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition">
                            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                                Phone
                            </h3>
                            <p className="text-gray-300 text-lg">
                                +91 XXXXX XXXXX
                            </p>
                        </div>

                        {/* Email */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition">
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
            {/* ================= WHATSAPP FLOAT ================= */}
            <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-8 h-8"
                />
            </a>
        </div>
    );
}