"use client"

const PIECES = Array.from({ length: 70 })
const COLORS = [
  "var(--primary)",
  "var(--accent)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

export function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PIECES.map((_, i) => {
        const left = (i * 37) % 100
        const delay = (i % 10) * 0.35
        const duration = 3.5 + ((i * 7) % 30) / 10
        const size = 8 + (i % 4) * 3
        const color = COLORS[i % COLORS.length]
        const isRound = i % 3 === 0
        return (
          <span
            key={i}
            className="absolute top-0 block"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${isRound ? size : size * 1.6}px`,
              backgroundColor: color,
              borderRadius: isRound ? "9999px" : "2px",
              animation: `confetti-fall ${duration}s linear ${delay}s infinite`,
            }}
          />
        )
      })}
    </div>
  )
}
