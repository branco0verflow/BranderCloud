"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {
  MessageCircle,
  Sparkles,
  Lightbulb,
  Globe2,
  Rocket,
  TrendingUp,
  LayoutTemplate,
  ShieldCheck,
  Search,
  Headphones,
} from "lucide-react";




export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    <div
      ref={ref}
      className="h-[250vh] sm:h-[300vh] py-2 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const features = [
  {
    icon: Globe2,
    title: "Diseño moderno",
    text: "y personalizado",
  },
  {
    icon: Rocket,
    title: "Rápido, seguro",
    text: "y optimizado",
  },
  {
    icon: TrendingUp,
    title: "Pensado para",
    text: "convertir más",
  },
];

const stats = [
  { icon: LayoutTemplate, label: "Diseño Responsivo" },
  { icon: ShieldCheck, label: "Seguridad Total" },
  { icon: Search, label: "SEO Optimizado" },
  { icon: Headphones, label: "Soporte Constante" },
];

const Header = () => {
  return (
    <div
      className="
        relative z-30 pointer-events-auto
        mx-auto max-w-7xl
        px-6 py-20 md:py-28
        overflow-hidden
      "
    >
      {/* Decorative dot grid */}
      <div
        className="absolute top-6 left-0 w-40 h-40 opacity-40 pointer-events-none hidden sm:block"
        style={{
          backgroundImage:
            "radial-gradient(rgba(52,211,153,0.55) 1.4px, transparent 1.4px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Decorative glow arcs */}
      <div className="absolute -top-32 -right-32 w-[26rem] h-[26rem] rounded-full border border-emerald-400/25 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-emerald-400/20 pointer-events-none" />
      <div className="absolute -bottom-40 -left-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — copy */}
        <div>
          <img src="/logo.png" alt="Brander Cloud" className="h-20 sm:h-28 md:h-36 w-auto" />

          <h1 className="mt-8 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-oswald text-white">
            Sitios web
            <br />
            <span className="text-emerald-400">profesionales</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm sm:text-base md:text-xl text-neutral-200 font-light tracking-wider font-oswald">
            Creamos sitios web profesionales para negocios que quieren atraer más clientes.
          </p>

          {/* Feature bullets */}
          <ul className="mt-8 space-y-4">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="text-neutral-100 font-oswald tracking-wide">
                  {title} <span className="text-emerald-300">{text}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            {/* WhatsApp — Primary */}
            <a
              href="https://wa.me/59898068027?text=Hola%21%20Quisiera%20hacer%20una%20consulta%20inicial%20sobre%20un%20proyecto%20y%20sus%20posibilidades."
              target="_blank"
              rel="noopener noreferrer"
              className="
        group relative inline-flex items-center justify-center gap-3
        rounded-2xl px-10 py-[18px]

        bg-emerald-600
        text-white text-base sm:text-lg font-semibold tracking-tight

        shadow-[0_12px_30px_rgba(16,185,129,0.35)]
        transition-all duration-[450ms] ease-out

        hover:bg-emerald-700
        hover:shadow-[0_20px_45px_rgba(16,185,129,0.45)]
        hover:-translate-y-[1px]

        active:translate-y-0 active:shadow-[0_10px_25px_rgba(16,185,129,0.3)]
      "
            >
              <MessageCircle className="w-[18px] h-[18px]" />
              Contactar por WhatsApp

              {/* subtle highlight */}
              <span
                className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-[450ms]
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),transparent_60%)]
        "
              />
            </a>

            {/* Secondary — Editorial / Glass */}
            <Link
              href="#form-idea"
              className="
        group relative inline-flex items-center justify-center gap-3
        rounded-2xl px-10 py-[18px]

        border border-white/25
        bg-white/5 backdrop-blur-md

        text-white/90 text-base sm:text-lg font-medium tracking-tight

        transition-all duration-[450ms] ease-out

        hover:bg-white/10
        hover:border-white/50
        hover:-translate-y-[1px]

        active:translate-y-0
      "
            >
              <Sparkles className="w-[18px] h-[18px] opacity-80 group-hover:opacity-100 transition" />
              Conversemos sobre tu proyecto
            </Link>
          </div>

          {/* Highlight bar */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/5 px-5 py-4">
            <Lightbulb className="w-5 h-5 shrink-0 text-emerald-300" />
            <h2 className="text-emerald-300 text-sm sm:text-base md:text-lg font-medium tracking-wide font-oswald">
              Transformamos tus ideas en{" "}
              <span className="text-white">soluciones digitales.</span>
            </h2>
          </div>
        </div>

        {/* RIGHT — device mockup */}
        <DeviceMockup />
      </div>

      {/* Bottom stats strip */}
      <div className="relative mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-10">
        {stats.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm text-neutral-300 font-oswald tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const DeviceMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-lg"
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="
          relative rounded-2xl border border-white/10
          bg-gradient-to-b from-neutral-900 to-black
          shadow-[0_30px_80px_rgba(0,0,0,0.55)]
          overflow-hidden
        "
      >
        {/* Browser top bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          <div className="ml-4 hidden sm:flex gap-4 text-[11px] text-neutral-400 font-oswald tracking-wide">
            <span>Inicio</span>
            <span>Servicios</span>
            <span>Nosotros</span>
            <span>Proyectos</span>
          </div>
          <span className="ml-auto rounded-md bg-emerald-500 px-3 py-1 text-[10px] font-semibold text-white">
            Contacto
          </span>
        </div>

        {/* Screen content */}
        <div className="relative p-6 sm:p-8">
          <p className="text-lg sm:text-2xl font-semibold text-white font-oswald leading-snug">
            Impulsamos tu
            <br />
            <span className="text-emerald-400">negocio online</span>
          </p>
          <p className="mt-3 max-w-[70%] text-xs sm:text-sm text-neutral-400 font-oswald">
            Sitios web que destacan, conectan y convierten.
          </p>
          <span className="mt-5 inline-block rounded-lg bg-emerald-500 px-5 py-2 text-xs sm:text-sm font-semibold text-white">
            Cotiza tu proyecto
          </span>

          {/* Abstract graphic */}
          <div className="absolute right-4 top-6 h-28 w-28 sm:h-36 sm:w-36 rounded-2xl bg-gradient-to-br from-emerald-400/30 via-emerald-500/10 to-transparent border border-emerald-400/20 rotate-12" />
        </div>

        {/* Mini stat cards */}
        <div className="grid grid-cols-2 gap-3 border-t border-white/10 bg-white/[0.03] p-5 sm:grid-cols-4">
          {[
            { n: "+100", l: "Proyectos" },
            { n: "100%", l: "Clientes" },
            { n: "24/7", l: "Soporte" },
            { n: "100%", l: "A medida" },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <p className="text-emerald-400 font-bold text-sm sm:text-base font-oswald">{n}</p>
              <p className="text-neutral-400 text-[10px] sm:text-xs font-oswald">{l}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Laptop base */}
      <div className="mx-auto -mt-1 h-3 w-[85%] rounded-b-xl bg-gradient-to-b from-neutral-800 to-neutral-950 border border-t-0 border-white/10" />
    </motion.div>
  );
};


export const ProductCard = ({
  product,
  translate
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0">
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title} />
      </a>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>

  );
};
