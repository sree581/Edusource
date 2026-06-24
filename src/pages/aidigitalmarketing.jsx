import { motion } from "framer-motion";

export default function AIDigitalMarketing() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND GLOW */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
            </div>

            {/* HERO */}
            <section className="relative h-[55vh] flex items-center justify-center text-center px-6">

                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                        alt="AI Integrated Digital Marketing"
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
                        AI INTEGRATED DIGITAL MARKETING – 4 MONTHS
                    </h1>
                </motion.div>

            </section>

            {/* OVERVIEW */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl font-semibold mb-8 text-center">
                        Overview
                    </h2>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 leading-relaxed text-gray-300 space-y-4">

                        <p>
                            Edusource Academy presents a 4-Month AI Integrated Digital Marketing Program
                            designed to equip learners with modern, AI-first marketing skills demanded by
                            agencies, startups, and enterprises worldwide.
                        </p>

                        <p>
                            The program combines structured digital marketing training with advanced AI tools,
                            helping students master practical marketing strategies, campaign management,
                            content creation, lead generation, and analytics.
                        </p>

                        <p>
                            Students gain real-world experience through a 1-month live internship in partnership
                            with Aspire and Tact, an AI software company specializing in AI-driven Digital
                            Marketing, Analytics, and Lead Generation.
                        </p>

                    </div>

                </div>
            </section>

            {/* COURSE DETAILS */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                            Duration & Mode
                        </h2>

                        <ul className="space-y-2 text-gray-300">
                            <li>● Duration: 4 Months</li>
                            <li>● 3 Months Structured Training</li>
                            <li>● 1 Month Internship</li>
                            <li>● Online & Offline Learning Available</li>
                            <li>● Practical Project-Based Training</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                            Eligibility
                        </h2>

                        <ul className="space-y-2 text-gray-300">
                            <li>● Plus Two Students</li>
                            <li>● Degree Students & Graduates</li>
                            <li>● Entrepreneurs & Business Owners</li>
                            <li>● Freelancers</li>
                            <li>● Working Professionals</li>
                            <li>● No Prior Marketing Experience Required</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* INTERNSHIP */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

                        <h2 className="text-3xl font-semibold text-cyan-400 mb-6">
                            Internship Opportunity
                        </h2>

                        <p className="text-gray-300 leading-relaxed">
                            Students will undergo a 1-Month Live Internship with Aspire and Tact,
                            gaining hands-on exposure to AI-powered digital marketing campaigns,
                            analytics systems, lead generation strategies, client projects,
                            and industry workflows.
                        </p>

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
                            "● Fundamentals of Digital Marketing",
                            "● Search Engine Optimization (SEO)",
                            "● Search Engine Marketing (SEM)",
                            "● Google Ads Management",
                            "● Social Media Marketing",
                            "● Meta Ads (Facebook & Instagram)",
                            "● Content Marketing",
                            "● Email Marketing",
                            "● Lead Generation Strategies",
                            "● Marketing Analytics",
                            "● Website Optimization",
                            "● Conversion Funnel Building"
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

            {/* AI TOOLS */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-16">
                        AI Tools & Technologies Covered
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            "● ChatGPT",
                            "● Gemini AI",
                            "● Canva AI",
                            "● Google Analytics",
                            "● Google Search Console",
                            "● Meta Business Suite",
                            "● AI Content Creation Tools",
                            "● AI Lead Generation Tools",
                            "● Marketing Automation Platforms"
                        ].map((tool, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-center"
                            >
                                <p className="text-gray-300">{tool}</p>
                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

            {/* CERTIFICATION */}
            <section className="pb-16 px-6">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

                        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                            Certification
                        </h2>

                        <p className="text-gray-300">
                            Students will receive a Government-approved course completion
                            certificate along with internship experience certification
                            upon successful completion of the program.
                        </p>

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
                            "● Digital Marketing Executive",
                            "● SEO Specialist",
                            "● Social Media Manager",
                            "● Content Marketing Executive",
                            "● Performance Marketing Executive",
                            "● Lead Generation Specialist",
                            "● Marketing Analyst",
                            "● Digital Marketing Freelancer",
                            "● Entrepreneur / Business Growth Consultant"
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

                </div>
            </section>

        </div>
    );
}