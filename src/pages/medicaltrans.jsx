import { motion } from "framer-motion";

export default function MedicalTranscription() {
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
                        src="https://images.unsplash.com/photo-1585435557343-3b092031a831"
                        alt="Medical Transcription"
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
                    <h1 className="text-4xl md:text-5xl font-semibold">
                        Medical Transcription – 4 Months
                    </h1>
                </motion.div>

            </section>


            {/* OVERVIEW */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl font-semibold mb-8 text-center">
                        Overview
                    </h2>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-gray-300 leading-relaxed space-y-4">

                        <p>
                            Medical Transcription is a 4-month practical training program designed for students
                            who want to build a career in medical documentation and transcription services.
                        </p>

                        <p>
                            The course teaches students to listen to physician dictations, understand medical
                            terminology, and convert audio into accurate medical reports.
                        </p>

                        <p>
                            This field offers flexible job opportunities including office-based and remote roles
                        </p>

                    </div>

                </div>
            </section>


            {/* CERTIFICATION + ELIGIBILITY */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                    {/* Certification */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                            Certification
                        </h2>

                        <p className="text-gray-300">
                            Students receive a Government-approved certificate after course completion
                        </p>
                    </div>

                    {/* Eligibility */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                            Eligibility
                        </h2>

                        <ul className="space-y-2 text-gray-300">
                            <li>● Plus Two or above</li>
                            <li>● Good listening and typing skills</li>
                            <li>● Basic English understanding</li>
                        </ul>
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
                            "● Medical transcription basics",
                            "● Medical terminology",
                            "● Anatomy & physiology essentials",
                            "● Listening & typing skills",
                            "● Formatting medical reports",
                            "● Editing & proofreading skills",
                            "● HIPAA basics",
                            "● Real clinical dictation practice"
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


            {/* CAREER OPPORTUNITIES */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Career Opportunities
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "● Medical Transcriptionist",
                            "● Clinical Documentation Specialist",
                            "● Editor/Proofreader (Medical)",
                            "● Healthcare BPO Associate"
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


            {/* WHERE YOU CAN WORK */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Where You Can Work
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "● Medical transcription companies",
                            "● Healthcare BPOs",
                            "● Hospitals",
                            "● Remote transcription platforms"
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-center"
                            >
                                <p className="text-gray-300">{item}</p>
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

        </div>
    );
}