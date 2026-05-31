import type * as React from "react"
import { useRef } from "react"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { MapPin, Users, Calendar, Trophy } from "lucide-react"

interface SmoothScrollHeroProps {
  scrollHeight?: number
  desktopImage: string
  mobileImage: string
  initialClipPercentage?: number
  finalClipPercentage?: number
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1875,
  desktopImage,
  mobileImage,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Clip path animation - image fully reveals by 70% scroll progress
  const clipStart = useTransform(scrollYProgress, [0, 0.7], [initialClipPercentage, 0])
  const clipEnd = useTransform(scrollYProgress, [0, 0.7], [finalClipPercentage, 100])
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`

  // Background size animation - completes when image is fully revealed
  const backgroundSize = useTransform(scrollYProgress, [0, 0.7], ["170%", "100%"])

  // Scale animation - completes when image is fully revealed
  const scale = useTransform(scrollYProgress, [0, 0.7], [1.2, 1])

  // CTA overlay animations - appears earlier and completes by 50%
  const ctaOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const ctaY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])

  return (
    <div ref={containerRef} style={{ height: `${scrollHeight}px` }} className="relative w-full">
      <motion.div
        className="sticky top-0 h-screen w-full bg-black overflow-hidden"
        style={{
          clipPath,
          willChange: "transform",
        }}
      >
        {/* Desktop background */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${desktopImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />
        {/* Mobile background */}
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${mobileImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />

        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CTA Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{
            opacity: ctaOpacity,
            y: ctaY,
          }}
        >
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            {/* Main CTA Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-6 leading-none">
              ВАША КВАРТИРА
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                В МОСКВЕ ЖДЁТ
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed font-medium">
              Доверьте поиск профессионалам. 15 лет опыта, 3 500+ довольных семей,
              <br className="hidden md:block" />
              и ваша сделка с полной юридической защитой.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-amber-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-300" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">3 500+</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">Сделок закрыто</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-amber-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-300" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">120+</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">ЖК в базе</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-amber-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-amber-300" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">15 лет</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">На рынке Москвы</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-amber-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-amber-300" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">98%</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">Довольных клиентов</div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://platform.wellside.ru/client_landing_form?item=387810597"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full px-10 py-4 transition-all duration-300 hover:scale-105 text-base"
            >
              Получить консультацию
            </a>

            {/* Trust Indicators */}
            <div className="mt-12 pt-6 border-t border-white/20">
              <p className="text-xs text-gray-400 mb-3 font-medium">НАМ ДОВЕРЯЮТ ТЫСЯЧИ МОСКОВСКИХ СЕМЕЙ</p>
              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-300">
                <span className="text-xs font-semibold">БЕЗ СКРЫТЫХ КОМИССИЙ</span>
                <span className="text-xs font-semibold">ЮРИДИЧЕСКАЯ ЗАЩИТА</span>
                <span className="text-xs font-semibold">АККРЕДИТОВАННЫЕ ПАРТНЁРЫ</span>
                <span className="text-xs font-semibold">МОСКВА</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SmoothScrollHero