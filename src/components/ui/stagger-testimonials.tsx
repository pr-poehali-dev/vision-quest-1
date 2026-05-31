import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Wellside Properties — отзывы клиентов
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Wellside помогли нам купить квартиру в ЖК Садовые кварталы на 8% дешевле рыночной цены. Менеджер был на связи 24/7 и провёл через всё оформление за 10 дней. Просто волшебно!",
    by: "Сергей Иванов, купил 3-комнатную на Хамовниках",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SergeyIvanov&backgroundColor=b45309&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Искала квартиру полгода сама — безрезультатно. За неделю работы с Wellside нашла идеальный вариант в бюджете. Честные менеджеры, никаких скрытых комиссий. Рекомендую всем!",
    by: "Марина Петрова, купила студию в Хорошёво",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaPetrova&backgroundColor=92400e&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Переехали в Москву из Екатеринбурга. Wellside провели нас через всё дистанционно — от выбора до подписания. Получили ключи не выезжая из города. Это просто невероятный сервис.",
    by: "Семья Козловых, купили 2-комнатную в Сити",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnnaKozlova&backgroundColor=d97706&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Менеджер Wellside помог оформить льготную ипотеку под 6,5% — я даже не знал, что имею на неё право. Сэкономил на платежах больше 2 млн рублей за весь срок. Спасибо огромное!",
    by: "Дмитрий Смирнов, ипотека на квартиру в Митино",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitrySmirnov&backgroundColor=78350f&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Покупала квартиру как инвестицию. Wellside предложили объект, который вырос в цене на 23% за год. Профессиональный анализ рынка и честная оценка — именно то, что нужно серьёзному инвестору.",
    by: "Елена Новикова, инвестор в недвижимость",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaNovikova&backgroundColor=a16207&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Работаю в нескольких агентствах, но Wellside — особые. Они реально болеют за клиента, а не за комиссию. Нашли нам квартиру с видом на Москву-реку за ту же цену, что были студии у других.",
    by: "Алексей Морозов, купил пентхаус в Раменках",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexeyMorozov&backgroundColor=b45309&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Сначала боялась — первая крупная покупка в жизни. Менеджер Wellside объяснил каждый шаг, помог с юридической проверкой. Чувствовала себя под защитой на протяжении всей сделки.",
    by: "Айгуль Рахимова, первая квартира в Москве",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AigulRahimova&backgroundColor=92400e&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Wellside нашли квартиру в ЖК, о котором я не знала. Старт продаж был закрытым, но они провели меня как партнёры. Купила по цене котлована — сейчас цена на 40% выше. Гений!",
    by: "Ольга Ким, инвестиционная квартира в Новой Москве",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaKim&backgroundColor=d97706&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Продали старую квартиру и сразу купили новую — Wellside организовали обе сделки параллельно. Ни дня без жилья, идеальная логистика. Это требует огромного мастерства.",
    by: "Наталья Соколова, альтернативная сделка в Хамовниках",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NataliyaSokolova&backgroundColor=78350f&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Пять лет откладывал покупку — казалось, это сложно. Wellside провели меня через квиз, нашли три идеальных варианта и помогли выбрать лучший. Теперь живу в своей квартире мечты!",
    by: "Михаил Волков, купил квартиру в ЖК Foriver",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MikhailVolkov&backgroundColor=a16207&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Wellside помогли с семейной ипотекой, субсидиями и маткапиталом — использовали все возможности. В итоге взяли квартиру, которую без них не могли бы себе позволить. Благодарны бесконечно.",
    by: "Семья Родригес, трёхкомнатная в Зеленограде",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SofiaRodriguez&backgroundColor=b45309&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Квалифицированная юридическая проверка Wellside спасла от покупки квартиры с обременением. Другие агентства не заметили — эти нашли проблему за час. Теперь доверяю только им.",
    by: "Тимур Асланов, безопасная сделка в Москве",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TimurAslanov&backgroundColor=92400e&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "Купила квартиру на стадии котлована. Wellside сопроводили до сдачи объекта — 2 года на связи, отслеживали строительство, помогли с приёмкой. Сервис на всю жизнь, а не только до сделки.",
    by: "Нина Павлова, ДДУ в ЖК Скандинавия",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NinaPavlova&backgroundColor=d97706&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Как предприниматель, ценю время. Wellside подготовили всё за меня: 3 варианта с аналитикой, юридическую экспертизу, ипотечный расчёт. Я приехал только на подписание. Идеально.",
    by: "Роман Ким, деловой центр Москвы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RomanKim&backgroundColor=78350f&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Думала, что с моим бюджетом в Москве ничего не найти. Wellside показали 8 отличных вариантов в трёх районах — выбрала квартиру с террасой. Иногда нужен профессионал, чтобы увидеть возможности.",
    by: "Екатерина Орлова, квартира с террасой в Щукино",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EkaterinaOrlova&backgroundColor=a16207&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}