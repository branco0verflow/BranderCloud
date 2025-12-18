"use client";

import { useEffect, useState } from "react";

const testimonials = [
    {
        name: "Federico Arcorena",
        image: "/user1.png",
        rating: 5,
        title: "Un antes y un después en nuestra gestión",
        description:
            "El sistema que desarrollaron optimizó por completo nuestros procesos internos. Hoy trabajamos con mayor orden, menos errores y mejor seguimiento de clientes.",
    },
    {
        name: "Albo Barbería, Colonia del Sacramento - 18 de Julio 1042",
        image: "/user2.png",
        rating: 5,
        title: "Solución a medida que superó expectativas",
        description:
            "Entendieron el problema desde el primer momento y entregaron una solución sólida, escalable y fácil de usar. Se nota la experiencia en software.",
    },
    {
        name: "Julio Arcorena",
        image: "/user3.png",
        rating: 5,
        title: "Profesionalismo y acompañamiento",
        description:
            "No solo desarrollaron el sistema, también nos acompañaron en todo el proceso. El soporte y la comunicación fueron impecables.",
    },
    {
        name: "Agustina A. Maidana - FORMA S.A",
        image: "/user4.png",
        rating: 5,
        title: "Impacto directo en el negocio",
        description:
            "Desde que implementamos la solución, redujimos tiempos operativos y mejoramos la experiencia de nuestros clientes. Totalmente recomendable.",
    },
];


export default function TestimonialsTailwind() {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(1);

    // Detectar tamaño de pantalla
    useEffect(() => {
        const update = () => {
            setVisible(window.innerWidth >= 768 ? 2 : 1);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => {
                const max = testimonials.length - visible;
                return prev >= max ? 0 : prev + 1;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [visible]);

    const totalDots = testimonials.length - visible + 1;

    return (
        <section className="relative w-full py-24 lg:py-36  overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                {/* TITULO */}
                <div className="mb-20 max-w-2xl">
                    <span className="inline-block text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
                        Casos reales
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-white">
                        Empresas que confían en nuestras soluciones
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-300">
                        Experiencias reales de clientes que optimizaron su negocio con nuestro software.
                    </p>

                </div>

                {/* CARRUSEL */}
                <div className="relative overflow-hidden rounded-3xl">
                    <div
                        className="flex transition-transform duration-[1200ms] ease-[cubic-bezier(.23,1,.32,1)]"
                        style={{
                            transform: `translateX(-${(current * 100) / visible}%)`,
                        }}
                    >
                        {testimonials.map((item, i) => (
                            <div key={i} className="min-w-full md:min-w-[50%] px-4">
                                <div className="group relative h-full rounded-[28px] bg-white/90 backdrop-blur shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 p-10 pt-16 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)] hover:-translate-y-2">

                                    {/* FOTO */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="absolute top-6 right-6 w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* ESTRELLAS */}
                                    <div className="flex gap-1 mb-5">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <svg
                                                key={index}
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className={`w-4 h-4 ${index < item.rating ? "fill-yellow-400" : "fill-gray-200"
                                                    }`}
                                            >
                                                <path d="M12 2.25l2.98 6.04 6.67.97-4.83 4.7 1.14 6.64L12 17.77l-5.96 3.13 1.14-6.64-4.83-4.7 6.67-.97L12 2.25z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* CONTENIDO */}
                                    <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 text-[15px] text-gray-600 leading-relaxed italic">
                                        “{item.description}”
                                    </p>

                                    {/* NOMBRE */}
                                    <div className="mt-8">
                                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                                        <span className="text-xs text-gray-400">
                                            Cliente · Solución a medida
                                        </span>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* INDICADORES */}
                <div className="flex justify-center gap-2 mt-10">
                    {Array.from({ length: totalDots }).map((_, i) => (
                        <button
                            key={i}
                            aria-label="testimonio"
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all duration-500 ${current === i ? "w-8 bg-gray-900" : "w-3 bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
