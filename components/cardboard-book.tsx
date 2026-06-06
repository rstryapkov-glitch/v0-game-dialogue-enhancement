"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, RotateCcw, Heart } from "lucide-react"
import { slides } from "@/lib/slides"
import { cn } from "@/lib/utils"
import { SpeechBubble } from "@/components/speech-bubble"
import { DateCard } from "@/components/date-card"
import { Confetti } from "@/components/confetti"

export function CardboardBook() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]
  const isFirst = index === 0
  const isLast = index === slides.length - 1

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(i + 1, slides.length - 1))
  }, [])
  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0))
  }, [])
  const restart = useCallback(() => setIndex(0), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [goNext, goPrev])

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-background">
      {/* ---- Scene background ---- */}
      <div key={slide.id} className="absolute inset-0">
        <Image
          src={slide.image || "/placeholder.svg"}
          alt={slide.alt}
          fill
          priority
          sizes="100vw"
          className="animate-pop-in object-cover"
        />
        {/* soft readability veil from the bottom and top */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-transparent to-background/35" />
      </div>

      {isLast && <Confetti />}

      {/* ---- Progress dots ---- */}
      <div className="absolute left-1/2 top-5 z-30 flex -translate-x-1/2 items-center gap-2.5">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "h-3 w-3 rounded-full border-2 border-border transition-all",
              i === index ? "scale-125 bg-primary" : "bg-card hover:bg-secondary",
            )}
          />
        ))}
      </div>

      {/* ---- Cover title ---- */}
      {isFirst && (
        <h1 className="animate-pop-in absolute left-1/2 top-[12%] z-20 w-[94%] -translate-x-1/2 text-center font-heading text-6xl leading-[1.05] text-primary drop-shadow-[0_2px_0_rgba(255,255,255,0.6)] sm:text-8xl text-balance">
          {slide.title}
        </h1>
      )}

      {/* ---- Floating content (bubble + extras) sits above the dialog panel ---- */}
      <div className="absolute inset-x-0 bottom-[12.5rem] z-20 flex flex-col items-start gap-4 px-5 sm:bottom-44 sm:px-10">
        {slide.kicker && (
          <span className="animate-pop-in inline-flex items-center gap-2 rounded-full border-2 border-border bg-card/90 px-5 py-2 font-heading text-2xl text-primary shadow-sm backdrop-blur-sm">
            {slide.kicker}
          </span>
        )}

        <div className="flex w-full items-end justify-between gap-4">
          <SpeechBubble text={slide.bubble} side={slide.bubbleSide} />
        </div>

        {/* interactive calendar — she picks the date herself */}
        {index === 4 && <DateCard />}
      </div>

      {/* ---- Bottom dialog panel ---- */}
      <div className="absolute inset-x-0 bottom-0 z-30 px-3 pb-4 sm:px-6 sm:pb-6">
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute inset-0 translate-y-2 rounded-[1.75rem] bg-border/70" />
          <div
            className="relative rounded-[1.75rem] border-[3px] border-border bg-card/95 px-5 py-5 shadow-[0_10px_0_0_rgba(0,0,0,0.06)] backdrop-blur-sm sm:px-8"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          >
            <p className="mb-4 text-center font-heading text-3xl text-foreground sm:text-4xl text-pretty">
              {slide.caption}
            </p>

            {isLast ? (
              <div className="flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-2 rounded-2xl border-[3px] border-border bg-primary px-7 py-3 text-base font-extrabold text-primary-foreground shadow-[0_5px_0_0] shadow-border transition-transform active:translate-y-0.5 active:shadow-[0_2px_0_0] active:shadow-border"
                >
                  <RotateCcw className="h-5 w-5" />
                  Перелистать заново
                </button>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                  Сделано с
                  <Heart className="h-4 w-4 fill-primary text-primary" />
                  для Алёны
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={isFirst}
                  className="inline-flex items-center gap-2 rounded-2xl border-[3px] border-border bg-secondary px-5 py-3 text-base font-bold text-secondary-foreground transition-all disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="hidden sm:inline">Назад</span>
                </button>

                <span className="font-heading text-2xl text-muted-foreground">
                  {index + 1} / {slides.length}
                </span>

                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center gap-2 rounded-2xl border-[3px] border-border bg-primary px-6 py-3 text-base font-extrabold text-primary-foreground shadow-[0_5px_0_0] shadow-border transition-transform active:translate-y-0.5 active:shadow-[0_2px_0_0] active:shadow-border"
                >
                  {slide.nextLabel}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
