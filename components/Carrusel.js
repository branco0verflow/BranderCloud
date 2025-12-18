"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { bebas } from "../app/layout";

const slides = [
  { image: "/slider111.jpg", text: "DISEÑO DIGITAL" },
  { image: "/sslide2.jpg", text: "EXPERIENCIAS PREMIUM" },
  { image: "/sslide3.jpg", text: "CONTROL CONTABLE PARA TU NEGOCIO" },
  { image: "/ssliderr4.jpg", text: "Responsividad en cualquier dispositivo" },
  { image: "/slide5.jpg", text: "SISTEMAS DE RESERVAS Y AUTOMATIZACIÓN" },
  { image: "/slider66.jpg", text: "Accesos Login Cliente - Administrador" },
];

export default function Carrusel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] mt-3 overflow-hidden">
      {/* Imágenes */}
      <div
        className="flex h-full transition-transform duration-2500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={slide.text}
              fill
              priority={i === 0}
              className="object-cover"
            />
            {/* Oscurece aún más la imagen */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* TEXTO DOMINANTE */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-6 md:px-20 w-full">
          <h2
            key={index}
            className={`${bebas.className}
    text-white uppercase tracking-wide
    leading-[0.9]
    text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw]
    max-w-[95vw]
    animate-text-slide`}
          >
            {slides[index].text}
          </h2>

        </div>
      </div>
    </div>
  );
}
