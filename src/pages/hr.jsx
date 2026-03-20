import { motion } from "framer-motion";

export default function HRManagement() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
            </div>

            {/* HERO */}
            <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                        alt="HR Management"
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
                        Advanced Diploma in HR Management
                    </h1>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                        <p className="text-lg text-gray-200">
                            A 6-month professional program designed for graduates who want to
                            build a career in Human Resource departments and step confidently
                            into the corporate world.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* OVERVIEW */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-6">Course Overview</h2>

                    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            The Advanced Diploma in HR Management is a professional training
                            program built around real-world HR practices. The course prepares
                            students to take up key roles in Human Resource departments and
                            equips them with the knowledge required for recruitment, employee
                            management, payroll handling, and HR analytics.
                        </p>
                    </div>
                </div>
            </section>

            {/* CERTIFICATION */}
            <section className="py-10 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                            Certification
                        </h3>
                        <p className="text-gray-300">
                            All students receive a Government-approved course completion
                            certificate after successfully completing the program.
                        </p>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY + MODE */}
            <section className="py-10 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                            Eligibility
                        </h3>

                        <ul className="text-gray-300 space-y-2">
                            <li>• Graduation in any stream</li>
                            <li>• Working professionals looking to build or advance an HR career</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                            Mode of Learning
                        </h3>

                        <p className="text-gray-300">
                            Available in both <strong>Offline</strong> and <strong>Online</strong> modes.
                        </p>
                    </div>

                </div>
            </section>

            {/* WHAT YOU WILL LEARN */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-4xl font-semibold text-center mb-16">
                        What You Will Learn
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "HR Fundamentals",
                            "Recruitment and Staffing",
                            "Payroll Management",
                            "Employee Engagement",
                            "Training and Development",
                            "HR Analytics Basics",
                            "Performance Management Systems",
                            "Labour Laws",
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
                            >
                                <p className="text-lg text-gray-300">{item}</p>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

            {/* CAREER OPPORTUNITIES */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-4xl font-semibold text-center mb-16">
                        Career Opportunities
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            "HR Executive",
                            "Recruitment Specialist",
                            "HR Coordinator",
                            "Talent Acquisition Associate",
                            "Payroll Assistant",
                            "HR Trainee",
                        ].map((job, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl text-center"
                            >
                                <p className="text-lg text-gray-300">{job}</p>
                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>

        </div>
    );
}