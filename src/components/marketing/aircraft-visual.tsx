import type { Dictionary } from "@/i18n/dictionaries";

export function AircraftVisual({
  copy,
}: {
  copy: Dictionary["aircraftVisual"];
}) {
  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-xl border border-white/12 bg-[#0b202d] sm:min-h-[500px]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-x-8 top-8 flex justify-between text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white/35">
        <span>{copy.analysis}</span>
        <span>DC / 001</span>
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 520 620"
        className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 text-[#c8dce4]"
      >
        <defs>
          <linearGradient id="aircraft-fill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.7" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M260 42c-14 0-23 42-26 104l-4 96-170 72v35l168-33 7 151-55 52v28l80-24 80 24v-28l-55-52 7-151 168 33v-35l-170-72-4-96C283 84 274 42 260 42Z"
          fill="url(#aircraft-fill)"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M260 60v457M229 242l31 20 31-20" fill="none" stroke="currentColor" strokeOpacity="0.45" />
        <circle cx="260" cy="262" r="132" fill="none" stroke="#c88b54" strokeDasharray="4 12" strokeOpacity="0.75" />
        <circle cx="260" cy="262" r="155" fill="none" stroke="currentColor" strokeOpacity="0.12" />
      </svg>
      <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between border-t border-white/12 pt-5">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-white/35">
            {copy.focus}
          </p>
          <p className="mt-1 text-sm font-medium text-white/82">
            {copy.details}
          </p>
        </div>
        <span className="size-2 rounded-full bg-[#d59b65] shadow-[0_0_18px_4px_rgba(213,155,101,0.45)]" />
      </div>
    </div>
  );
}
