import { motion } from "framer-motion";

export default function AIVideoEditing() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
            </div>

            {/* HERO */}
            <section className="relative h-[55vh] flex items-center justify-center text-center px-6">

                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
                        alt="AI Integrated Video Editing"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <motion.div
                    className="relative z-10 max-w-4xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                        AI INTEGRATED VIDEO EDITING – 6 MONTHS
                    </h1>
                </motion.div>

            </section>

            {/* OVERVIEW */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl font-semibold mb-8 text-center">
                        Overview
                    </h2>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 leading-relaxed text-gray-300 space-y-4">

                        <p>
                            Edusource Academy presents a 6-Month Diploma in AI Integrated Video Editing,
                            designed to equip students with professional-level skills in video editing,
                            post-production, storytelling, motion graphics, and modern AI-powered creative workflows.
                        </p>

                        <p>
                            This program combines traditional editing techniques with cutting-edge AI tools,
                            helping learners create engaging videos for films, advertisements,
                            YouTube channels, social media platforms, and digital marketing campaigns.
                        </p>

                        <p>
                            Students gain practical experience through real-world projects,
                            portfolio development, and hands-on training using industry-standard software
                            used by professional editors and production studios worldwide.
                        </p>

                    </div>

                </div>
            </section>

            {/* COURSE DETAILS */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                            Duration & Mode
                        </h2>

                        <ul className="space-y-2 text-gray-300">
                            <li>● Duration: 6 Months</li>
                            <li>● Offline Classroom Training</li>
                            <li>● Practical Project-Based Learning</li>
                            <li>● Portfolio Development</li>
                            <li>● Industry-Oriented Training</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                            Eligibility
                        </h2>

                        <ul className="space-y-2 text-gray-300">
                            <li>● Plus Two Students</li>
                            <li>● Degree Students & Graduates</li>
                            <li>● Content Creators</li>
                            <li>● Freelancers</li>
                            <li>● Marketing Professionals</li>
                            <li>● Anyone Passionate About Video Production</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* COURSE HIGHLIGHTS */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Course Highlights
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "● Hands-on Training with Adobe Premiere Pro",
                            "● Advanced Editing using DaVinci Resolve",
                            "● Motion Graphics using Adobe After Effects",
                            "● AI-Powered Editing Techniques",
                            "● Creative Storytelling for Films & Advertisements",
                            "● Social Media Video Editing",
                            "● Professional Color Correction",
                            "● Audio Editing & Mixing",
                            "● Real-World Projects & Assignments",
                            "● Portfolio & Showreel Development"
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.04 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
                            >
                                <p className="text-gray-300">{item}</p>
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

            {/* SOFTWARE & TOOLS */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Software & AI Tools Covered
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            "● Adobe Premiere Pro",
                            "● Adobe After Effects",
                            "● DaVinci Resolve",
                            "● Adobe Audition",
                            "● Canva AI",
                            "● ChatGPT for Content Creation",
                            "● AI Voice Generation Tools",
                            "● AI Video Enhancement Tools",
                            "● AI Subtitle & Caption Tools"
                        ].map((tool, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-center"
                            >
                                <p className="text-gray-300">{tool}</p>
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

            {/* WHAT YOU WILL LEARN */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        What You Will Learn
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "● Professional Video Editing Workflow",
                            "● Storytelling & Visual Communication",
                            "● Motion Graphics Design",
                            "● Visual Effects Fundamentals",
                            "● YouTube Content Editing",
                            "● Instagram Reels & Shorts Editing",
                            "● Brand Promotion Video Creation",
                            "● Audio Synchronization & Mixing",
                            "● Color Grading Techniques",
                            "● AI-Assisted Editing Automation"
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-gray-300"
                            >
                                {item}
                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* CERTIFICATION */}
            <section className="pb-16 px-6">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

                        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                            Certification
                        </h2>

                        <p className="text-gray-300">
                            Students who successfully complete the program will receive a
                            Government-approved Diploma Certificate in AI Integrated Video Editing,
                            validating their professional editing and post-production skills.
                        </p>

                    </div>

                </div>
            </section>

            {/* CAREER OPPORTUNITIES */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Career Opportunities
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            "● Video Editor",
                            "● AI Video Editor",
                            "● Motion Graphics Designer",
                            "● YouTube Content Editor",
                            "● Social Media Video Creator",
                            "● Post Production Executive",
                            "● Advertising Video Editor",
                            "● Freelance Video Editor",
                            "● Content Production Specialist"
                        ].map((job, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-center"
                            >
                                <p className="text-gray-300">{job}</p>
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

        </div>
    );
}