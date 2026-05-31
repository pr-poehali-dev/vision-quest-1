import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export default function CatalogForm() {
  return (
    <section id="catalog" className="relative py-24 bg-zinc-950 overflow-hidden">
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
              Актуальные новостройки Москвы с ценами и планировками. Бесплатно и без обязательств.
            </p>

            <a
              href="https://platform.wellside.ru/client_landing_form?item=387810597"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full px-10 py-4 transition-all duration-300 hover:scale-105 text-base"
            >
              <Icon name="Send" size={16} />
              Получить каталог
            </a>

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
