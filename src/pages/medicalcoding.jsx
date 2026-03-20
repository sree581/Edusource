import { motion } from "framer-motion";

export default function MedicalCoding() {
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
                        src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"
                        alt="Medical Coding"
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
                    <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                        MEDICAL CODING – 3 MONTHS
                    </h1>
                </motion.div>

            </section>


            {/* OVERVIEW */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl font-semibold mb-8 text-center">Overview</h2>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 leading-relaxed text-gray-300 space-y-4">

                        <p>
                            The Medical Coding program at Edusource Academy is a 3-month, job-oriented training
                            designed for students who wish to build a career in the fast-growing healthcare documentation
                            and coding industry.
                        </p>

                        <p>
                            This course provides detailed knowledge of medical terminology, anatomy, ICD and CPT coding
                            guidelines, and the workflow used by hospitals and medical billing companies.
                        </p>

                        <p>
                            A perfect choice for students aiming for work-from-office or remote medical coding careers in
                            India and abroad.
                        </p>

                    </div>
                </div>
            </section>


            {/* CERTIFICATION + ELIGIBILITY */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                    {/* Certification */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                            Certification
                        </h2>

                        <p className="text-gray-300">
                            All students receive a Government-approved course completion certificate after successfully
                            completing the program.
                        </p>
                    </div>

                    {/* Eligibility */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                            Eligibility
                        </h2>

                        <ul className="space-y-2 text-gray-300">
                            <li>● Plus Two (any stream)</li>
                            <li>● Degree students / graduates</li>
                            <li>● Nursing, pharmacy, life science backgrounds are an advantage (not mandatory)</li>
                            <li>● Working professionals looking to switch careers</li>
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
                            "● Basics of Medical Coding",
                            "● Introduction to Healthcare Documentation",
                            "● Anatomy & Physiology fundamentals",
                            "● Medical Terminology",
                            "● ICD-10-CM Coding",
                            "● CPT & HCPCS Coding",
                            "● Coding guidelines & conventions",
                            "● Medical billing process overview",
                            "● HIPAA compliance basics",
                            "● Practical coding exercises & chart review"
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
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        Career Opportunities
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            "● Medical Coder",
                            "● Junior Medical Coder",
                            "● Coding Analyst",
                            "● Billing & Coding Assistant",
                            "● Clinical Documentation Executive",
                            "● Revenue Cycle Management (RCM) Associate",
                            "● Medical Records Reviewer"
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
                    {/* OPPORTUNITY SECTORS */}
                    <section className="pb-24 px-6">
                        <div className="max-w-5xl mx-auto">

                            <h2 className="text-3xl font-semibold text-center mb-12">
                                You can find opportunities in:
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">

                                {[
                                    "● Hospitals",
                                    "● Medical coding companies",
                                    "● Healthcare BPOs",
                                    "● Insurance companies",
                                    "● Remote/online coding service providers"
                                ].map((item, index) => (

                                    <div
                                        key={index}
                                        className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-gray-300"
                                    >
                                        {item}
                                    </div>

                                ))}

                            </div>

                        </div>
                    </section>



                </div>
            </section>

        </div>
    );
}