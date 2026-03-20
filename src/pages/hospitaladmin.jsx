import { motion } from "framer-motion";

export default function HospitalAdmin() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
            </div>

            {/* ================= HERO ================= */}
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
                            The Diploma in Hospital Administration at Edusource Academy is a
                            government-approved program designed for students aiming to build
                            a strong career in the healthcare management sector. As one of the
                            most reliable hospital administration institutes in Kollam, we
                            focus on equipping learners with practical skills, industry
                            awareness, and administrative expertise.
                        </p>
                    </div>

                </motion.div>
            </section>


            {/* ================= CERTIFICATION ================= */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl font-semibold mb-6">
                        Certification
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        All students receive a Government-approved course completion
                        certificate after successfully completing the program.
                    </p>

                </div>
            </section>


            {/* ================= ELIGIBILITY ================= */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Eligibility
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-lg">

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Plus Two pass
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Degree holders from any stream
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Working professionals wishing to upskill
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Mode of Learning: Offline & Online
                        </div>

                    </div>

                </div>
            </section>


            {/* ================= WHAT YOU WILL LEARN ================= */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        What You Will Learn
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-gray-300">

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Hospital operations & administration
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Medical record management
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Healthcare communication
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Patient care coordination
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Inventory & facility management
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Hospital HR practices
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Basic medical terminologies
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Quality management & safety standards
                        </div>

                    </div>

                </div>
            </section>


            {/* ================= CAREER OPPORTUNITIES ================= */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Career Opportunities
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 text-gray-300">

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Hospital Administrator
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Front Office Executive
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Patient Care Coordinator
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Medical Office Assistant
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Healthcare Supervisor
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Medical Records Officer
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
}