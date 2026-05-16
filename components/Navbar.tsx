"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown, GraduationCap, Beaker, Cpu, Briefcase, Palette, Scale } from "lucide-react";



const programmes = [
    {
        icon: Briefcase,
        title: "Undergraduate Programmes",
        items: [
            "BBA | BBA (Hons)",
            "Integrated BBA + MBA",
            "Integrated BBA + MBA - Global Business",
            "B.Com | B.Com (Hons)",
            "BCA | BCA (Hons)",
            "B.Tech Programs",
            "LL.B.",
        ],
    },
    {
        icon: GraduationCap,
        title: "Postgraduate Programmes",
        items: [
            "MBA",
            "MCA",
            "LL.M.",
            "MSc",
            "Masters in International Trade & Finance",
        ],
    },
    {
        icon: Cpu,
        title: "Technology & Computing",
        items: [
            "MCA - AI / Full Stack Development",
            "Integrated BSc + MSc (IT)",
            "Integrated BCA + MCA",
            "Computing",
        ],
    },
    {
        icon: Beaker,
        title: "Science Programmes",
        items: [
            "Biotech",
            "Physics",
            "Mathematics",
            "Forensic Science",
            "MSc (IT-Specialization)",
        ],
    },
    {
        icon: Palette,
        title: "Liberal Arts & Design",
        items: [
            "Humanities",
            "Media",
            "Design",
            "Interdisciplinary",
        ],
    },
    {
        icon: Scale,
        title: "Law & Research",
        items: [
            "BA LLB",
            "LL.B.",
            "LL.M.",
            "Law",
            "Ph.D Programmes",
        ],
    },
];

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Admissions", href: "#admissions" },
    { label: "Research", href: "#research" },
    { label: "Campus", href: "#campus" },
];

const mediaLinks = [
    { label: "News", href: "#news" },
    { label: "Student Activities", href: "#student-activities" },
    { label: "Blogs", href: "#blogs" },
    { label: "Initiatives by JGUNI", href: "#initiatives" },
    { label: "Awards and Recognition", href: "#awards" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [mega, setMega] = useState(false);
    const [mediaOpen, setMediaOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-border/60" : "bg-transparent"}`}
        >
            <div className="container-edge flex h-16 items-center justify-between md:h-20">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground shadow-elegant">
                        <span className="font-display text-lg font-semibold">JG</span>
                    </div>
                    <div className="leading-tight">
                        <div className={`font-display text-lg font-semibold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
                            JG University
                        </div>
                        <div className={`text-[10px] uppercase tracking-[0.22em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                            Gujarat, India.
                        </div>
                    </div>
                </Link>

                <nav className="hidden items-center gap-1 lg:flex">
                    <div
                        className="relative"
                        onMouseEnter={() => setMega(true)}
                        onMouseLeave={() => setMega(false)}
                    >
                        <button
                            onClick={() => setMega((value) => !value)}
                            className={`group link-underline flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white"}`}
                        >
                            Programmes

                        </button>

                        <AnimatePresence>
                            {mega && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                                    className="absolute left-0 top-full z-50 hidden w-[920px] max-w-[calc(100vw-4rem)] pt-3 lg:block"
                                >
                                    <div className="rounded-2xl border border-border/70 bg-card p-8 shadow-premium">
                                        <div className="mb-6 flex items-end justify-between">
                                            <div>
                                                <p className="eyebrow">Faculties & Departments</p>
                                                <h3 className="mt-2 font-display text-2xl">Choose your path</h3>
                                            </div>
                                            <a href="#programmes" className="link-underline text-sm font-medium text-primary">
                                                Explore all programmes -&gt;
                                            </a>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
                                            {programmes.map((programme) => (
                                                <a
                                                    key={programme.title}
                                                    href="#programmes"
                                                    className="group rounded-xl border border-border/60 bg-background/70 p-4 transition-colors hover:bg-muted/60"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                                                            <programme.icon className="h-5 w-5" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <div className="text-sm font-semibold text-foreground">{programme.title}</div>
                                                            <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-muted-foreground">
                                                                {programme.items.slice(0, 4).map((item) => (
                                                                    <li key={item}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`link-underline px-4 py-2 text-sm font-medium ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white"}`}
                        >
                            {link.label}
                        </a>
                    ))}

                    <div
                        className="relative"
                        onMouseEnter={() => setMediaOpen(true)}
                        onMouseLeave={() => setMediaOpen(false)}
                    >
                        <button
                            onClick={() => setMediaOpen((value) => !value)}
                            className={`group link-underline flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white"}`}
                        >
                            Media

                        </button>

                        <AnimatePresence>
                            {mediaOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
                                    className="absolute left-0 top-full z-50 hidden min-w-[280px] pt-3 lg:block"
                                >
                                    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card p-3 shadow-premium">
                                        {mediaLinks.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-muted/60 hover:text-foreground"
                                            >
                                                <span>{item.label}</span>
                                                <ChevronDown className="-rotate-90 h-3.5 w-3.5 text-primary/70" />
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        className={`hidden h-9 w-9 items-center justify-center rounded-full transition-colors md:flex ${scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"}`}
                        aria-label="Search"
                    >
                        <Search className="h-4 w-4" />
                    </button>
                    <a
                        href="#admissions"
                        className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-crimson transition-all hover:-translate-y-0.5 hover:shadow-premium md:inline-flex"
                    >
                        Apply now
                    </a>
                    <button
                        onClick={() => setOpen(true)}
                        className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"}`}
                        aria-label="Menu"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 lg:hidden"
                    >
                        <div className="absolute inset-0 bg-ink/60" onClick={() => setOpen(false)} />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 240 }}
                            className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-background p-6 shadow-premium"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-display text-lg">Menu</span>
                                <button onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-muted">
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="mt-8 space-y-1">
                                <details className="group rounded-lg">
                                    <summary className="flex cursor-pointer items-center justify-between py-3 text-base font-medium">
                                        Programmes <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="space-y-3 pb-3 pl-1">
                                        {programmes.map((programme) => (
                                            <a key={programme.title} href="#programmes" className="block py-2">
                                                <div className="text-sm font-medium text-foreground">{programme.title}</div>
                                                <div className="mt-1 text-xs text-muted-foreground">
                                                    {programme.items.slice(0, 2).join(" • ")}
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </details>

                                <details className="group rounded-lg border-t border-border/60">
                                    <summary className="flex cursor-pointer items-center justify-between py-3 text-base font-medium">
                                        Media <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="space-y-1 pb-3 pl-1">
                                        {mediaLinks.map((item) => (
                                            <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </details>

                                {navLinks.map((link) => (
                                    <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="block border-t border-border/60 py-3 text-base font-medium">
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            <a href="#admissions" onClick={() => setOpen(false)} className="mt-8 flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
                                Apply now
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
