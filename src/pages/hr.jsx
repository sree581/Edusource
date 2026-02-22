import { motion } from "framer-motion";

export default function HRManagement() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* SOFT BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
            </div>

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                        alt="Human Resource Management"
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
                        Advanced Diploma in Human Resource Management
                    </h1>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                        <p className="text-lg leading-relaxed text-gray-200">
                            A six-month advanced diploma designed for graduates aiming to build or advance a career in
                            HR. Open to degree holders from any stream, with flexible online and ofline learning modes.
                            Certified by MSME Technology Development Centre, a Govt. of India enterprise, under the
                            Youth Employability Skill Training initiative.
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
                                This program delves into essential HRM domains including organizational behavior,
                                communication strategies, employee lifecycle management, training development, and industrial
                                relations. It includes hands-on HR projects, role-plays, and a project viva for real-world
                                readiness.
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
                            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                                Managerial Communication and Behavior
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Strengthen your interpersonal skills through focused modules on workplace
                                communication and organizational behavior, enabling you to lead, manage, and
                                influence effectively.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                                Core HR Management
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Master the fundamental HR processes including recruitment, onboarding, performance
                                appraisal, payroll, and employee engagement strategies.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                                Training and Development
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Design, implement, and evaluate training programs aligned to organizational goals.
                                Learn about training needs analysis, feedback systems, and talent development.
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl transition"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                                Industrial Relations and Compliance
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Understand Indian labor laws, employee grievance handling, and union negotiations.
                                Get equipped to handle workplace conflict and legal compliance.
                            </p>
                        </motion.div>

                    </div>

                </div>
            </section>

        </div>
    );
}