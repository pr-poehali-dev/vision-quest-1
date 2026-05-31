import HeroSection from "@/components/HeroSection"
import CatalogForm from "@/components/CatalogForm"
import QuizSection from "@/components/QuizSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "Wellside Properties — это не просто агентство. Это ваш надёжный проводник в мире московской недвижимости. Мы работаем с лучшими застройщиками города, отбирая только проверенные жилые комплексы с прозрачными условиями. Наши эксперты знают рынок изнутри: от скрытых выгодных лотов до оптимальных ипотечных программ. Мы сопровождаем каждого клиента от первой консультации до получения ключей — без стресса, без скрытых комиссий, с полной юридической защитой вашей сделки."

  const timelineEntries = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      alt: "Современный жилой комплекс в Москве",
      title: "Эксклюзивный доступ к новостройкам",
      description:
        "Мы — аккредитованные партнёры 50+ ведущих застройщиков Москвы. Это означает, что наши клиенты получают доступ к квартирам ещё до старта открытых продаж — по ценам ниже рыночных. Выбор квартиры до того, как её увидят другие.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      alt: "Юридическое сопровождение сделки с недвижимостью",
      title: "Полная юридическая защита",
      description:
        "Команда юристов Wellside проверяет каждый объект перед сделкой: историю застройщика, разрешительную документацию, репутацию проекта. Вы подписываете договор с абсолютной уверенностью в безопасности своих инвестиций.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560185008-a33f5c7b1844?w=800&q=80",
      alt: "Счастливая семья получает ключи от новой квартиры",
      title: "От звонка до ключей — мы рядом",
      description:
        "Персональный менеджер ведёт вас на каждом этапе: подбор, переговоры с застройщиком, оформление ипотеки, регистрация в Росреестре. Средний срок сделки с Wellside — 14 дней. Ваша мечта о собственном жилье ближе, чем кажется.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2 mb-8"
            >
              <span className="text-amber-700 text-sm font-semibold tracking-widest uppercase">О нас</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">НАШ ПОДХОД</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Advantages Timeline */}
      <section id="community" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">
                  ПОЧЕМУ <span className="text-amber-500">WELLSIDE</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                  Три причины, по которым нам доверяют тысячи московских семей
                </p>
              </motion.div>
            </div>
          </div>
          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Catalog Form */}
      <CatalogForm />

      {/* Testimonials */}
      <section id="testimonials" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Что говорят наши{" "}
              <span className="text-amber-500">КЛИЕНТЫ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные истории семей, которые нашли свою квартиру мечты с Wellside Properties.
            </p>
          </motion.div>
          <StaggerTestimonials />
        </div>
      </section>

      {/* Quiz */}
      <QuizSection />

      {/* Final CTA with parallax */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
          mobileImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}
