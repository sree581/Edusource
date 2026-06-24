
import { motion } from "framer-motion";

export default function GermanB1() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[140px]" />
            </div>

            {/* HERO */}
            <section className="relative h-[55vh] flex items-center justify-center text-center px-6">

                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                        alt="German B1"
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
                        German B1 Course
                    </h1>

                    <p className="text-lg text-gray-300">
                        Develop independent communication skills and gain confidence in academic, professional, and everyday German.
                    </p>
                </motion.div>

            </section>

            {/* OVERVIEW */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl font-semibold mb-8 text-center">
                        Course Overview
                    </h2>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 leading-relaxed text-gray-300 space-y-5">

                        <p>
                            The German B1 course is an intermediate-level program under the
                            Common European Framework of Reference for Languages (CEFR).
                            It is designed for learners who have completed the A2 level
                            and are ready to communicate more independently and confidently in German.
                        </p>

                        <p>
                            At this stage, students develop the ability to understand the
                            main points of clear communication, express opinions,
                            describe experiences, and handle a wide range of everyday
                            and professional situations.
                        </p>

                        <p>
                            Edusource Academy, Kollam offers comprehensive German B1
                            training through both online and offline learning modes,
                            providing flexibility for students and working professionals alike.
                        </p>

                        <p>
                            Our course is carefully structured to strengthen all four
                            essential language skills—Listening, Speaking, Reading,
                            and Writing—while helping learners achieve greater fluency
                            and accuracy in German communication.
                        </p>

                        <p>
                            The program includes advanced grammar concepts, expanded
                            vocabulary, conversation practice, reading comprehension,
                            and writing exercises.
                        </p>

                        <p>
                            Students engage in interactive learning through discussions,
                            role-plays, presentations, audio recordings, video lessons,
                            and practical assignments that simulate real-life situations.
                        </p>

                        <p>
                            In addition to language proficiency, the course introduces
                            students to German culture, social norms, and professional
                            environments, helping them prepare for study, work, and
                            life in German-speaking countries.
                        </p>

                    </div>

                </div>
            </section>

            {/* COURSE HIGHLIGHTS */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Course Highlights
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "Advanced grammar and sentence construction",
                            "Expanded vocabulary for academic and professional communication",
                            "Interactive speaking and conversation practice",
                            "Reading and comprehension of newspapers, articles, and everyday texts",
                            "Structured writing exercises, emails, and formal communication",
                            "Listening practice using authentic German audio and video materials",
                            "Online and offline learning options",
                            "Personalized guidance and one-on-one support from experienced trainers"
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

            {/* BENEFITS */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Benefits of Learning German B1
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "Enables independent communication in most everyday situations",
                            "Meets the language requirements for many study and vocational programs in Germany",
                            "Enhances career opportunities in international companies and German-speaking countries",
                            "Improves confidence in speaking, reading, and writing German fluently",
                            "Helps students prepare for higher-level German certifications such as B2 and C1",
                            "Facilitates smoother integration into German academic, professional, and social environments",
                            "Strengthens prospects for migration, higher education, and employment abroad"
                        ].map((benefit, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.04 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
                            >
                                <p className="text-gray-300">{benefit}</p>
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

            {/* WHY EDUSOURCE */}
            <section className="pb-24 px-6">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

                        <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
                            Why Choose Edusource Academy?
                        </h2>

                        <p className="text-gray-300 leading-relaxed">
                            At Edusource Academy, Kollam, we are committed to delivering
                            high-quality German language education through innovative
                            teaching methods and expert mentorship. Whether your goal is
                            higher studies, career advancement, or international opportunities,
                            our German B1 course provides the knowledge and confidence
                            needed to achieve success in a German-speaking world.
                        </p>

                    </div>

                </div>
            </section>

        </div>
    );
}

