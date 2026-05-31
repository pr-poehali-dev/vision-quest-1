import HeroSection from "@/components/HeroSection"
import CatalogForm from "@/components/CatalogForm"
import QuizSection from "@/components/QuizSection"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import Icon from "@/components/ui/icon"

export default function Index() {
  const approachCards = [
    {
      icon: "Building2",
      title: "Лучшие застройщики",
      text: "Работаем только с проверенными застройщиками города, отбирая жилые комплексы с прозрачными условиями.",
    },
    {
      icon: "TrendingUp",
      title: "Знаем рынок изнутри",
      text: "Наши эксперты находят скрытые выгодные лоты и подбирают оптимальные ипотечные программы под каждого клиента.",
    },
    {
      icon: "Shield",
      title: "Юридическая защита",
      text: "Полное юридическое сопровождение сделки — без скрытых комиссий и неприятных сюрпризов.",
    },
    {
      icon: "Key",
      title: "От звонка до ключей",
      text: "Сопровождаем на каждом этапе: от первой консультации до получения ключей — без стресса.",
    },
  ]

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
      <section id="mission" className="relative py-24 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2 mb-8"
            >
              <span className="text-amber-700 text-sm font-semibold tracking-widest uppercase">О нас</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-wider text-gray-900"
            >
              НАШ ПОДХОД
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {approachCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Icon name={card.icon} size={26} className="text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </motion.div>
            ))}
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

      {/* River View Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Animated side accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/50 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
                <Icon name="Waves" size={14} className="text-amber-400" />
                <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">Премиум-локация</span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                КВАРТИРА<br />
                <span className="text-amber-400">С ВИДОМ</span> НА<br />
                МОСКВУ-РЕКУ
              </h2>

              <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto">
                Просыпаться с панорамным видом на воду — это не роскошь, а стиль жизни. Мы знаем каждый ЖК с видом на реку и подберём лучший вариант под ваш бюджет.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10 text-white/80 text-sm">
                <span className="flex items-center gap-2"><Icon name="CheckCircle" size={16} className="text-amber-400" /> Набережная Москвы-реки</span>
                <span className="flex items-center gap-2"><Icon name="CheckCircle" size={16} className="text-amber-400" /> Панорамное остекление</span>
                <span className="flex items-center gap-2"><Icon name="CheckCircle" size={16} className="text-amber-400" /> Закрытая территория</span>
              </div>

              <a
                href="https://platform.wellside.ru/client_landing_form?item=387810597"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full px-10 py-4 transition-all duration-300 hover:scale-105 text-base"
              >
                <Icon name="Building2" size={18} />
                Выбрать квартиру
              </a>
            </motion.div>
          </div>
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