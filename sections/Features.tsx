import {
    BadgeCheck,
    BriefcaseBusiness,
    Building2,
    Clock3,
    FileCheck2,
    Globe2,
    Lightbulb,
    Users2,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const features = [
    {
        icon: BadgeCheck,
        title: "NEP 2020 & UGC Compliant Programmes",
        desc: "Programmes are aligned with the National Education Policy 2020 and UGC expectations for flexible, future-ready higher education.",
    },
    {
        icon: Users2,
        title: "Faculty with Industry and Academic Expertise",
        desc: "Students learn from faculty members who combine strong academic grounding with practical industry experience.",
    },
    {
        icon: Globe2,
        title: "Foreign University Collaborations",
        desc: "Curriculum delivery, academic exchange, and student exposure are enriched through partnerships with international universities.",
    },
    {
        icon: Lightbulb,
        title: "Hands-on Industry Use-Cases and Emerging Tech",
        desc: "Learning is shaped through applied problem-solving, industry scenarios, and exposure to evolving technologies.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Full Pay On-The-Job Training Opportunities",
        desc: "Students gain professional confidence through structured paid training experiences connected to real workplace environments.",
    },
    {
        icon: Building2,
        title: "Cross-Cultural and Cross-Sectoral Internships",
        desc: "Internships open pathways across industries, sectors, and collaborative settings that broaden perspective and adaptability.",
    },
    {
        icon: FileCheck2,
        title: "Course-Embedded Capstone Projects",
        desc: "Capstone work is integrated into learning so students graduate with meaningful projects, not only classroom theory.",
    },
    {
        icon: Clock3,
        title: "24*7 Accessibility of Facilities",
        desc: "Students and faculty benefit from accessible spaces and learning infrastructure designed to support flexible schedules.",
    },
];

const Features = () => {
    return (
        <section className="bg-muted/30 py-24 md:py-32">
            <div className="container-edge">
                <div className="grid gap-12 lg:grid-cols-[0.95fr_1.35fr] lg:items-start">
                    <Reveal className="lg:sticky lg:top-28">
                        <SectionHeading
                            eyebrow="Salient Features"
                            title="JG University features designed for modern, career-ready education."
                            description="A future-focused academic environment that combines compliance, flexibility, global exposure, and practical learning."
                        />
                    </Reveal>

                    <Stagger className="grid gap-5 sm:grid-cols-2">
                        {features.map((feature, index) => (
                            <StaggerItem key={feature.title} className={index % 3 === 0 ? "sm:col-span-2" : ""}>
                                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-elegant transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-premium">
                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-crimson opacity-80" />
                                    <div className="absolute -right-8 top-0 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                                    <div className="relative">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                                                <feature.icon className="h-5 w-5" />
                                            </div>
                                            <div className="h-px flex-1 bg-border/80 transition-colors duration-500 group-hover:bg-primary/30" />
                                        </div>

                                        <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight text-foreground">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </article>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </div>
        </section>
    );
};

export default Features;
