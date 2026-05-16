const partners = [
    "Google", "McKinsey & Co.", "Goldman Sachs", "Microsoft", "Deloitte",
    "Tata Group", "Boston Consulting", "Pfizer", "Reliance", "JP Morgan",
    "Siemens", "Accenture", "Mahindra", "Apple",
];

export function Partners() {
    const loop = [...partners, ...partners];
    return (
        <section className="border-y border-border/60 bg-background py-16 md:py-20">
            <div className="container-edge">
                <p className="text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Where Aurelius graduates lead · Industry & academic partners
                </p>
                <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                    <div className="flex w-max gap-14 marquee">
                        {loop.map((p, i) => (
                            <div key={i} className="font-display text-2xl font-medium tracking-tight text-foreground/40 transition-colors hover:text-foreground md:text-3xl">
                                {p}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
