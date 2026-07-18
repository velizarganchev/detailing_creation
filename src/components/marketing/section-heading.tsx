import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p
        className={cn(
          "mb-4 text-xs font-semibold uppercase tracking-[0.2em]",
          light ? "text-[#d59b65]" : "text-[#9a5f31]",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-7 sm:text-lg",
            light ? "text-white/60" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
