"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

// June 2026: 1st is a Monday. Weeks start on Monday.
const MONTH_LABEL = "Июнь"
const WEEKDAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
const DAYS_IN_MONTH = 30
const FIRST_WEEKDAY_OFFSET = 0 // Monday

export function DateCard() {
  const [selected, setSelected] = useState<number | null>(null)

  const cells: (number | null)[] = [
    ...Array.from({ length: FIRST_WEEKDAY_OFFSET }, () => null),
    ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1),
  ]

  return (
    <div className="animate-pop-in relative w-full max-w-[17.5rem] select-none [animation-delay:0.25s]">
      {/* cardboard backing */}
      <div className="absolute inset-0 translate-x-1.5 translate-y-2 rounded-2xl bg-border/70" />

      <div className="relative overflow-hidden rounded-2xl border-[3px] border-border bg-card shadow-[0_8px_0_0_rgba(0,0,0,0.06)]">
        {/* header */}
        <div className="flex items-center justify-center gap-2 border-b-[3px] border-border bg-primary py-2 text-primary-foreground">
          <span className="h-2 w-2 rounded-full bg-primary-foreground/70" />
          <span className="text-sm font-extrabold uppercase tracking-wide">
            {MONTH_LABEL} 2026
          </span>
          <span className="h-2 w-2 rounded-full bg-primary-foreground/70" />
        </div>

        <div className="px-2.5 py-2">
          {/* weekday row */}
          <div className="mb-1 grid grid-cols-7 gap-1">
            {WEEKDAYS.map((w) => (
              <span
                key={w}
                className="text-center text-xs font-bold uppercase text-muted-foreground"
              >
                {w}
              </span>
            ))}
          </div>

          {/* day grid */}
          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (day === null) return <span key={`e-${i}`} />
              const isSelected = selected === day
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelected(day)}
                  aria-pressed={isSelected}
                  aria-label={`Выбрать ${day} июня`}
                  className={cn(
                    "flex aspect-square items-center justify-center rounded-md border-2 text-sm font-bold transition-all",
                    isSelected
                      ? "scale-105 border-border bg-primary text-primary-foreground shadow-[0_3px_0_0] shadow-border"
                      : "border-transparent text-foreground hover:border-border hover:bg-secondary",
                  )}
                >
                  {day}
                </button>
              )
            })}
          </div>
        </div>

        {/* footer confirmation */}
        <div className="border-t-[3px] border-border bg-secondary/60 px-3 py-2 text-center">
          {selected ? (
            <p className="flex items-center justify-center gap-1.5 text-sm font-extrabold text-primary">
              <Check className="h-4 w-4" />
              {`Отлично — ${selected} июня!`}
            </p>
          ) : (
            <p className="text-sm font-bold text-muted-foreground">
              Нажми на свой день
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
