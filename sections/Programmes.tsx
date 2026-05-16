"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Briefcase, Beaker, Palette, Scale, GraduationCap } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

const schools = [
    { id: "management", label: "School of Management", icon: Briefcase },
    { id: "sias", label: "Investigative & Applied Sciences", icon: Beaker },
    { id: "engineering", label: "School of Engineering", icon: Cpu },
    { id: "commerce", label: "School of Commerce", icon: GraduationCap },
    { id: "computing", label: "School of Computing", icon: Cpu },
    { id: "law", label: "School of Law", icon: Scale },
    { id: "science", label: "Science & Technology", icon: Beaker },
    { id: "research", label: "Research & Innovation", icon: GraduationCap },
    { id: "design", label: "School of Design", icon: Palette },
    { id: "emerging", label: "Emerging Technology", icon: Cpu },
    { id: "aviation", label: "Aviation & Hospitality", icon: Briefcase },
];

type Programme = {
    title: string;
    degree: string;
    duration: string;
    desc: string;
};

const data: Record<string, Programme[]> = {
    management: [
        {
            title: "BBA (Hons)",
            degree: "Bachelor of Business Administration",
            duration: "4 Years - 8 Semesters",
            desc: "Industry-focused business education with leadership training.",
        },
        {
            title: "iMBA",
            degree: "Integrated BBA + MBA",
            duration: "5 Years - 10 Semesters",
            desc: "Integrated management programme with global exposure.",
        },
        {
            title: "MBA",
            degree: "Master of Business Administration",
            duration: "2 Years - 4 Semesters",
            desc: "Advanced business strategy, finance, and leadership.",
        },
    ],
    sias: [
        {
            title: "iM.Sc. - Forensic Science",
            degree: "Integrated B.Sc. + M.Sc.",
            duration: "5 Years - 10 Semesters",
            desc: "Advanced forensic science and criminal investigation studies.",
        },
        {
            title: "M.Sc. - Cyber Security & Digital Forensics",
            degree: "Master of Science",
            duration: "2 Years - 4 Semesters",
            desc: "Cyber crime investigation and digital evidence analysis.",
        },
    ],
    engineering: [
        {
            title: "B.Tech - CSE",
            degree: "Bachelor of Technology",
            duration: "4 Years - 8 Semesters",
            desc: "Core computer science with modern software technologies.",
        },
        {
            title: "B.Tech - AI & ML",
            degree: "Bachelor of Technology",
            duration: "4 Years - 8 Semesters",
            desc: "Artificial Intelligence and Machine Learning specialization.",
        },
        {
            title: "B.Tech - CSE - Big Data Analytics",
            degree: "Bachelor of Technology",
            duration: "4 Years - 8 Semesters",
            desc: "Data engineering and analytics-focused programme.",
        },
    ],
    commerce: [
        {
            title: "B.Com (Hons)",
            degree: "Bachelor of Commerce",
            duration: "4 Years - 8 Semesters",
            desc: "Modern commerce education with accounting expertise.",
        },
        {
            title: "B.Com (Hons) with ACCA",
            degree: "Bachelor of Commerce",
            duration: "4 Years - 8 Semesters",
            desc: "ACCA-integrated global accounting curriculum.",
        },
        {
            title: "M.Com (Hons)",
            degree: "International Accounting & Taxation",
            duration: "2 Years - 4 Semesters",
            desc: "Advanced taxation and international finance studies.",
        },
    ],
    computing: [
        {
            title: "BCA (Hons)",
            degree: "Bachelor of Computer Applications",
            duration: "4 Years - 8 Semesters",
            desc: "Software development and application programming.",
        },
        {
            title: "iMCA",
            degree: "Integrated BCA + MCA",
            duration: "5 Years - 10 Semesters",
            desc: "Integrated computing and software engineering programme.",
        },
        {
            title: "MCA - AI & Full Stack Development",
            degree: "Master of Computer Applications",
            duration: "2 Years - 4 Semesters",
            desc: "Full stack development with AI integration.",
        },
    ],
    law: [
        {
            title: "LL.B.",
            degree: "Bachelor of Legislative Law",
            duration: "3 Years - 6 Semesters",
            desc: "Comprehensive legal education with practical training.",
        },
        {
            title: "LL.M.",
            degree: "Master of Legislative Law",
            duration: "2 Years - 4 Semesters",
            desc: "Advanced legal studies and specialization.",
        },
    ],
    science: [
        {
            title: "iMSc (IT-Specialization)",
            degree: "Integrated BSc + MSc",
            duration: "5 Years - 10 Semesters",
            desc: "Integrated IT specialization programme.",
        },
        {
            title: "MSc (IT-Specialization)",
            degree: "Master of Science",
            duration: "2 Years - 4 Semesters",
            desc: "Advanced information technology specialization.",
        },
    ],
    research: [
        {
            title: "Ph.D - Commerce",
            degree: "Doctoral Programme",
            duration: "3-5 Years",
            desc: "Research in commerce and financial systems.",
        },
        {
            title: "Ph.D - Computing",
            degree: "Doctoral Programme",
            duration: "3-5 Years",
            desc: "Advanced computing and AI research.",
        },
    ],
    design: [
        {
            title: "B.Design - UI/UX",
            degree: "Bachelor of Design",
            duration: "3 Years - 6 Semesters",
            desc: "User experience and interface design specialization.",
        },
        {
            title: "B.Design - Game Design",
            degree: "Bachelor of Design",
            duration: "4 Years - 8 Semesters",
            desc: "Game design, storytelling, and interactive experiences.",
        },
    ],
    emerging: [
        {
            title: "Metaverse",
            degree: "Emerging Technology Programme",
            duration: "Certification",
            desc: "Immersive digital ecosystem and virtual reality learning.",
        },
        {
            title: "Blockchain",
            degree: "Emerging Technology Programme",
            duration: "Certification",
            desc: "Decentralized applications and blockchain systems.",
        },
        {
            title: "Cyber Security",
            degree: "Emerging Technology Programme",
            duration: "Certification",
            desc: "Network security and ethical hacking fundamentals.",
        },
    ],
    aviation: [
        {
            title: "Integrated BBA + MBA",
            degree: "Aviation, Hospitality & Travel Management",
            duration: "5 Years - 10 Semesters",
            desc: "Integrated aviation and hospitality management programme.",
        },
        {
            title: "Masters in Aviation, Hospitality & Travel Management",
            degree: "Master's Programme",
            duration: "2 Years - 4 Semesters",
            desc: "Advanced aviation and tourism management studies.",
        },
    ],
};

export function Programmes() {
    const [active, setActive] = useState("management");

    return (
        <section id="programmes" className="relative py-24 md:py-32">
            <div className="container-edge">
                <SectionHeading
                    eyebrow="Programmes"
                    title="An academic catalogue built for ambitious minds."
                    description="Eleven schools and pathways designed to connect rigorous academics with real-world opportunity."
                />

                <div className="mt-12 -mx-6 overflow-x-auto px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0">
                    <div className="flex min-w-max gap-2 pb-2 md:flex-wrap md:pb-0">
                        {schools.map((school) => {
                            const isActive = active === school.id;
                            return (
                                <button
                                    key={school.id}
                                    onClick={() => setActive(school.id)}
                                    className={`relative inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-all md:text-sm ${isActive
                                        ? "border-primary/25 bg-primary/5 text-foreground shadow-elegant"
                                        : "border-border/70 bg-card text-muted-foreground hover:border-primary/20 hover:text-foreground"
                                        }`}
                                >
                                    <span className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${isActive ? "bg-primary text-primary-foreground" : "bg-muted text-primary"}`}>
                                        <school.icon className="h-3.5 w-3.5" />
                                    </span>
                                    {school.label}

                                    {isActive && (
                                        <motion.div layoutId="prog-indicator" className="absolute inset-0 rounded-full ring-1 ring-primary/20" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                        className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {data[active].map((programme) => (
                            <a
                                key={programme.title}
                                href="#admissions"
                                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card p-5 shadow-elegant transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-premium"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-crimson opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
                                <div className="flex items-center justify-between gap-3">
                                    <span className="rounded-full bg-primary/8 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                                        {programme.degree}
                                    </span>
                                    <span className="text-xs text-muted-foreground">{programme.duration}</span>
                                </div>
                                <h3 className="mt-4 font-display text-xl leading-tight tracking-tight md:text-[1.35rem]">{programme.title}</h3>
                                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{programme.desc}</p>
                                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                                    <span className="text-xs text-muted-foreground">
                                        {schools.find((school) => school.id === active)?.label}
                                    </span>
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
