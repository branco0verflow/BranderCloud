"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { MessageCircle, Sparkles } from "lucide-react";




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

const Header = () => {

  

  return (
    <>
      <div
        className="
          relative z-30 pointer-events-auto
          mx-auto max-w-7xl
          px-6 py-20 md:py-32
        "
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-neutral-900 dark:text-white">
          Brander Cloud
        </h1>

        <h2 className="mt-4 text-emerald-500 text-xl sm:text-3xl md:text-5xl font-bold">
          Transformamos tus ideas en soluciones digitales.
        </h2>

        <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-xl text-neutral-700 dark:text-neutral-200">
          Creamos sitios web y sistemas de reservas diseñados para tu negocio.
        </p>

        
        {/* CTA */}
<div className="mt-14 flex flex-col sm:flex-row gap-5">
  {/* WhatsApp — Primary */}
  <a
    href="https://wa.me/59898068027?text=Hola%21%20Quisiera%20hacer%20una%20consulta%20inicial%20sobre%20un%20proyecto%20y%20sus%20posibilidades."
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative inline-flex items-center justify-center gap-3
      rounded-2xl px-10 py-[18px]

      bg-emerald-500
      text-white text-base sm:text-lg font-semibold tracking-tight

      shadow-[0_12px_30px_rgba(16,185,129,0.35)]
      transition-all duration-[450ms] ease-out

      hover:bg-emerald-600
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




      </div>



    </>
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
