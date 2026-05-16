"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import Image from "next/image";

const img1 = "https://images.pexels.com/photos/13794140/pexels-photo-13794140.jpeg";
const img2 = "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg";

const leaders = [
    {
        name: "M.P Chandran",
        role: "President, JG University",
        img: img1,
        quote: "Education must empower students with innovation, leadership, and the confidence to shape the future.",
        desc: "M.P Chandran is a postgraduate in management with more than 30 years of experience in senior and board-level positions in public and private sectors in India and abroad. He serves as the Chairperson of the Education Task Force, Gujarat Chamber of Commerce and Industry, and is also the Chairman of ASIA Charitable Trust (ACT), which manages multiple schools, colleges, and JG University.",
        message: "Knowledge is the power that no one can take away from you. The education system of today needs to be upgraded to impart knowledge that is not only cognitive but also experiential so as to help students shape their future, with their ability to match employment/self-employment requirements. Education must focus on nurturing the youth with the capabilities to acquire knowledge and skills that will help them learn and become eminent practitioners. JG University empowers its students not to restrict themselves rather explore and gain wisdom beyond the pages of books. University's pedagogy is designed to match the everyday challenges and at the same time bring out the academic brilliance of knowledge seekers. All the best!",
    },
    {
        name: "Dr. CA Achyut Dani",
        role: "Director-General & Provost, JG University",
        img: img2,
        quote: "True academic excellence is achieved when knowledge, research, and industry collaborate together.",
        desc: "Dr. CA Achyut Dani has over 21 years of experience across academics and industry. A doctorate holder in management and commerce, he has served as mentor, faculty, researcher, and governing council member for multiple national and international institutions. He has authored numerous textbooks and received prestigious recognitions including the Bharat Jyoti Award and Brilliance in Education Award.",
        message: "Excellence is a matter of choice. If we choose to be excellent, we will be for sure. JG University aims to bring excellence in everything that it does, be it for students, faculty, staff, parents or any of its stakeholders. We stand by the idea of knowledge beyond books and provide students a real-life experience with an industry-relevant curriculum. The University desires to strike an equilibrium between state-of-the-art infrastructure and high-quality education that is recognised globally. We have a focused and dedicated environment that ensures a successful future for our students. Our commitment towards our students is reflected in the resources we bring to them and the mentorship we provide them at every stage to become global change leaders with appropriate skills and values.",
    },
];

const Leaders = () => {
    const [openLeader, setOpenLeader] = useState<(typeof leaders)[number] | null>(null);

    return (
        <section className="py-24 md:py-32">
            <div className="container-edge">
                <SectionHeading
                    eyebrow="Leadership"
                    title="Stewards of an institution."
                    description="Our leadership team brings together decades of academic distinction and institutional vision."
                />

                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {leaders.map((leader, index) => {
                        return (
                            <Reveal key={leader.name} delay={index * 0.1}>
                                <article className="group relative overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-elegant transition-all duration-500 hover:-translate-y-1 hover:shadow-premium">
                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-crimson opacity-80" />
                                    <div className="relative overflow-hidden">
                                        <div className="hover-zoom absolute inset-0">
                                            <Image
                                                src={leader.img}
                                                alt={leader.name}
                                                fill
                                                loading="eager"
                                                sizes="(min-width: 1024px) 42vw, 100vw"
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-transparent md:from-ink/95" />
                                        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-6">
                                            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                                                Leadership
                                            </span>
                                            <Quote className="h-7 w-7 text-gold/80 md:h-8 md:w-8" />
                                        </div>

                                        <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-8">
                                            <p className="text-xs uppercase tracking-[0.22em] text-gold/90">{leader.role}</p>
                                            <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight md:mt-3 md:text-[2.4rem]">
                                                {leader.name}
                                            </h3>
                                            <p className="mt-3 max-w-xl font-display text-lg italic leading-snug text-white/95 md:mt-4 md:text-2xl">
                                                &ldquo;{leader.quote}&rdquo;
                                            </p>
                                        </div>
                                        <div className="relative aspect-[4/5] min-h-[420px] sm:min-h-[500px] md:min-h-[560px]" />
                                    </div>

                                    <div className="border-t border-border/70 bg-card p-5 md:hidden">
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {leader.desc}
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => setOpenLeader(leader)}
                                            className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/25 hover:text-primary"
                                        >
                                            Read message
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>

                                    <div className="hidden items-center justify-between gap-4 border-t border-white/15 p-6 md:flex">
                                        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                                            {leader.desc}
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => setOpenLeader(leader)}
                                            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/25 hover:text-primary"
                                        >
                                            Read message
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                        </button>
                                    </div>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>

                <AnimatePresence>
                    {openLeader && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/65 p-3 md:p-4 backdrop-blur-[3px]"
                            onClick={() => setOpenLeader(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                                transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-border/70 bg-card shadow-premium md:rounded-[2rem]"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-crimson opacity-80" />

                                <button
                                    type="button"
                                    onClick={() => setOpenLeader(null)}
                                    aria-label="Close leader message"
                                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/90 text-muted-foreground shadow-elegant transition-colors hover:text-foreground"
                                >
                                    <X className="h-4 w-4" />
                                </button>

                                <div className="grid max-h-[85vh] overflow-y-auto md:grid-cols-[0.8fr_1.2fr] md:overflow-hidden">
                                    <div className="relative min-h-[240px] overflow-hidden sm:min-h-[280px] md:min-h-[100%]">
                                        <Image
                                            src={openLeader.img}
                                            alt={openLeader.name}
                                            fill
                                            sizes="(min-width: 768px) 30vw, 100vw"
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                                        <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                                            <p className="text-xs uppercase tracking-[0.22em] text-gold/90">{openLeader.role}</p>
                                            <h3 className="mt-2 font-display text-2xl tracking-tight md:text-3xl">{openLeader.name}</h3>
                                        </div>
                                    </div>

                                    <div className="p-5 md:p-8">
                                        <div className="flex items-center justify-between gap-4">
                                            <p className="text-xs uppercase tracking-[0.22em] text-primary">Leader&apos;s Message</p>
                                            <ArrowUpRight className="h-4 w-4 text-primary" />
                                        </div>
                                        <p className="mt-4 font-display text-lg italic leading-snug text-foreground md:mt-5 md:text-xl">
                                            &ldquo;{openLeader.quote}&rdquo;
                                        </p>
                                        <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:mt-6 md:text-[15px]">
                                            {openLeader.message}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Leaders;
