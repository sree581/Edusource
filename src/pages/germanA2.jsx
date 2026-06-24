import { motion } from "framer-motion";

export default function GermanA2() {
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
                        alt="German A2"
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
                        German A2 Course
                    </h1>

                    <p className="text-lg text-gray-300">
                        Strengthen your German communication skills and move confidently toward fluency.
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
                            The German A2 course is the second level of the Common European
                            Framework of Reference for Languages (CEFR). It is designed
                            for learners who have completed the A1 level and wish to
                            strengthen their German language skills.
                        </p>

                        <p>
                            At this stage, students develop the ability to communicate
                            more confidently in everyday situations, understand commonly
                            used expressions, and engage in conversations related to work,
                            education, travel, and daily life.
                        </p>

                        <p>
                            Edusource Academy, Kollam offers a comprehensive German A2
                            training program tailored to help students improve their
                            language proficiency and prepare for higher levels of German learning.
                        </p>

                        <p>
                            The course focuses on enhancing the four core language skills:
                            Listening, Speaking, Reading, and Writing through structured
                            lessons, practical exercises, and interactive learning methods.
                        </p>

                        <p>
                            Our experienced trainers use modern teaching techniques,
                            including role-plays, group discussions, audio-visual
                            presentations, and real-life communication activities to make
                            learning engaging and effective.
                        </p>

                        <p>
                            Students also gain valuable insights into German culture,
                            traditions, and lifestyle, helping them adapt more easily
                            to life in German-speaking countries.
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
                            "Advanced vocabulary and grammar development",
                            "Improved conversation and communication skills",
                            "Reading and understanding everyday texts",
                            "Writing simple letters, emails, and messages",
                            "Listening comprehension through practical exercises",
                            "Interactive role-plays and group activities",
                            "Introduction to German culture and social practices"
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
                        Benefits of Learning German A2
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "Strengthens communication skills for everyday and professional situations",
                            "Provides a solid foundation for progressing to B1 and higher levels",
                            "Increases opportunities for studying in Germany and other European countries",
                            "Enhances employability in international organizations and multinational companies",
                            "Helps students meet language requirements for higher education and migration pathways",
                            "Improves confidence in understanding and participating in real-life conversations",
                            "Facilitates smoother integration into German-speaking environments"
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
                            At Edusource Academy, Kollam, we are committed to helping
                            students achieve fluency through practical learning and expert
                            guidance. Whether your goal is higher education, career
                            advancement, or relocation to a German-speaking country,
                            our German A2 course equips you with the skills and confidence
                            needed to take the next step in your language journey.
                        </p>

                    </div>

                </div>
            </section>

        </div>
    );
}