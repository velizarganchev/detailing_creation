import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="relative grid size-9 place-items-center border border-current/35"
      >
        <span className="text-[0.62rem] font-bold tracking-[0.14em]">DC</span>
        <span className="absolute -right-1.5 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap text-[0.66rem] font-semibold uppercase tracking-[0.12em] sm:text-xs">
          Detailing Creation
        </span>
        <span className="mt-1 whitespace-nowrap text-[0.48rem] font-medium uppercase tracking-[0.24em] opacity-65 sm:text-[0.52rem]">
          Aircraft Detailing
        </span>
      </span>
    </span>
  );
}
