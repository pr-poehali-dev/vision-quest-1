import { LiquidButton } from "@/components/ui/liquid-glass-button"
import Icon from "@/components/ui/icon"
import { useState } from "react"
import { motion } from "framer-motion"

const LOGO_URL = "https://cdn.poehali.dev/projects/441fa92b-2ee5-4413-88b2-0fa66a51bc5a/bucket/2c646432-28a6-4887-8589-05d016c6239a.png"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80",
    alt: "Панорама Москвы — новостройки и элитная недвижимость",
  },
  {
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80",
    alt: "Современный жилой комплекс в Москве",
  },
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80",
    alt: "Интерьер современной квартиры в новостройке",
  },
]

const navItems = [
  { name: "О нас", href: "#mission" },
  { name: "Преимущества", href: "#community" },
  { name: "Отзывы", href: "#testimonials" },
  { name: "Каталог", href: "#catalog" },
  { name: "Подобрать", href: "#quiz" },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-5 md:px-10 md:py-7">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={LOGO_URL}
            alt="Wellside Properties"
            className="h-12 md:h-16 w-auto object-contain brightness-0 invert"
          />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white hover:text-amber-300 transition-colors duration-300 font-medium tracking-wide pb-1 group text-sm"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 ease-out group-hover:w-full" />
            </motion.button>
          ))}
        </div>

        {/* Phone CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden md:flex items-center gap-2 bg-amber-500/20 border border-amber-400/50 rounded-full px-4 py-2 text-white text-sm font-semibold backdrop-blur-sm"
        >
          <Icon name="Phone" size={14} />
          <span>Бесплатная консультация</span>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/95 z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <img src={LOGO_URL} alt="Wellside Properties" className="h-16 w-auto brightness-0 invert mb-4" />
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-2xl font-bold tracking-wider hover:text-amber-400 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/60 rounded-full px-5 py-2 mb-8 backdrop-blur-sm"
          >
            <Icon name="MapPin" size={14} className="text-amber-400" />
            <span className="text-amber-200 text-sm font-semibold tracking-widest uppercase">Москва · Премиальная недвижимость</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none"
          >
            НАЙДИТЕ
            <br />
            <span className="text-amber-400">ВАШУ</span>
            <br />
            КВАРТИРУ
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="text-lg md:text-xl font-light tracking-wide mb-10 text-gray-200 max-w-2xl mx-auto"
          >
            Лучшие новостройки Москвы с персональным подбором под ваш бюджет и предпочтения
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("#catalog")}
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 text-base whitespace-nowrap"
            >
              Получить каталог новостроек
            </button>
            <button
              onClick={() => scrollToSection("#quiz")}
              className="inline-flex items-center justify-center text-white border border-white/40 rounded-full px-8 py-4 hover:bg-white/10 transition-all duration-300 font-semibold text-base backdrop-blur-sm whitespace-nowrap"
            >
              Подобрать квартиру
            </button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-gray-300 text-xs font-semibold tracking-widest uppercase"
          >
            <span className="flex items-center gap-1"><Icon name="Shield" size={12} className="text-amber-400" /> 15 лет на рынке</span>
            <span className="flex items-center gap-1"><Icon name="Star" size={12} className="text-amber-400" /> 3 500+ сделок</span>
            <span className="flex items-center gap-1"><Icon name="Building2" size={12} className="text-amber-400" /> 120+ ЖК в базе</span>
          </motion.div>
        </div>
      </div>

      {/* Slider Nav */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4">
        <button onClick={prevSlide} className="text-white/70 hover:text-white transition-colors p-2" aria-label="Назад">
          <Icon name="ChevronLeft" size={24} />
        </button>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-amber-400" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="text-white/70 hover:text-white transition-colors p-2" aria-label="Вперёд">
          <Icon name="ChevronRight" size={24} />
        </button>
      </div>
    </div>
  )
}