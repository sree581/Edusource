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
                        Edusource Academy – Government-Approved Skill Training Institute in Kollam
                    </h1>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-10">
                        Build your career with Kollam’s trusted institute offering government-approved programs in
                        Hospital Administration, HR Management, Logistics & Supply Chain, Medical Coding,
                        Medical Transcription, and German language training.
                        Your trusted partner for skill-based learning and career growth.
                    </p>
                </motion.div>
            </section>
            <section className="py-28 bg-[#0c1424]">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-semibold text-white mb-10">
                        Placement Support
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
                        Edusource Academy provides strong placement assistance including
                        career counselling, resume preparation, interview training,
                        and job guidance through partnered industries to ensure
                        students become job-ready.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <p className="text-gray-300">Career Counselling</p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <p className="text-gray-300">Resume Building Support</p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <p className="text-gray-300">Interview Preparation</p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <p className="text-gray-300">Industry Training Sessions</p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <p className="text-gray-300">Job Updates & Guidance</p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <p className="text-gray-300">Skill Assessments</p>
                        </div>

                    </div>
                </div>
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
                            Edusource Academy is a trusted skill development centre located in Madannada, Kollam.
                            We focus on delivering practical, employment-driven training through modern teaching methods
                            and experienced trainers.
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            We operate under:
                        </p>

                        <ul className="text-gray-400 text-lg leading-relaxed space-y-2 list-disc pl-5">
                            <li>Skill Spire Learning Pvt Ltd (Under Akanam)</li>
                            <li>Youth Employability Skill Training Co-operative Educational Society</li>
                            <li>Kerala State Rutronix</li>
                            <li>NSDC approved</li>
                            <li>Edusource HRD Center (Venture of Skill Spark Pvt Ltd)</li>
                        </ul>

                        <p className="text-gray-400 text-lg leading-relaxed mt-6">
                            Our mission is to make high-quality skill training accessible, affordable,
                            and career-focused.
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
            <section className="py-24 bg-[#0f1b2d]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                    <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
                        <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-400">
                            To provide quality education and government-certified skill training
                            that prepares students for real industry challenges and global opportunities.
                        </p>
                    </div>

                    <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
                        <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-400">
                            To become Kerala’s most trusted skill development centre,
                            helping young learners build successful and sustainable careers.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= PROGRAMS OFFERED ================= */}
            <section id="programs" className="py-32">
                <div className="max-w-7xl mx-auto px-6">

                    <h3 className="text-4xl font-semibold text-center mb-6 text-white">
                        Our Popular Programs
                    </h3>

                    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
                        Explore our career-focused diploma programs designed to build
                        industry-ready skills and open new career opportunities.
                    </p>

                    {/* PROGRAM CARDS */}
                    <div className="grid md:grid-cols-3 gap-12">

                        <ImageCard
                            title="Diploma in Hospital Administration – 1 Year"
                            description="A career-building program for those who want to step into healthcare administration."
                            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                            link="/hospital-administration"
                        />

                        <ImageCard
                            title="Advanced Diploma in HR Management – 6 Months"
                            description="Designed for graduates aiming to start or advance a career in Human Resources."
                            image="https://images.unsplash.com/photo-1552664730-d307ca884978"
                            link="/hr-management"
                        />

                        <ImageCard
                            title="Medical Coding – 3 Months"
                            description="A professional certification program for those aiming to enter the growing medical coding industry."
                            image="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
                            link="/medical-coding"
                        />

                        <ImageCard
                            title="Diploma in Logistics & Shipping Management – 6 Months"
                            description="One of the most job-oriented programs, preparing students for logistics, warehouse, and shipping industries."
                            image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                            link="/logistics-shipping"
                        />

                        <ImageCard
                            title="Medical Transcription – 4 Months"
                            description="Comprehensive training to build skills required for transcription careers in the medical field."
                            image="https://images.unsplash.com/photo-1585435557343-3b092031a831"
                            link="/medical-transcription"
                        />

                        <ImageCard
                            title="German Language Training (A1–B2) – 180 Days"
                            description="Learn German from professional trainers and prepare for international opportunities."
                            image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                            link="/german-language"
                        />

                    </div>


                    {/* WHY CHOOSE US */}
                    <div className="mt-28">

                        <h3 className="text-3xl font-semibold text-white text-center mb-12">
                            Why Choose Edusource Academy?
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-gray-300">

                            <p>✔ Government-approved certificates</p>
                            <p>✔ Job-oriented practical learning</p>
                            <p>✔ Experienced trainers with 2+ years’ expertise</p>
                            <p>✔ Best German language training in Kollam</p>
                            <p>✔ Placement assistance for all programs</p>
                            <p>✔ Affordable fees</p>
                            <p>✔ Flexible offline and online classes</p>
                            <p>✔ Updated course modules</p>

                        </div>

                    </div>


                    {/* PLACEMENT SUPPORT */}
                    <div className="mt-24 text-center max-w-3xl mx-auto">

                        <h3 className="text-3xl font-semibold text-white mb-6">
                            Placement Support
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            We provide career guidance, resume preparation, interview training,
                            and support through our partnered industries — ensuring every student
                            is job-ready.
                        </p>

                    </div>


                    {/* ENROLL CTA */}
                    <div className="mt-16 text-center">

                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Enroll Today
                        </h3>

                        <p className="text-gray-400 mb-8">
                            Start your journey towards a successful career.
                            Build your future with Edusource Academy.
                        </p>

                        <a
                            href="#contact"
                            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full transition"
                        >
                            Contact Us
                        </a>

                    </div>

                </div>
            </section>


            {/* CERTIFICATION */}
            <section id="certification" className="py-32">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-semibold text-white mb-6">
                            Government Recognised Certifications
                        </h3>
                        <p className="text-gray-400 text-lg">
                            Our programs are backed by recognised institutions ensuring quality and credibility.
                        </p>
                    </div>

                    {/* CERTIFICATE GRID */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {/* Certificate 1 */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition shadow-xl">
                            <img
                                src={logo}
                                alt="MSME Certification"
                                className="h-24 mx-auto mb-6 object-contain"
                            />
                            <h4 className="text-lg font-semibold text-white mb-2">
                                MSME Technology Development Centre
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Government of India certified skill development program.
                            </p>
                        </div>

                        {/* Certificate 2 */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition shadow-xl">
                            <img
                                src="https://itkeralaeducation.com/site/images/rt.png"
                                alt="Rutronics Certification"
                                className="h-24 mx-auto mb-6 object-contain"
                            />
                            <h4 className="text-lg font-semibold text-white mb-2">
                                Rutronics Certification
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Industry-recognised certification supporting technical skill development.
                            </p>
                        </div>

                        {/* Certificate 3 */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition shadow-xl">
                            <img src="/images/kcsm.jpeg"
                                alt="Kerala Certification"
                                className="h-24 mx-auto mb-6 object-contain"
                            />
                            <h4 className="text-lg font-semibold text-white mb-2">
                                Kerala Government Certification
                            </h4>
                            <p className="text-gray-400 text-sm">
                                State-recognised certification ensuring academic and professional credibility.
                            </p>
                        </div>

                        {/* Certificate 4 */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition shadow-xl">
                            <img src="/images/nyp.jpeg"
                                alt="NYP Certification"
                                className="h-24 mx-auto mb-6 object-contain"
                            />
                            <h4 className="text-lg font-semibold text-white mb-2">
                                National Youth Programme (NYP)
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Youth employability and vocational training certification.
                            </p>
                        </div>

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
                                +91 9895953159
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
                href="https://wa.me/919895953159"
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