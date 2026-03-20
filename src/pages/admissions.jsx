import { motion } from "framer-motion";

export default function Admissions() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px]" />
            </div>

            {/* HERO */}
            <section className="text-center py-20 px-6">
                <motion.h1
                    className="text-4xl md:text-5xl font-semibold mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Admissions at Edusource Academy
                </motion.h1>

                <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                    Joining Edusource Academy is simple and student-friendly. We aim to make the admission
                    process smooth and stress-free.
                </p>
            </section>

            {/* HOW TO APPLY */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        How to Apply
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "Visit our centre or contact our team",
                            "Choose your preferred course",
                            "Submit basic documents",
                            "Complete registration",
                            "Begin classes"
                        ].map((step, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
                            >
                                {step}
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>


            {/* DOCUMENTS REQUIRED */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Documents Required
                    </h2>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

                        <ul className="space-y-3 text-gray-300">
                            <li>Aadhar card</li>
                            <li>Passport-size photographs</li>
                            <li>Educational certificates (Plus Two / Degree)</li>
                            <li>Application form</li>
                        </ul>

                    </div>

                </div>
            </section>


            {/* WHY ENROLL */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Why Enroll With Us?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "● Government-certified programs",
                            "● Affordable fee structure",
                            "● Job-oriented skills",
                            "● Flexible class timing"
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-center"
                            >
                                {item}
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

        </div>
    );
}