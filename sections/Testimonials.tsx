"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";



const quotes = [
    {
        text:
            "My education at JG has been instrumental in shaping my career. The comprehensive academic programme and exceptional faculty provided me with a solid grounding in my chosen field of study.",
        name: "Sumit Khurana",
        role:
            "B.Com · General Manager, Ahmedabad Mirror & NavGujarat Samay",
    },

    {
        text:
            "As a celebrity singer today, I owe a great deal to JG for shaping me into the person I am. The faculty members were more than just teachers — they served as mentors who guided us throughout our journey.",
        name: "Jigardan Gadhvi",
        role: "Celebrity Singer · JG Alumnus",
    },

    {
        text:
            "My time at JG was one of the most fulfilling and life-changing experiences. The balance of theoretical and practical learning helped me build a strong professional foundation.",
        name: "Parth Rupareliya",
        role: "Art Director",
    },

    {
        text:
            "The demanding academic programme and practical exposure through internships gave me valuable industry experience and confidence in my career journey.",
        name: "Parth Raval",
        role:
            "Creative Producer, Colors Gujarati · Viacom 18",
    },

    {
        text:
            "The BCA programme at JG gave me a strong foundation in IT and modern technologies. The practical learning environment prepared me for real-world challenges.",
        name: "Yatendra Sinh Joddha",
        role:
            "BCA · Technical Lead, Tata Consultancy Services",
    },

    {
        text:
            "The emphasis on practical learning through projects and assignments allowed me to strengthen my technical skills and grow professionally.",
        name: "Disha Thaker",
        role:
            "BCA · Project Associate, Cognizant",
    },

    {
        text:
            "The Management programme offered cutting-edge course design, industry-oriented learning, and personality development that helped me create a fulfilling career.",
        name: "Krishna Soni",
        role:
            "BBA · Assistant Manager, ICICI Bank",
    },

    {
        text:
            "JG provided me with incredible knowledge, discipline, and opportunities to discover my individuality and professional potential.",
        name: "Aayushi Gor",
        role:
            "BBA · HR Trainer, Godrej & Boyce Manufacturing Pvt. Ltd",
    },

    {
        text:
            "The faculty challenged us to think critically, communicate effectively, and work collaboratively — skills that continue to help me in my professional life.",
        name: "Shrushti Raval",
        role:
            "BBA · Recruitment Consultant, United HR Solutions Pvt. Ltd",
    },

    {
        text:
            "The BBA programme at JG provided me with a strong foundation in business principles and experiential learning through internships and real-world projects.",
        name: "Parth Prajapati",
        role:
            "BBA · Sr. Business Development Manager, KGL India Shipping Line",
    },

    {
        text:
            "The relationship between faculty members and students was extremely supportive and helped me grow both professionally and personally.",
        name: "Chintan Vyas",
        role:
            "B.Com · Manager, Nexa",
    },

    {
        text:
            "JG inspired me to pursue entrepreneurship through innovation, mentorship, and practical exposure that helped me expand my business successfully.",
        name: "Stavan Doshi",
        role:
            "B.Com · Owner, The Golden Time",
    },

    {
        text:
            "The university’s use of modern technology, innovative teaching methods, and focus on self-development created an exceptional learning environment.",
        name: "Shayon Chakraborty",
        role:
            "B.Com · Vice President & Regional Manager, Future Generali India Life Insurance",
    },
];


const Testimonials = () => {
    const [i, setI] = useState(0);
    const next = () => setI((current) => (current + 1) % quotes.length);
    const prev = () => setI((current) => (current - 1 + quotes.length) % quotes.length);
    const q = quotes[i];

    return (
        <section className="bg-muted/40 py-24 md:py-32">
            <div className="container-edge">
                <SectionHeading
                    eyebrow="Testimonials"
                    title="What our community says."
                    align="center"
                />
                <div className="relative mx-auto mt-14 max-w-4xl">
                    {/* <Quote className="absolute -top-6 left-0 h-16 w-16 text-gold/30 md:-top-10 md:-left-6 md:h-24 md:w-24" /> */}
                    <AnimatePresence mode="wait">
                        <motion.blockquote
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                            className="relative pt-6 md:pt-0"
                        >
                            <p className="font-display text-2xl font-medium leading-[1.3] tracking-tight md:text-4xl text-balance">
                                &ldquo;{q.text}&rdquo;
                            </p>
                            <footer className="mt-10 flex items-center justify-between border-t border-border/60 pt-6">
                                <div>
                                    <div className="font-display text-lg">{q.name}</div>
                                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{q.role}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={prev} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-foreground hover:text-background">
                                        <ArrowLeft className="h-4 w-4" />
                                    </button>
                                    <button onClick={next} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-foreground hover:text-background">
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </footer>
                        </motion.blockquote>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}




export default Testimonials;
