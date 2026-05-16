import { Reveal } from "@/components/Reveal";
import { ArrowRight, CalendarDays, Download, Phone } from "lucide-react";

const AdmissionCTA = () => {
    return (
        <section id="admissions" className="relative overflow-hidden py-24 md:py-32">
            <div className="container-edge">
                <Reveal>
                    <div className="relative isolate overflow-hidden rounded-3xl border border-border/70 bg-ink px-8 py-16 text-white shadow-premium md:px-16 md:py-24">
                        <div className="absolute inset-0 grain opacity-30" />
                        <div
                            className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
                            style={{ background: "radial-gradient(circle, var(--crimson), transparent 70%)" }}
                        />
                        <div
                            className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
                            style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
                        />

                        <div className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
                            <div>
                                <p className="eyebrow text-gold">Admissions 2026-27</p>
                                <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl text-balance">
                                    Your application begins a conversation that may last a lifetime.
                                </h2>
                                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                                    Applications for the 2026 cohort close on 28 July. Need-based scholarships
                                    cover up to 100% of tuition for qualifying admits.
                                </p>

                                <div className="mt-10 flex flex-wrap items-center gap-4">
                                    <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-gold">
                                        Apply now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                    <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10">
                                        <Download className="h-4 w-4" /> Download brochure
                                    </a>
                                </div>
                            </div>

                            <div className="grid gap-3">
                                {[
                                    { icon: CalendarDays, t: "Application Deadline", d: "28 July 2026" },
                                    { icon: Download, t: "Scholarship Coverage", d: "Up to 100% of tuition" },
                                    { icon: Phone, t: "Speak with a Counsellor", d: "+91 7567 7567 58/59" },
                                ].map(x => (
                                    <div key={x.t} className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                                            <x.icon className="h-5 w-5 text-gold" />
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-[0.18em] text-white/60">{x.t}</div>
                                            <div className="mt-0.5 font-display text-lg">{x.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}


export default AdmissionCTA;
