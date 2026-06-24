
import { motion } from "framer-motion";

export default function GermanB2() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[140px]" />
            </div>

            {/* HERO */}
            <section className="relative h-[55vh] flex items-center justify-center text-center px-6">

                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                        alt="German B2"
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
                        German B2 Course
                    </h1>

                    <p className="text-lg text-gray-300">
                        Achieve professional-level German proficiency for higher studies,
                        career opportunities, and life in Germany.
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
                            The German B2 course is an upper-intermediate level program under
                            the Common European Framework of Reference for Languages (CEFR).
                            It is designed for learners who have successfully completed the
                            B1 level and wish to achieve advanced communication skills.
                        </p>

                        <p>
                            At this stage, students develop the ability to communicate
                            fluently and spontaneously with native speakers, understand
                            complex texts, participate in professional discussions, and
                            express ideas clearly in both academic and workplace settings.
                        </p>

                        <p>
                            Edusource Academy, Kollam offers comprehensive German B2
                            training through structured learning modules, interactive
                            sessions, practical assignments, and expert guidance.
                        </p>

                        <p>
                            The program focuses on strengthening Listening, Speaking,
                            Reading, and Writing skills while building advanced grammar,
                            vocabulary, and real-world communication abilities.
                        </p>

                        <p>
                            Students engage in discussions, presentations, debates,
                            writing tasks, listening exercises, and professional
                            communication practice that prepares them for study,
                            employment, and settlement opportunities in Germany and
                            other German-speaking countries.
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
                            "Advanced German grammar and sentence structures",
                            "Professional and academic vocabulary development",
                            "Fluent speaking and conversation practice",
                            "Reading newspapers, reports, and complex texts",
                            "Formal writing skills for emails, applications, and reports",
                            "Listening practice using authentic German media",
                            "Interactive discussions, debates, and presentations",
                            "Preparation for higher-level German examinations"
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
                        Benefits of Learning German B2
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "Communicate fluently and confidently with native speakers",
                            "Meet language requirements for many German universities",
                            "Increase opportunities for jobs in Germany and Europe",
                            "Enhance professional communication skills",
                            "Prepare for advanced certifications such as C1",
                            "Improve chances of migration and international career growth",
                            "Adapt more easily to German academic and workplace environments",
                            "Build confidence for interviews, presentations, and professional interactions"
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
                            At Edusource Academy, Kollam, we focus on practical language
                            learning through interactive sessions, expert mentorship,
                            personalized guidance, and continuous speaking practice.
                            Our goal is to help students achieve fluency and confidence
                            while preparing for higher education, career opportunities,
                            Ausbildung programs, and life in Germany.
                        </p>

                    </div>

                </div>
            </section>

        </div>
    );
}

