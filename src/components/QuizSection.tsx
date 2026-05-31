import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const steps = [
  {
    id: "type",
    question: "Что вы ищете?",
    options: [
      { value: "studio", label: "Студия", icon: "Home" },
      { value: "1k", label: "1-комнатная", icon: "BedSingle" },
      { value: "2k", label: "2-комнатная", icon: "BedDouble" },
      { value: "3k+", label: "3+ комнаты", icon: "Building2" },
    ],
  },
  {
    id: "budget",
    question: "Ваш бюджет?",
    options: [
      { value: "5-8", label: "5–8 млн ₽", icon: "Banknote" },
      { value: "8-15", label: "8–15 млн ₽", icon: "Wallet" },
      { value: "15-25", label: "15–25 млн ₽", icon: "TrendingUp" },
      { value: "25+", label: "от 25 млн ₽", icon: "Star" },
    ],
  },
  {
    id: "area",
    question: "Предпочтительный район?",
    options: [
      { value: "center", label: "Центр Москвы", icon: "MapPin" },
      { value: "north", label: "Север / Северо-Запад", icon: "Navigation" },
      { value: "south", label: "Юг / Юго-Восток", icon: "Compass" },
      { value: "any", label: "Любой район", icon: "Map" },
    ],
  },
  {
    id: "timing",
    question: "Когда планируете покупку?",
    options: [
      { value: "now", label: "В ближайший месяц", icon: "Zap" },
      { value: "3m", label: "В течение 3 месяцев", icon: "Calendar" },
      { value: "6m", label: "Через полгода", icon: "Clock" },
      { value: "later", label: "Пока изучаю", icon: "Search" },
    ],
  },
]

export default function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const step = steps[currentStep]
  const isLast = currentStep === steps.length - 1
  const isDone = currentStep === steps.length

  const selectOption = (value: string) => {
    setAnswers((prev) => ({ ...prev, [step.id]: value }))
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
    }, 300)
  }

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 11)
    if (!digits) return ""
    let formatted = "+7"
    if (digits.length > 1) formatted += " (" + digits.slice(1, 4)
    if (digits.length > 4) formatted += ") " + digits.slice(4, 7)
    if (digits.length > 7) formatted += "-" + digits.slice(7, 9)
    if (digits.length > 9) formatted += "-" + digits.slice(9, 11)
    return formatted
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1400)
  }

  return (
    <section id="quiz" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2 mb-6">
            <Icon name="Sliders" size={14} className="text-amber-600" />
            <span className="text-amber-700 text-sm font-semibold tracking-widest uppercase">Умный подбор</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            ПОДБЕРЁМ
            <br />
            <span className="text-amber-500">ИДЕАЛЬНУЮ</span> КВАРТИРУ
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Ответьте на 4 вопроса — и мы подготовим персональную подборку за 15 минут
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          {!isDone && (
            <div className="mb-10">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Шаг {Math.min(currentStep + 1, steps.length)} из {steps.length}</span>
                <span>{Math.round((currentStep / steps.length) * 100)}%</span>
              </div>
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-amber-500 rounded-full"
                  animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {!isDone ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8">
                  {step.question}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {step.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => selectOption(opt.value)}
                      className={`group relative flex flex-col items-center gap-3 p-6 border-2 rounded-2xl transition-all duration-300 hover:border-amber-400 hover:bg-amber-50 hover:scale-105 ${
                        answers[step.id] === opt.value
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="w-12 h-12 bg-amber-100 group-hover:bg-amber-200 rounded-full flex items-center justify-center transition-colors">
                        <Icon name={opt.icon} size={24} className="text-amber-600" />
                      </div>
                      <span className="font-bold text-gray-900 text-center leading-tight">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : !submitted ? (
              <motion.div
                key="phone"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircle" size={40} className="text-amber-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                  Отлично! Подборка готова
                </h3>
                <p className="text-gray-500 mb-8 text-base">
                  Укажите номер телефона — менеджер свяжется и покажет лучшие варианты под ваш запрос
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    required
                    className="flex-1 border-2 border-gray-200 focus:border-amber-400 rounded-full px-6 py-4 text-gray-900 placeholder-gray-400 focus:outline-none transition-colors text-base"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-black font-bold rounded-full px-10 py-4 transition-all hover:scale-105 whitespace-nowrap"
                  >
                    {loading ? <Icon name="Loader" size={18} className="animate-spin" /> : "Получить подборку"}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="PartyPopper" size={44} className="text-amber-500" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-3">Ваша заявка принята!</h3>
                <p className="text-gray-500 text-lg">Менеджер Wellside перезвонит в течение 15 минут с персональной подборкой</p>
              </motion.div>
            )}
          </AnimatePresence>

          {!isDone && currentStep > 0 && (
            <button
              onClick={() => setCurrentStep((p) => p - 1)}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors mt-8 mx-auto"
            >
              <Icon name="ChevronLeft" size={16} />
              <span className="text-sm">Назад</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}