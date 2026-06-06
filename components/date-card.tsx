import { dateInfo } from "@/lib/slides"

export function DateCard() {
  return (
    <div className="animate-pop-in relative w-[10.5rem] select-none [animation-delay:0.35s]">
      {/* cardboard backing */}
      <div className="absolute inset-0 translate-x-1.5 translate-y-2 rounded-2xl bg-border/70" />

      <div className="relative overflow-hidden rounded-2xl border-[3px] border-border bg-card shadow-[0_8px_0_0_rgba(0,0,0,0.06)]">
        {/* header */}
        <div className="flex items-center justify-center gap-2 border-b-[3px] border-border bg-primary py-2 text-primary-foreground">
          <span className="h-2 w-2 rounded-full bg-primary-foreground/70" />
          <span className="text-sm font-extrabold uppercase tracking-wide">
            {dateInfo.month}
          </span>
          <span className="h-2 w-2 rounded-full bg-primary-foreground/70" />
        </div>

        {/* big day */}
        <div className="px-4 py-3 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            {dateInfo.day}
          </p>
          <p className="font-heading text-6xl leading-none text-primary">
            {dateInfo.date}
          </p>
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border-2 border-border bg-secondary px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-sm font-bold text-secondary-foreground">
              {dateInfo.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
