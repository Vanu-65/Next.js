import { AnimatedReveal } from "@/components/AnimatedReveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  className = "",
}: SectionIntroProps) {
  return (
    <AnimatedReveal className={`max-w-3xl space-y-4 ${className}`.trim()}>
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-text-soft md:text-lg">
        {description}
      </p>
    </AnimatedReveal>
  );
}
