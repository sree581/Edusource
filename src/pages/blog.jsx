import { motion } from "framer-motion";

export default function Blog() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px]" />
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
                    Blog
                </motion.h1>

                <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                    Explore insights, career tips, and industry updates from Edusource Academy.
                </p>

            </section>


            {/* BLOG POSTS */}
            <section className="pb-24 px-6">

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

                    {/* Blog 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
                    >

                        <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
                            alt="Medical Coding"
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">
                                Career Opportunities in Medical Coding
                            </h3>

                            <p className="text-gray-300 text-sm">
                                Medical coding is one of the fastest-growing healthcare careers.
                                Learn how training can open doors to global job opportunities.
                            </p>
                        </div>

                    </motion.div>


                    {/* Blog 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
                    >

                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                            alt="Logistics"
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">
                                Why Logistics Careers Are Growing
                            </h3>

                            <p className="text-gray-300 text-sm">
                                Logistics and supply chain management are essential to global
                                trade and offer exciting career opportunities.
                            </p>
                        </div>

                    </motion.div>


                    {/* Blog 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
                    >

                        <img
                            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                            alt="German Language"
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">
                                Benefits of Learning German
                            </h3>

                            <p className="text-gray-300 text-sm">
                                German language skills can help students pursue higher studies
                                and career opportunities in Germany and Europe.
                            </p>
                        </div>

                    </motion.div>

                </div>

            </section>

        </div>
    );
}