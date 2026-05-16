"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const cols = [
    { title: "Academics", links: ["Schools", "Programmes", "Faculty", "Research", "Library", "Academic calendar"] },
    { title: "Admissions", links: ["Apply", "Scholarships", "Financial aid", "International students", "Visit campus", "Counsellors"] },
    { title: "Campus Life", links: ["Residential colleges", "Sports & athletics", "Clubs & societies", "Dining", "Health & wellness", "Career services"] },
    { title: "Institute", links: ["About", "Leadership", "Accreditation", "Newsroom", "Annual report", "Contact"] },
];

const socialIcons = [
    { icon: faXTwitter, label: "X" },
    { icon: faInstagram, label: "Instagram" },
    { icon: faLinkedinIn, label: "LinkedIn" },
    { icon: faYoutube, label: "YouTube" },
    { icon: faFacebookF, label: "Facebook" },
];

const Footer = () => {
    return (
        <footer className="bg-ink text-white">
            <div className="container-edge py-20">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                                <span className="font-display text-lg font-semibold">JG</span>
                            </div>
                            <div>
                                <div className="font-display text-xl">JG University</div>
                                <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">ASIA Campus, Gujarat, India.</div>
                            </div>
                        </div>
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
                            An independent, residential research university committed to the liberal arts and the
                            sciences in equal measure.
                        </p>

                        <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-sm">
                            <label className="text-xs uppercase tracking-[0.18em] text-white/60">Subscribe to The Aurelian</label>
                            <div className="mt-3 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-5">
                                <input
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="flex h-9 w-10 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-105"
                                >
                                    <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 space-y-2 text-sm text-white/70">
                            <p className="flex items-start gap-3"><FontAwesomeIcon icon={faLocationDot} className="mt-0.5 h-4 w-4 text-gold" /> ASIA Campus, Drive In Rd, Thaltej, Ahmedabad-380054, Gujarat, India.</p>
                            <p className="flex items-center gap-3"><FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-gold" /> +91 7567 7567 58/59</p>
                            <p className="flex items-center gap-3"><FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-gold" /> admission@jguni.in</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {cols.map((c) => (
                            <div key={c.title}>
                                <h4 className="text-xs uppercase tracking-[0.18em] text-white/60">{c.title}</h4>
                                <ul className="mt-5 space-y-3">
                                    {c.links.map((l) => (
                                        <li key={l}><a href="#" className="text-sm text-white/85 transition-colors hover:text-gold">{l}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
                    <p className="text-xs text-white/50">
                        Copyright 2026 JG University. NAAC A++ - NIRF Top 25 - UGC recognised.
                    </p>
                    <div className="flex items-center gap-2">
                        {socialIcons.map(({ icon, label }) => (
                            <a key={label} href="#" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white hover:text-ink duration-200">
                                <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                    <div className="flex gap-6 text-xs text-white/50">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
