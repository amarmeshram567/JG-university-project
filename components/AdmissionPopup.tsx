"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";

const DISMISS_KEY = "jg-admission-popup-dismissed";

const AdmissionPopup = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const dismissed = window.sessionStorage.getItem(DISMISS_KEY);
        if (dismissed === "true") {
            return;
        }

        const timer = window.setTimeout(() => setOpen(true), 900);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!open) {
            return;
        }

        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previous;
        };
    }, [open]);

    const closePopup = () => {
        window.sessionStorage.setItem(DISMISS_KEY, "true");
        setOpen(false);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/55 p-4 backdrop-blur-[2px]"
                    onClick={closePopup}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-[420px] overflow-hidden rounded-[1.75rem] border border-gold/30 bg-card text-card-foreground shadow-premium"
                    >
                        <button
                            type="button"
                            onClick={closePopup}
                            aria-label="Close admissions popup"
                            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/90 text-muted-foreground shadow-elegant transition-colors hover:text-foreground"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="bg-gradient-crimson px-6 pb-6 pt-7 text-center text-white sm:px-7 sm:pt-8">
                            <div className="mx-auto max-w-[320px]">
                                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/60">
                                    Admissions 2026-27
                                </div>
                                <div className="mt-4 font-display text-3xl font-semibold leading-none tracking-tight sm:text-[2.5rem] text-black/80">
                                    JG University
                                </div>
                                <div className="mt-2 text-xs font-medium uppercase tracking-[0.24em]  text-black/40">
                                    Excellence by Choice
                                </div>

                                <div className="mt-6 rounded-[1.5rem] border border-white/20 bg-parchment px-5 py-5 text-primary shadow-elegant">
                                    <div className="font-sans text-2xl font-black tracking-tight sm:text-3xl">
                                        Admissions Open
                                    </div>
                                    <div className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                                        2026-27
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                                        Applications are now open for undergraduate and postgraduate programmes.
                                    </p>
                                </div>

                                <div className="mt-5 flex flex-col items-center justify-center text-gold">
                                    <ChevronDown className="h-8 w-8" />
                                    <ChevronDown className="-mt-3 h-8 w-8" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-card px-5 py-5 sm:px-6">
                            <Link
                                href="#admissions"
                                onClick={closePopup}
                                className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-crimson transition-transform hover:-translate-y-0.5"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AdmissionPopup;
