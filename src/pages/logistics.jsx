import { motion } from "framer-motion";

export default function LogisticsShipping() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* SOFT BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
            </div>

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1501696461415-6bd6660c6742"
                        alt="Logistics and Shipping"
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
                        Diploma in Logistics & Shipping Management
                    </h1>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                        <p className="text-lg leading-relaxed text-gray-200">
                            A six-month professional diploma designed for students and professionals aspiring to build or
                            advance a career in logistics, shipping, and supply chain management. Open to +2 or degree
                            holders from any stream, with flexible online and ofline learning options. Certified under the
                            National Youth Programme (NYP) — UPSC afiliated and recognized across industries for
                            skill-based training.
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
                                This program provides a strong foundation in logistics operations, supply chain strategy,
                                international trade, and shipping management, combining theory with real-world applications.
                                Students will gain hands-on experience through industry projects, simulations, and case studies,
                                preparing them for fast-paced global logistics environments.
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
                            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                                Logistics Operations & Supply Chain Management
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Gain a comprehensive understanding of how goods and information move efficiently
                                across supply chains. Learn about logistics planning, inventory control, transportation
                                management, and supply chain optimization.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                                EXIM Trade & Documentation
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Learn the essentials of Export-Import (EXIM) business, including trade procedures,
                                documentation, international laws, foreign exchange systems, and customs clearance
                                processes.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                                Shipping Management & Port Operations
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Study the functioning of global shipping, maritime organizations, port logistics, ship
                                types, liner and tramp operations, and global sea trade routes.
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                                Multimodal Transport & Freight Forwarding
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Understand the integration of various transport modes — sea, air, rail, and road — and
                                learn about ICD/CFS operations, INCOTERMS, and multimodal transport conventions
                            </p>
                        </motion.div>

                    </div>

                </div>
            </section>

        </div>
    );
}