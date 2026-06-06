import { cn } from "@/lib/utils"

type SpeechBubbleProps = {
  text: string
  side?: "left" | "right"
  className?: string
}

export function SpeechBubble({ text, side = "left", className }: SpeechBubbleProps) {
  return (
    <div
      className={cn(
        "animate-bubble-in relative max-w-[min(82vw,30rem)] -rotate-[1.5deg]",
        className,
      )}
    >
      {/* cardboard pin tab */}
      <div className="absolute -top-4 left-8 z-10 flex h-8 w-12 items-center justify-center rounded-md border-2 border-border bg-secondary shadow-sm">
        <span className="h-3 w-3 rounded-full bg-muted-foreground/60" />
      </div>

      {/* layered cardboard backing */}
      <div className="absolute inset-0 translate-x-1.5 translate-y-2 rounded-[1.6rem] bg-border/70" />

      <div className="relative rounded-[1.6rem] border-[3px] border-border bg-card px-6 py-5 shadow-[0_8px_0_0_rgba(0,0,0,0.06)]">
        <p className="font-heading text-2xl leading-snug text-primary sm:text-3xl text-pretty">
          {text}
        </p>
        {/* tail */}
        <div
          className={cn(
            "absolute -bottom-3 h-6 w-6 rotate-45 border-b-[3px] border-r-[3px] border-border bg-card",
            side === "left" ? "left-10" : "right-10",
          )}
        />
      </div>
    </div>
  )
}
