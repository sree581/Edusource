import { motion } from "framer-motion";

export default function GermanA1() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[140px]" />
            </div>

            {/* HERO */}
            <section className="relative h-[55vh] flex items-center justify-center text-center px-6">

                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                        alt="German A1"
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
                    <h1 className="text-4xl md:text-6xl font-semibold mb-4">
                        German A1 Course
                    </h1>

                    <p className="text-lg text-gray-300">
                        The first step towards studying, working, and living in Germany.
                    </p>
                </motion.div>

            </section>

            {/* OVERVIEW */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl font-semibold mb-8 text-center">
                        Course Overview
                    </h2>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-gray-300 leading-relaxed space-y-5">

                        <p>
                            German A1 is the introductory level of the Common European Framework
                            of Reference for Languages (CEFR). It serves as the foundation for
                            learning German and enables learners to understand and use familiar
                            everyday expressions and basic phrases.
                        </p>

                        <p>
                            At this level, students learn to introduce themselves and others,
                            engage in simple conversations, and communicate about personal
                            information such as family, residence, hobbies, and daily activities.
                        </p>

                        <p>
                            Edusource Academy, Kollam offers a structured and practical German A1
                            training program designed specifically for beginners who want to build
                            a strong foundation before progressing to higher levels.
                        </p>

                    </div>

                </div>
            </section>

            {/* ABOUT EDUSOURCE */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

                        <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
                            Why Learn German A1 at Edusource Academy?
                        </h2>

                        <p className="text-gray-300 leading-relaxed mb-4">
                            Edusource Academy is a leading foreign language training institute
                            dedicated to helping students achieve their academic and career goals
                            through quality language education.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            Our experienced trainers provide personalized guidance, interactive
                            classroom sessions, practical communication exercises, and modern
                            teaching methodologies to ensure effective and enjoyable learning.
                        </p>

                    </div>

                </div>
            </section>

            {/* WHAT YOU WILL LEARN */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        What You Will Learn
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "German Alphabets and Pronunciation",
                            "Basic Vocabulary and Everyday Expressions",
                            "Sentence Formation",
                            "Grammar Fundamentals",
                            "Simple Conversations",
                            "Communication Skills",
                            "Reading Practice",
                            "Writing Practice",
                            "Listening Comprehension Activities",
                            "Real-Life Speaking Exercises"
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

            {/* SKILLS DEVELOPED */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Skills You Will Develop
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            "Listening",
                            "Speaking",
                            "Reading",
                            "Writing"
                        ].map((skill, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-xl"
                            >
                                <p className="text-xl text-yellow-400 font-medium">
                                    {skill}
                                </p>
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Benefits of Learning German A1
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "Builds a strong foundation for advanced German levels",
                            "Supports higher education opportunities in Germany",
                            "Improves career prospects in multinational companies",
                            "Helps with communication while travelling abroad",
                            "Provides eligibility for higher-level German certifications",
                            "Develops confidence in real-life German conversations"
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
                            >
                                <p className="text-gray-300">{item}</p>
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

            {/* ELIGIBILITY */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

                        <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
                            Eligibility
                        </h2>

                        <ul className="space-y-3 text-gray-300">
                            <li>● Open to students, graduates, and working professionals</li>
                            <li>● No prior German language knowledge required</li>
                            <li>● Suitable for those planning higher studies, Ausbildung, work, or migration</li>
                            <li>● Beginner-friendly course designed for complete newcomers</li>
                        </ul>

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="pb-24 text-center px-6">

                <h2 className="text-3xl font-semibold mb-6">
                    Start Your German Journey Today
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                    Whether your goal is higher education, Ausbildung, employment,
                    or migration to Germany, the A1 level is your first step toward success.
                </p>

                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeqPi9IZvuPWEVUQRTj_7RgjLpcqgewOzT3xvq0l1NcCBQe_Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-10 py-4 rounded-full shadow-lg transition text-lg"
                >
                    Enroll Now
                </a>

            </section>

        </div>
    );
}