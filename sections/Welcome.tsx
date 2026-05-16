import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const images = [
    {
        src: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg",
        alt: "Students collaborating in a university library",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        src: "https://images.pexels.com/photos/8197558/pexels-photo-8197558.jpeg",
        alt: "University students in a modern classroom",
        className: "",
    },
    {
        src: "https://images.pexels.com/photos/30562665/pexels-photo-30562665.jpeg",
        alt: "Graduates celebrating success together",
        className: "",
    },
];

const Welcome = () => {
    return (
        <section className="py-24 md:py-32">
            <div className="container-edge">
                <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                    <div>
                        <SectionHeading
                            eyebrow="Welcome"
                            title="Welcome to JG University, the best university in Ahmedabad."
                            description="JG University is a new-age, tech-driven university offering programmes that evolve with future industry demand, enabling students to move confidently into employment or self-employment."
                        />

                        <Reveal className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                            <p>
                                It is a UGC-approved university sponsored by the ASIA Charitable Trust, which has been in the field of education for over 25 years.
                            </p>
                            <p>
                                With a strong legacy of successfully managing 17 colleges and 3 schools, JG University combines academic depth, industry relevance, and future-ready learning in one ecosystem.
                            </p>
                        </Reveal>

                        <Reveal className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-elegant">
                                <div className="text-3xl font-display text-primary">25</div>
                                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">Years of Educational Excellence</p>
                            </div>
                            <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-elegant">
                                <div className="text-3xl font-display text-primary">17</div>
                                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">Colleges Managed</p>
                            </div>
                            <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-elegant">
                                <div className="text-3xl font-display text-primary">3</div>
                                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">Schools Managed</p>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal className="relative">
                        <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full bg-gold/20 blur-2xl md:block" />
                        <div className="absolute -right-8 bottom-10 hidden h-28 w-28 rounded-full bg-primary/15 blur-3xl md:block" />
                        <div className="grid auto-rows-[180px] gap-4 sm:grid-cols-2 md:auto-rows-[210px]">
                            {images.map((image) => (
                                <div
                                    key={image.alt}
                                    className={`${image.className} group relative overflow-hidden rounded-sm border border-border/70 bg-card shadow-elegant transition-all duration-500 hover:-translate-y-1 hover:shadow-premium`}
                                >
                                    <div className="hover-zoom absolute inset-0">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            loading="eager"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-white transition-all duration-500 group-hover:translate-y-0">
                                        <p className="text-sm font-medium tracking-wide">{image.alt}</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            Explore campus life
                                        </p>
                                    </div>
                                    <div className="absolute right-4 top-4 h-10 w-10 rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:rotate-12" />
                                    <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/20" />
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
