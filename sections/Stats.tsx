"use client";


import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
    { value: 18000, label: "Students enrolled", suffix: "+" },
    { value: 312, label: "Distinguished faculty", suffix: "" },
    { value: 4200, label: "Research papers", suffix: "" },
    { value: 97, label: "Placement rate", suffix: "%" },
    { value: 68, label: "Global tie-ups", suffix: "" },
    { value: 240, label: "Acre campus", suffix: "" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [n, setN] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const start = performance.now();
        const dur = 1800;
        let raf = 0;
        const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, to]);

    return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

const Stats = () => {
    return (
        <section className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32">
            <div className="absolute inset-0 grain opacity-30" />
            <div
                className="absolute -left-32 top-0 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl float-soft"
                style={{ background: "radial-gradient(circle, var(--crimson), transparent 70%)" }}
            />
            <div
                className="absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl float-soft"
                style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
            />
            <div className="container-edge relative">
                <div className="max-w-2xl">
                    <p className="eyebrow text-gold">By the numbers</p>
                    <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl text-balance">
                        A record measured in scholarship and outcome.
                    </h2>
                </div>
                <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                    {stats.map(s => (
                        <div key={s.label} className="border-l border-white/15 pl-5">
                            <div className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                                <Counter to={s.value} suffix={s.suffix} />
                            </div>
                            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Stats;
