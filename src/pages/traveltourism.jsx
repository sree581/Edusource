import { motion } from "framer-motion";

export default function TravelTourism() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* SOFT BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
            </div>

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                        alt="Travel and Tourism"
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
                        Professional Diploma in Travel & Tourism
                    </h1>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                        <p className="text-lg leading-relaxed text-gray-200">
                            A six-month diploma crafted for aspiring professionals looking to enter the vibrant world of travel
                            and tourism. Open to students who have completed Plus Two, with flexible online and ofline
                            learning options. Certified by MSME Technology Development Centre, a Government of India
                            enterprise, under the Youth Employability Skill Training initiative.
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
                                This program ofers in-depth knowledge of the tourism industry, blending theory with practical
                                exposure. You’ll explore travel operations, tourism marketing, global destinations, customer
                                service, itinerary planning, and more—gearing you up to meet real-world expectations with
                                confidence.
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
                            <h3 className="text-2xl font-semibold mb-6 text-orange-400">
                                Tourism Industry Overview
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Gain a broad understanding of the global and Indian tourism landscape,
                                including travel trends, tourism types, and sectoral opportunities.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-orange-400">
                                Travel Operations and Planning
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Learn how to organize domestic and international tours, handle ticketing,
                                and manage travel logistics for individuals and groups.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-orange-400">
                                Customer Service and Communication
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Master client interaction, soft skills, and problem-solving to deliver
                                exceptional service across hospitality and tourism touchpoints.
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-orange-400">
                                Tourism Marketing and Promotion
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Understand how to promote destinations and travel services using digital
                                tools, social media, and strategic branding techniques.
                            </p>
                        </motion.div>

                    </div>

                </div>
            </section>

        </div>
    );
}