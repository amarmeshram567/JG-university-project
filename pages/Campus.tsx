import { Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import Image from "next/image";


// const lib = "https://images.pexels.com/photos/30484322/pexels-photo-30484322.jpeg";
// const lab = "https://images.pexels.com/photos/30349990/pexels-photo-30349990.jpeg"
// const grad = "https://images.pexels.com/photos/27945942/pexels-photo-27945942.jpeg"
// const lect = "https://images.pexels.com/photos/8199168/pexels-photo-8199168.jpeg"
// const campus = "https://images.pexels.com/photos/8811593/pexels-photo-8811593.jpeg"



// const items = [
//     { src: lib, alt: "Historic university library", className: "row-span-2" },
//     { src: lab, alt: "Modern research laboratory", className: "" },
//     { src: grad, alt: "Graduation ceremony", className: "" },
//     { src: lect, alt: "Lecture amphitheater", className: "col-span-2" },
//     { src: campus, alt: "Aerial view of campus", className: "row-span-2 col-span-2" },
// ];

const lib =
    "https://images.pexels.com/photos/30484322/pexels-photo-30484322.jpeg";

const lab =
    "https://images.pexels.com/photos/30349990/pexels-photo-30349990.jpeg";

const grad =
    "https://images.pexels.com/photos/27945942/pexels-photo-27945942.jpeg";

const lect =
    "https://images.pexels.com/photos/8199168/pexels-photo-8199168.jpeg";

const campus =
    "https://images.pexels.com/photos/8811593/pexels-photo-8811593.jpeg";

const students =
    "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg";

const innovation =
    "https://images.pexels.com/photos/19895722/pexels-photo-19895722.jpeg";


const items = [
    {
        src: lib,
        alt: "Historic university library",
        className: "row-span-2",
    },

    {
        src: lab,
        alt: "Modern research laboratory",
        className: "",
    },

    {
        src: grad,
        alt: "Graduation ceremony",
        className: "",
    },

    {
        src: lect,
        alt: "Lecture amphitheater",
        className: "col-span-2",
    },

    {
        src: campus,
        alt: "Aerial view of campus",
        className: "row-span-2 col-span-2",
    },

    // NEW ITEMS

    {
        src: students,
        alt: "Students collaborating on campus",
        className: "",
    },

    {
        src: innovation,
        alt: "Innovation and technology lab",
        className: "col-span-2",
    }
];



const Campus = () => {


    return (
        <section id="campus" className="py-24 md:py-32">
            <div className="container-edge">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <SectionHeading
                        eyebrow="Campus"
                        title="Two hundred and forty acres, one century of memory."
                        description="From the great library to the modern research quarter, our campus is built to be lived in."
                    />
                    <a
                        href="#"
                        className="text-sm font-medium text-primary link-underline"
                    >Take a virtual tour →</a>
                </div>

                <Stagger className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
                    {items.map((it) => (
                        <StaggerItem key={it.alt} className={`${it.className} group relative overflow-hidden rounded-xl bg-muted hover-zoom`}>
                            <Image
                                src={it.src}
                                alt={it.alt}
                                fill
                                loading="eager"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm font-medium">{it.alt}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}

export default Campus;
