import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

function Counter({ end, suffix = "+" }) {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        amount: 0.5,
    });

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) {
            setCount(0);
            return;
        }

        let start = 0;
        const duration = 1200;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isInView, end]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}
export default function GermanLanguage() {
    return (
        <div className="pt-24 bg-gradient-to-br from-[#0f1b2d] via-[#132238] to-[#182b45] text-white min-h-screen overflow-x-hidden">

            {/* BACKGROUND GLOW */}
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
                    className="relative z-10 max-w-5xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        German Language Training (A1–B2)
                    </h1>

                    <p className="mt-6 text-lg text-gray-300">
                        Learn German with confidence for Higher Studies,
                        Ausbildung, Career Opportunities and Life in Germany.
                    </p>
                </motion.div>

            </section>

            {/* ABOUT */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-4xl font-semibold text-center mb-10">
                        Best German Language Institute in Kollam
                    </h2>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-gray-300 leading-relaxed space-y-6">

                        <p>
                            As a trusted academic institution, we provide expert-led German
                            language programs for learners at all levels.
                        </p>

                        <p>
                            Recognized as one of the best German language institutes in Kollam,
                            we offer comprehensive German language courses with interactive
                            classes, experienced trainers, and practical learning methods.
                        </p>

                        <p>
                            Our curriculum includes exam preparation, speaking practice,
                            listening exercises, reading development, and personalized
                            guidance to ensure fluency and confidence.
                        </p>

                        <p>
                            At our German language institute in Kollam, we are committed
                            to fostering academic excellence and helping students achieve
                            their language and career goals through international-standard
                            teaching techniques.
                        </p>

                        <p>
                            Learn German with confidence at Edusource Academy, Kollam —
                            your trusted destination for structured, practical,
                            and result-oriented German language training.
                        </p>

                        <p>
                            Whether you are planning higher studies, Ausbildung,
                            or a career in Germany, our A1–B2 programs are designed
                            to take you from a complete beginner to a confident speaker
                            through real-life communication practice, expert guidance,
                            and continuous support.
                        </p>

                    </div>

                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="py-20 px-6">

                <div className="max-w-6xl mx-auto">

                    <h2 className="text-4xl font-semibold text-center mb-14">
                        Why Choose Edusource Academy?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            "Small batches for focused attention and speaking practice",
                            "Experienced trainers with practical teaching approach",
                            "Interactive classroom sessions",
                            "Real-life communication training",
                            "Exam preparation support",
                            "Interview & visa communication guidance",
                            "Government-approved certification",
                            "Personalized student mentoring",
                            "Structured A1–B2 learning pathway"
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
                            >
                                <p className="text-gray-300">
                                    {item}
                                </p>
                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* LEVEL CARDS */}
            <section className="py-24 px-6">

                <div className="grid md:grid-cols-4 gap-8">

<Link to="/german-a1">
    <motion.div
        whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: "0 0 40px rgba(34,211,238,0.35)"
        }}
        className="
        h-64 rounded-3xl
        flex flex-col justify-center items-center
        bg-gradient-to-br from-[#152845] to-[#1d3355]
        border border-cyan-400/20
        backdrop-blur-xl
        shadow-xl
        cursor-pointer
        transition-all duration-300"
    >
        <h3 className="text-6xl font-bold text-cyan-300">A1</h3>
        <p className="text-gray-300 mt-3 text-lg">
            Beginner Level
        </p>
    </motion.div>
</Link>

<Link to="/german-a2">
    <motion.div
        whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: "0 0 40px rgba(34,211,238,0.35)"
        }}
        className="
        h-64 rounded-3xl
        flex flex-col justify-center items-center
        bg-gradient-to-br from-[#152845] to-[#1d3355]
        border border-cyan-400/20
        backdrop-blur-xl
        shadow-xl
        cursor-pointer
        transition-all duration-300"
    >
        <h3 className="text-6xl font-bold text-cyan-300">A2</h3>
        <p className="text-gray-300 mt-3 text-lg">
            Elementary Level
        </p>
    </motion.div>
</Link>

<Link to="/german-b1">
    <motion.div
        whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: "0 0 40px rgba(34,211,238,0.35)"
        }}
        className="
        h-64 rounded-3xl
        flex flex-col justify-center items-center
        bg-gradient-to-br from-[#152845] to-[#1d3355]
        border border-cyan-400/20
        backdrop-blur-xl
        shadow-xl
        cursor-pointer
        transition-all duration-300"
    >
        <h3 className="text-6xl font-bold text-cyan-300">B1</h3>
        <p className="text-gray-300 mt-3 text-lg">
            Intermediate Level
        </p>
    </motion.div>
</Link>

<Link to="/german-b2">
    <motion.div
        whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: "0 0 40px rgba(34,211,238,0.35)"
        }}
        className="
        h-64 rounded-3xl
        flex flex-col justify-center items-center
        bg-gradient-to-br from-[#152845] to-[#1d3355]
        border border-cyan-400/20
        backdrop-blur-xl
        shadow-xl
        cursor-pointer
        transition-all duration-300"
    >
        <h3 className="text-6xl font-bold text-cyan-300">B2</h3>
        <p className="text-gray-300 mt-3 text-lg">
            Upper Intermediate Level
        </p>
    </motion.div>
</Link>

</div>

            </section>

            {/* STATISTICS */}
<section className="py-24">
    <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

            <div className="grid md:grid-cols-4 gap-10 text-center">

                <div>
                    <h3 className="text-5xl font-bold text-yellow-400 mb-3">
                        <Counter end={100} />
                    </h3>
                    <p className="text-gray-300 text-lg">
                        Completed Classes
                    </p>
                </div>

                <div>
                    <h3 className="text-5xl font-bold text-yellow-400 mb-3">
                        <Counter end={3} />
                    </h3>
                    <p className="text-gray-300 text-lg">
                        Years Of Experience
                    </p>
                </div>

                <div>
                    <h3 className="text-5xl font-bold text-yellow-400 mb-3">
                        <Counter end={100} />
                    </h3>
                    <p className="text-gray-300 text-lg">
                        Satisfied Students
                    </p>
                </div>

                <div>
                    <h3 className="text-5xl font-bold text-yellow-400 mb-3">
                        <Counter end={10} />
                    </h3>
                    <p className="text-gray-300 text-lg">
                        Certified Trainers
                    </p>
                </div>

            </div>

        </div>

    </div>
</section>
            {/* CTA */}
            <section className="py-24 text-center">

                <h2 className="text-4xl font-semibold mb-6">
                    Start Your German Journey Today
                </h2>

                <p className="text-gray-400 mb-10">
                    Get expert guidance, course details, fee structure,
                    and admission assistance from our team.
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