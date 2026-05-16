"use client"

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Image from "next/image";



const heroImg = "https://images.pexels.com/photos/19554793/pexels-photo-19554793.jpeg"

export function Hero() {
    return (
        <section className="relative isolate overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={heroImg}
                    alt="Aurelius University campus at golden hour"
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/85" />
                <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
                <div className="absolute inset-0 grain opacity-40" />
            </div>

            <div className="container-edge relative pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-52 lg:pb-40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/85 backdrop-blur">
                        <Sparkles className="h-3 w-3 text-gold" />
                        Admissions open · Cohort 2026
                    </div>

                    <h1 className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[88px] text-balance">
                        A university shaped for the next century of ideas.
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl text-balance">
                        For six decades, JG University has educated leaders in science, business, and the humanities — guided by inquiry, distinguished by craft.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a
                            href="#admissions"
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink shadow-premium transition-all hover:-translate-y-0.5 hover:bg-gold hover:shadow-crimson"
                        >
                            Begin your application
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <button className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                                <Play className="h-3 w-3 fill-white text-white" />
                            </span>
                            Take the campus tour
                        </button>
                    </div>
                </motion.div>

                {/* Floating stat tiles */}
                <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md md:mt-24 md:grid-cols-4">
                    {[
                        ["#14", "Globally Ranked"],
                        ["97%", "Placement Rate"],
                        ["1:9", "Faculty Ratio"],
                        ["68", "Country Partnerships"],
                    ].map(([n, l], i) => (
                        <motion.div
                            key={l}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.08, duration: 0.6 }}
                            className="bg-ink/40 p-6 md:p-8"
                        >
                            <div className="font-display text-3xl text-white md:text-4xl">{n}</div>
                            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{l}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Scroll</span>
                <div className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
            </div>
        </section>
    );
}
