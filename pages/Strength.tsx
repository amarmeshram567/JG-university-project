import { BriefcaseBusiness, Brain, GraduationCap, Sparkles } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const strengths = [
    {
        icon: Sparkles,
        title: "Interdisciplinary Approach",
        label: "Opportunities",
        desc: "Students from a wide range of backgrounds connect, ideate and solve problems with different conceptual structures and methods of understanding.",
    },
    {
        icon: GraduationCap,
        title: "Immersive & Experiential Learning",
        label: "Hands-on Learning",
        desc: "Exposure to real-life projects to develop practical understanding, confidence, and hands-on expertise.",
    },
    {
        icon: Brain,
        title: "Whole Brain Learning Pedagogy",
        label: "Pedagogy",
        desc: "Pedagogy that empowers learners to acquire future-proof technical skills while shaping them into creative thinkers.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Faculty from Academia & Industry",
        label: "Mentorship",
        desc: "Inspiration from dynamic scholars and professionals with deep academic knowledge and real-world experience.",
    },
];

const Strength = () => {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 gradient-mesh opacity-70" />
            <div className="container-edge relative">
                <div className="grid gap-12 lg:grid-cols-[0.95fr_1.45fr] lg:items-start">
                    <SectionHeading
                        eyebrow="Our Strengths"
                        title="A learning ecosystem designed for capable, future-ready minds."
                        description="Built around collaboration, practice, and purposeful mentorship, these strengths shape the way students grow at JG University."
                    />

                    <Stagger className="grid gap-5 sm:grid-cols-2">
                        {strengths.map((strength) => (
                            <StaggerItem key={strength.title}>
                                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/95 p-7 shadow-elegant transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-premium">
                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-crimson opacity-80" />
                                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                                    <Reveal className="relative">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-all duration-500 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                                                <strength.icon className="h-6 w-6" />
                                            </div>
                                            <span className="rounded-full border border-primary/15 bg-primary/6 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
                                                {strength.label}
                                            </span>
                                        </div>

                                        <h3 className="mt-6 font-display text-2xl leading-tight tracking-tight text-foreground">
                                            {strength.title}
                                        </h3>
                                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                                            {strength.desc}
                                        </p>

                                        <div className="mt-8 flex items-center gap-3">
                                            <div className="h-px flex-1 bg-border/80 transition-colors duration-500 group-hover:bg-primary/35" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-gold transition-transform duration-500 group-hover:scale-125" />
                                        </div>
                                    </Reveal>
                                </article>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </div>
        </section>
    );
};

export default Strength;
