"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function QueOfrecemos() {
  return (
    <section className="w-full py-28 px-6 bg-transparent flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center space-y-8"
      >
        {/* Título principal */}
        <motion.h2
          className="text-6xl md:text-5xl font-semibold tracking-tight text-white/95 leading-tight"
        >
          ¿QUÉ HACEMOS?
        </motion.h2>

        {/* Subtexto */}
        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
          Diseñamos la estrategia, la experiencia de usuario y
          construimos sistemas que elevan la presencia digital de tu negocio para que
          tu empresa gane eficiencia, orden y una imagen digital sólida.
        </p>

        <p className="text-xl text-white/80 font-medium pt-2">
          Contanos tu idea y te enviamos una propuesta ajustada a tu proyecto.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
          <Link
            href="https://wa.me/59891307261?text=Hola%21%20Quisiera%20averiguar%20sobre%20un%20presupuesto%20para%20una%20idea%20de%20sitio%20web%20y%20posibles%20funcionalidades%20adicionales."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 bg-emerald-500 text-white
              text-base sm:text-lg font-semibold
               hover:bg-emerald-600 transition"
          >
            Contactar por WhatsApp
          </Link>

          <Link
            href="#form-idea"
            className="px-8 py-3 rounded-xl border border-white/30 text-white text-lg font-medium 
  hover:bg-white/10 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Quiero contar mi idea
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
