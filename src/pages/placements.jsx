import { motion } from "framer-motion";

export default function Placements() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
            </div>

            {/* HERO */}
            <section className="text-center py-20 px-6">
                <motion.h1
                    className="text-4xl md:text-5xl font-semibold mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    PLACEMENT
                </motion.h1>

                <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                    Placements at Edusource Academy
                </p>

                <p className="text-gray-300 max-w-3xl mx-auto mt-4">
                    Edusource Academy ensures that every student receives strong placement support to enter the
                    industry with confidence. Our programs are designed to make students job-ready with practical
                    training and skill-focused learning.
                </p>
            </section>

            {/* PLACEMENT ASSISTANCE */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Placement Assistance Includes
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "● Career counselling",
                            "● Resume building support",
                            "● Interview preparation",
                            "● Industry-aligned training sessions",
                            "● Job updates and guidance",
                            "● Skill assessment to improve employability"
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-gray-300"
                            >
                                {item}
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>


            {/* EXPERT TRAINERS */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Expert Trainers (Faculty)
                    </h2>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl text-gray-300 space-y-4">

                        <p>
                            Our trainers come with 2+ years of experience in their respective domains.
                        </p>

                        <p>
                            They focus on delivering practical, easy-to-understand classes that help students gain real
                            skills, not just theory.
                        </p>

                    </div>

                </div>
            </section>


            {/* COURSES COVERED */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Courses Covered Under Placements
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            "● Hospital Administration",
                            "● HR Management",
                            "● Logistics & Supply Chain Management",
                            "● Medical Coding",
                            "● Medical Transcription",
                            "● German Language (A1–B2)"
                        ].map((course, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-center text-gray-300"
                            >
                                {course}
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

        </div>
    );
}