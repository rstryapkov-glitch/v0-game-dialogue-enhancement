export type Slide = {
  id: number
  image: string
  alt: string
  /** Heading shown only on the cover */
  title?: string
  /** Small kicker / step label above the speech bubble */
  kicker?: string
  /** Text inside the floating speech bubble */
  bubble: string
  /** Caption inside the bottom dialog panel */
  caption: string
  /** Label for the "next" button */
  nextLabel: string
  /** Horizontal placement of the speech bubble */
  bubbleSide: "left" | "right"
}

export const slides: Slide[] = [
  {
    id: 1,
    image: "/scenes/scene-1.png",
    alt: "Картонный Роман в берете машет рукой на фоне уютного городка",
    title: "Небольшое приключение",
    bubble: "Бонжур, Алёна!",
    caption: "Открой картонную книгу...",
    nextLabel: "Открыть",
    bubbleSide: "left",
  },
  {
    id: 2,
    image: "/scenes/scene-2.png",
    alt: "Картонный Роман показывает рукой в парке с солнцем, птичками и велосипедистом",
    kicker: "Страница первая",
    bubble: "Лично мне не хватило прогулки в зоопарк, потому приглашаю тебя ещё кое-куда",
    caption: "листай дальше",
    nextLabel: "Дальше",
    bubbleSide: "left",
  },
  {
    id: 3,
    image: "/scenes/scene-3.png",
    alt: "Картонный Роман держит руль на картинг-трассе с клетчатым флагом",
    kicker: "Идея №1 — картинг",
    bubble: "Я уверен, у тебя неплохо получится водить!!",
    caption: "Сначала немного адреналина",
    nextLabel: "Дальше",
    bubbleSide: "left",
  },
  {
    id: 4,
    image: "/scenes/scene-4.png",
    alt: "Картонный Роман с чашкой матча-латте в уютном кафе с кофе и круассанами",
    kicker: "Идея №2 — кофе с круассаном",
    bubble: "Может быть, попробуем Раф или Матчу, хах",
    caption: "А потом — тёплое кафе",
    nextLabel: "Дальше",
    bubbleSide: "left",
  },
  {
    id: 5,
    image: "/scenes/scene-5.png",
    alt: "Картонный Роман держит карточку рядом с большим календарём",
    kicker: "Осталось выбрать день",
    bubble: "Я отметил денёк в календаре — посмотри!",
    caption: "Наша дата уже ждёт",
    nextLabel: "Дальше",
    bubbleSide: "left",
  },
  {
    id: 6,
    image: "/scenes/scene-6.png",
    alt: "Картонный Роман радостно поднял руки на праздничном фоне с конфетти",
    kicker: "Это всё",
    bubble: "Свои идеи и пожелания ты можешь написать мне — сама знаешь куда",
    caption: "Конец книги, но не приключения",
    nextLabel: "Дальше",
    bubbleSide: "left",
  },
]

/** The proposed date shown on slide 5. Tweak freely. */
export const dateInfo = {
  day: "Сб",
  date: "14",
  month: "Июня",
  time: "16:00",
}
