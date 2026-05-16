import { Reveal } from "./Reveal";

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}: {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}) {
    const a = align === "center" ? "text-center mx-auto" : "";
    return (
        <Reveal className={`max-w-2xl ${a}`}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl text-balance">
                {title}
            </h2>
            {description && (
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg text-balance">
                    {description}
                </p>
            )}
        </Reveal>
    );
}
