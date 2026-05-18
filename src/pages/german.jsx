import { motion } from "framer-motion";

export default function GermanLanguage() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[140px]" />
            </div>

            {/* HERO */}
            <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                        alt="German Language"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <motion.div
                    className="relative z-10 max-w-4xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        German Language Training (A1–B2)
                    </h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Build real fluency. Study, work, and grow in Germany with confidence.
                    </p>
                </motion.div>
            </section>

            {/* INTRO */}
            <section className="py-20 px-6 max-w-5xl mx-auto text-gray-300 space-y-6 leading-relaxed text-lg">
                <p>
                    Learn German with confidence at <span className="text-yellow-400 font-medium">Edusource Academy, Kollam</span> —
                    your trusted destination for structured, practical, and result-oriented German language training.
                </p>
                <p>
                    Whether you are planning higher studies, Ausbildung, or a career in Germany,
                    our A1–B2 programs are designed to take you from a complete beginner to a confident speaker
                    through real-life communication practice, expert guidance, and consistent support.
                </p>
            </section>

            {/* WHY CHOOSE */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl text-center mb-12 font-semibold">
                    Why Edusource Academy?
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Small batches for focused attention and speaking practice",
                        "Experienced trainers with practical teaching approach",
                        "Real-life communication training (not just theory)",
                        "Beginner-friendly structured learning system",
                        "Interview & visa communication support",
                        "Government-approved certification"
                    ].map((item, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.05 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                            {item}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* LEVELS */}
            <section className="py-24 px-6 max-w-6xl mx-auto space-y-16">
                <h2 className="text-3xl text-center font-semibold">
                    German Course Levels (A1 – B2)
                </h2>

                {/* A1 */}
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-2xl text-yellow-400 mb-4">A1 Level – Beginner</h3>
                    <p className="text-gray-300 mb-4">
                        This is where your journey begins. You will start from zero and build the foundation of the German language.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                        <li>● German alphabets, pronunciation & sounds</li>
                        <li>● Introducing yourself and basic conversations</li>
                        <li>● Asking and answering simple questions</li>
                        <li>● Forming basic sentences</li>
                        <li>● Understanding slow and clear speech</li>
                    </ul>
                    <p className="mt-4 text-gray-400">
                        👉 By the end of A1, you overcome fear and start speaking basic German confidently.
                    </p>
                </div>

                {/* A2 */}
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-2xl text-yellow-400 mb-4">A2 Level – Elementary</h3>
                    <p className="text-gray-300 mb-4">
                        A2 strengthens your basics and helps you communicate more comfortably in everyday situations.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                        <li>● Talking about daily routines and surroundings</li>
                        <li>● Reading and writing short texts</li>
                        <li>● Expanding vocabulary and grammar knowledge</li>
                        <li>● Understanding commonly used expressions</li>
                    </ul>
                    <p className="mt-4 text-gray-400">
                        👉 At A2, you begin to speak more naturally and understand conversations better.
                    </p>
                </div>

                {/* B1 */}
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-2xl text-yellow-400 mb-4">B1 Level – Intermediate</h3>
                    <p className="text-gray-300 mb-4">
                        B1 is where communication becomes meaningful and independent.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                        <li>● Understanding longer conversations</li>
                        <li>● Expressing opinions, ideas, and experiences</li>
                        <li>● Handling travel and real-life scenarios</li>
                        <li>● Writing structured paragraphs</li>
                    </ul>
                    <p className="mt-4 text-gray-400">
                        👉 After B1, you can manage most real-life situations in Germany independently.
                    </p>
                </div>

                {/* B2 */}
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-2xl text-yellow-400 mb-4">B2 Level – Upper Intermediate</h3>
                    <p className="text-gray-300 mb-4">
                        B2 prepares you for professional and academic environments.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                        <li>● Understanding complex texts and discussions</li>
                        <li>● Speaking fluently and confidently</li>
                        <li>● Participating in interviews and debates</li>
                        <li>● Writing detailed reports and formal communication</li>
                    </ul>
                    <p className="mt-4 text-gray-400">
                        👉 B2 makes you fully ready to study, work, and live in Germany.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <h2 className="text-3xl font-semibold mb-6">
                    Start Your German Journey Today
                </h2>
                <p className="text-gray-400 mb-10">
                    Limited seats. Get guidance, demo class details, and fee structure from our team.
                </p>

                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeqPi9IZvuPWEVUQRTj_7RgjLpcqgewOzT3xvq0l1NcCBQe_Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-10 py-4 rounded-full shadow-lg transition text-lg"
                >
                    Apply Now
                </a>
            </section>

        </div>
    );
}