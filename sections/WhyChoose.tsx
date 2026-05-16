import { Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Award, Globe2, FlaskConical, Users, Building2, Sparkles } from "lucide-react";

const features = [
    { icon: Award, title: "Research Excellence", desc: "Endowed chairs, $42M annual research funding, and 12 centers of national importance." },
    { icon: Globe2, title: "Global Mobility", desc: "Semester exchanges and dual degrees with 68 partner institutions across 24 countries." },
    { icon: FlaskConical, title: "Innovation Labs", desc: "Wet labs, robotics studios, and a venture studio with $5M annual seed allocations." },
    { icon: Users, title: "Faculty Ratio 1:9", desc: "Tutorial-style instruction with 78% of faculty holding terminal degrees from top-tier institutions." },
    { icon: Building2, title: "Modern Campus", desc: "240 acres, LEED-Platinum buildings, and residential colleges modeled on Oxbridge tradition." },
    { icon: Sparkles, title: "Career Outcomes", desc: "97% placement within 6 months, with median offers at the 92nd percentile of national peers." },
];


export function WhyChoose() {
    return (
        <section id="about" className="relative bg-muted/40 py-24 md:py-32">
            <div className="absolute inset-0 gradient-mesh" />
            <div className="container-edge relative">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
                    <SectionHeading
                        eyebrow="Why JG University?"
                        title="An education uncompromising in scale, depth, and outcome."
                        description="We measure ourselves not by what we teach, but by who our students become."
                    />
                    <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-2">
                        {features.map(f => (
                            <StaggerItem key={f.title} className="group bg-card p-7 transition-colors hover:bg-card/60">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/8 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                                    <f.icon className="h-5 w-5" />
                                </div>
                                <h3 className="mt-5 font-display text-xl tracking-tight">{f.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </div>
        </section>
    );
}
