import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export default function CatalogForm() {
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
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

  return (
    <section id="catalog" className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2 mb-8">
              <Icon name="BookOpen" size={14} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Каталог новостроек</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              ПОЛУЧИТЕ КАТАЛОГ
              <br />
              <span className="text-amber-400">120+ НОВОСТРОЕК</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Оставьте номер телефона — мы пришлём подборку актуальных новостроек Москвы с ценами и планировками. Бесплатно и без обязательств.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  required
                  className="flex-1 bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors text-base"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/60 text-black font-bold rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm"
                >
                  {loading ? (
                    <Icon name="Loader" size={18} className="animate-spin" />
                  ) : (
                    <>
                      <Icon name="Send" size={16} />
                      Получить каталог
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-8"
              >
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={32} className="text-amber-400" />
                </div>
                <p className="text-white text-xl font-bold">Отлично! Перезвоним в течение 15 минут</p>
                <p className="text-gray-400 text-sm">Наш менеджер уже готовит подборку для вас</p>
              </motion.div>
            )}

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-500 text-xs">
              <span className="flex items-center gap-1"><Icon name="Lock" size={12} /> Конфиденциальность гарантирована</span>
              <span className="flex items-center gap-1"><Icon name="Clock" size={12} /> Ответ за 15 минут</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
