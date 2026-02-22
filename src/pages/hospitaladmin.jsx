import { motion } from "framer-motion";

export default function HospitalAdmin() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* SOFT BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
            </div>

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
                        alt="Hospital Administration"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <motion.div
                    className="relative z-10 max-w-4xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                        Diploma in Hospital Administration
                    </h1>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                        <p className="text-lg leading-relaxed text-gray-200">
                            A one-year diploma for aspiring healthcare administrators. Open to Plus Two graduates, with
                            classes available both online and ofline. Certified by MSME Technology Development Centre, a
                            Govt. of India enterprise.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* ================= WHAT YOU WILL LEARN ================= */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Section Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-semibold mb-6">
                            What you will learn?
                        </h2>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                This diploma program covers the core foundations of hospital administration including
                                management principles, hospital planning, medical laws, clinical service coordination, and
                                software tools used in hospital environments. Learn through hands-on projects, journal work,
                                and viva voce evaluations.
                            </p>
                        </div>
                    </div>

                    {/* ================= LEARNING CARDS ================= */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Card 1 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                                Hospital Management & Planning
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Gain practical knowledge of hospital structure, operations, infrastructure
                                planning, and healthcare workflows.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                                Medical & Administrative Skills
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Understand medical terminology, hospital procedures, and the essentials
                                of managing clinical and non-clinical services.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                                Finance & Inventory Control
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Learn hospital-focused financial management, budgeting, and efective
                                inventory/material control systems.
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                                HR & Legal Frameworks
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Develop expertise in human resource management, healthcare laws, and
                                compliance within medical institutions.
                            </p>
                        </motion.div>

                    </div>

                </div>
            </section>

        </div>
    );
}