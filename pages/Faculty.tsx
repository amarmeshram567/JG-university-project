"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const faculty = [
    {
        name: "Dr. Namika Patel",
        field: "School of Management",
        credentials: "PhD in Business Administration - Strategic Leadership & Innovation",
    },
    {
        name: "Dr. Hitesh Harwani",
        field: "School of Management",
        credentials: "PhD in Management - Corporate Strategy & Entrepreneurship",
    },
    {
        name: "CA CPA Harshil Trivedi",
        field: "School of Commerce",
        credentials: "CA, CPA - International Finance & Accounting Expert",
    },
    {
        name: "Dr. Pratik Darji",
        field: "School of Management",
        credentials: "PhD in Management - Organizational Development Specialist",
    },
    {
        name: "Dr. Sanjay Christian",
        field: "School of Management",
        credentials: "PhD - Leadership, Human Resources & Business Analytics",
    },
    {
        name: "CA Parag Soni",
        field: "School of Commerce",
        credentials: "Chartered Accountant - Taxation & Financial Reporting",
    },
    {
        name: "Dr. Megha Bhatt",
        field: "School of Commerce",
        credentials: "PhD in Commerce - Banking & International Finance",
    },
    {
        name: "Prof. Dinesh Patel",
        field: "School of Commerce",
        credentials: "Senior Faculty - Accounting & Corporate Finance",
    },
    {
        name: "Dr. Aarti Shah",
        field: "School of Commerce",
        credentials: "PhD in Commerce - Auditing & Financial Management",
    },
    {
        name: "Dr. Delnaz Jokhi",
        field: "School of Commerce",
        credentials: "Research Scholar - Business Economics & Trade",
    },
    {
        name: "Prof. Vishwa Gandhi",
        field: "School of Commerce",
        credentials: "Faculty Expert - International Business & Taxation",
    },
    {
        name: "Dr. Vaibhav Shah",
        field: "Registrar (I/c) - School of Management",
        credentials: "Academic Administrator - Institutional Strategy & Governance",
    },
    {
        name: "Dr. Jigar Aggarwal",
        field: "School of Commerce",
        credentials: "PhD in Commerce - Financial Accounting & Auditing",
    },
    {
        name: "Dr. Urvi Gajjar",
        field: "School of Commerce",
        credentials: "Commerce Researcher - Business Law & Economics",
    },
    {
        name: "Dr. Vishwa Deuskar",
        field: "School of Commerce",
        credentials: "Finance & Commerce Specialist - Corporate Studies",
    },
    {
        name: "Dr. Minnie Mattheew",
        field: "School of Commerce",
        credentials: "PhD - International Trade & Business Research",
    },
    {
        name: "Dr. S Pushpalatha",
        field: "School of Computing",
        credentials: "PhD in Computer Science - AI & Data Analytics",
    },
    {
        name: "Dr. Mona Shah",
        field: "School of Computing",
        credentials: "Software Engineering & Cloud Computing Specialist",
    },
    {
        name: "Prof. Niku Brahmbhatt",
        field: "School of Computing",
        credentials: "Programming & Full Stack Development Expert",
    },
    {
        name: "Prof. Nirali Kansara",
        field: "School of Computing",
        credentials: "Cyber Security & Web Technologies Faculty",
    },
    {
        name: "Prof. Jaydeepsinh Rathod",
        field: "School of Computing",
        credentials: "Data Structures & Software Architecture Specialist",
    },
    {
        name: "Prof. Manali Jain",
        field: "School of Management",
        credentials: "Business Communication & Marketing Specialist",
    },
    {
        name: "Prof. Nilesh Taware",
        field: "School of Computing",
        credentials: "Machine Learning & Emerging Technologies Faculty",
    },
    {
        name: "Dr. Niki Sharma",
        field: "School of Management",
        credentials: "Human Resource Management & Organizational Behaviour",
    },
    {
        name: "Prof. Meenaxi Malla",
        field: "School of Computing",
        credentials: "UI/UX Design & Frontend Development Specialist",
    },
    {
        name: "Prof. Hetal Gadhavi",
        field: "University Librarian",
        credentials: "Knowledge Resource Management & Academic Research Support",
    },
    {
        name: "Prof. Janvi Solanki",
        field: "School of Computing",
        credentials: "Software Development & Database Systems Faculty",
    },
    {
        name: "Prof. Shreya Pota",
        field: "School of Computing",
        credentials: "Artificial Intelligence & Mobile Computing",
    },
    {
        name: "Prof. Shreyas Trivedi",
        field: "School of Computing",
        credentials: "Cloud Infrastructure & Backend Systems Specialist",
    },
    {
        name: "Prof. Afsar Mohammad",
        field: "School of Engineering",
        credentials: "Engineering Design & Industrial Systems Expert",
    },
    {
        name: "Prof. Jaini Shah",
        field: "School of Management",
        credentials: "Business Strategy & Entrepreneurship Faculty",
    },
    {
        name: "Prof. Kartik Mundra",
        field: "School of Management",
        credentials: "Finance & Investment Management Specialist",
    },
    {
        name: "Prof. Rajeshsingh Rajput",
        field: "School of Aviation & Hospitality",
        credentials: "Aviation Operations & Travel Management Expert",
    },
    {
        name: "Prof. Gaurav Brahmbhatt",
        field: "School of Aviation & Hospitality",
        credentials: "Hospitality Leadership & Tourism Specialist",
    },
    {
        name: "Prof. Purvi Panchal",
        field: "School of Aviation & Hospitality",
        credentials: "Customer Experience & Airline Service Management",
    },
    {
        name: "Prof. Rima Shah",
        field: "School of Aviation & Hospitality",
        credentials: "Hospitality Operations & Event Management",
    },
    {
        name: "Prof. Vikas Shukla",
        field: "School of Engineering",
        credentials: "Mechanical Engineering & Smart Manufacturing",
    },
    {
        name: "Prof. Sumit Bhat",
        field: "School of Engineering",
        credentials: "Computer Engineering & IoT Systems Specialist",
    },
    {
        name: "Prof. Jayesh Nair",
        field: "School of Aviation & Hospitality",
        credentials: "Travel & Tourism Industry Professional",
    },
    {
        name: "Prof. Divyesh Vala",
        field: "School of Aviation & Hospitality",
        credentials: "Airline Management & Hospitality Operations",
    },
    {
        name: "Prof. Mitali Shah",
        field: "School of Management",
        credentials: "Marketing Strategy & Consumer Behaviour Expert",
    },
];

const initials = (name: string) =>
    name
        .split(" ")
        .slice(-2)
        .map((part) => part[0])
        .join("");

const Faculty = () => {
    const railRef = useRef<HTMLDivElement | null>(null);

    const scrollRail = (direction: "prev" | "next") => {
        const rail = railRef.current;
        if (!rail) {
            return;
        }

        const amount = Math.round(rail.clientWidth * 0.82);
        rail.scrollBy({
            left: direction === "next" ? amount : -amount,
            behavior: "smooth",
        });
    };

    return (
        <section className="bg-muted/30 py-24 md:py-32">
            <div className="container-edge">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <SectionHeading
                        eyebrow="Faculty"
                        title="Scholars who shape their fields."
                        description="A faculty drawn across disciplines and professional practice, brought together to mentor ambitious students."
                    />
                    <div className="flex items-center gap-3">
                        <a href="#" className="text-sm font-medium text-primary link-underline">
                            Browse all {faculty.length}+ faculty -&gt;
                        </a>
                        <div className="hidden items-center gap-2 md:flex">
                            <button
                                type="button"
                                onClick={() => scrollRail("prev")}
                                aria-label="Previous faculty"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card text-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                onClick={() => scrollRail("next")}
                                aria-label="Next faculty"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card text-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <Reveal className="mt-14">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-muted/90 to-transparent md:block" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-muted/90 to-transparent md:block" />

                        <div
                            ref={railRef}
                            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {faculty.map((member) => (
                                <article
                                    key={member.name}
                                    className="group min-w-[280px] snap-start rounded-2xl border border-border/70 bg-card p-6 shadow-elegant transition-all hover:-translate-y-1 duration-300 hover:border-primary/30 hover:bg-card/60 hover:shadow-premium sm:min-w-[320px] lg:min-w-[calc((100%-2.5rem)/3)] xl:min-w-[calc((100%-3.75rem)/4)]"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 font-display text-lg text-primary-foreground shadow-elegant">
                                        {initials(member.name)}
                                    </div>
                                    <h3 className="mt-5 font-display text-lg leading-snug tracking-tight">{member.name}</h3>
                                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary">{member.field}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.credentials}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Faculty;
