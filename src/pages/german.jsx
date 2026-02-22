import { motion } from "framer-motion";

export default function GermanLanguage() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0c1424] via-[#111c33] to-[#162643] text-white min-h-screen overflow-x-hidden">

            {/* PREMIUM BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-250px] left-[-200px] w-[650px] h-[650px] bg-yellow-500/10 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-250px] right-[-200px] w-[650px] h-[650px] bg-red-500/10 rounded-full blur-[160px]" />
            </div>

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[65vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1520986606214-8b456906c813"
                        alt="German Language Course"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/75"></div>
                </div>

                <motion.div
                    className="relative z-10 max-w-4xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                        Professional Course in German Language (A1–B2 Levels)
                    </h1>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                        <p className="text-lg leading-relaxed text-gray-200">
                            A structured language program designed for learners aiming to master German from beginner
                            (A1) to intermediate (B2) levels. Open to all students and professionals, with online and ofline
                            class modes. Certified by MSME Technology Development Centre, a Government of India
                            enterprise, under the Youth Employability Skill Training initiative.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* ================= WHAT YOU WILL LEARN ================= */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-semibold mb-6">
                            What you will learn?
                        </h2>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                This course builds a strong foundation in listening, speaking, reading, and writing skills in
                                German. Learn grammar, vocabulary, sentence structure, and conversation patterns essential
                                for travel, higher studies, job applications, and visa interviews. Focused modules aligned with
                                Goethe exam patterns ensure practical and exam-ready fluency.
                            </p>
                        </div>
                    </div>

                    {/* LEVEL CARDS */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {[
                            {
                                title: "Level A1 – Basic German Introduction",
                                text: `Understand basic greetings, self-introduction, numbers, days, daily routine phrases, and
simple sentence formation.`,
                            },
                            {
                                title: "Level A2 – Daily Life Communication",
                                text: `Learn how to describe situations, ask and answer questions, and express needs and
opinions in common real-life scenarios like shopping, transport, and social settings.`,
                            },
                            {
                                title: "Level B1 – Independent Usage",
                                text: `Develop fluency in dealing with professional conversations, structured email writing,
telephone etiquette, and moderate reading comprehension.`,
                            },
                            {
                                title: "Level B2 – Advanced Communication",
                                text: `Master complex sentence formation, abstract topics, and argumentation. Prepare for
work/study in German-speaking countries with interview training and grammar
refinement`,
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03 }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                            >
                                <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= COURSE HIGHLIGHTS ================= */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    {[
                        "Goethe Exam-Focused Curriculum",
                        "Trainers with International Exposure",
                        "Mock Tests & Section-Wise Analysis",
                        "Ideal for Study, Work, or PR Applications",
                    ].map((point, i) => (
                        <div
                            key={i}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-lg text-gray-200"
                        >
                            {point}
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= FAQ SECTION ================= */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto space-y-10">

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-red-400">
                            What can I do after completing this course?
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            You’ll be eligible to apply for German-speaking jobs, German universities, visa interviews, and
                            integration into German work/study environments
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-red-400">
                            Is this course suitable for absolute beginners?
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Yes. The course starts from A1 level and builds gradually to B2. No prior German knowledge is
                            required.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-red-400">
                            Does the course prepare me for Goethe exams?
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Yes. The curriculum is closely aligned with the Goethe-Institut framework, and mock tests are
                            provided for exam readiness
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-red-400">
                            What are the course duration and delivery mode?
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            The program duration varies by level (typically 2 months per level), and classes are ofered in
                            both online and ofline formats.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-red-400">
                            How does this course support my career or immigration plans?
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            German proficiency is a valuable skill in sectors like healthcare, engineering, tourism, education,
                            and IT. This course makes you language-ready for Europe’s strongest economy
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}