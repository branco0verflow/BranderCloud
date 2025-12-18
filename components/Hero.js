export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white to-gray-50 rounded-lg p-8 shadow-sm">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Creamos la web que tu negocio necesita
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            Soluciones web en Colonia del Sacramento — Desarrollo, mantenimiento y SaaS para pymes.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="inline-block px-5 py-3 bg-black text-white rounded-md">Solicitar demo</a>
            <a href="#" className="inline-block px-5 py-3 border border-gray-300 rounded-md">Ver planes</a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/3">
          <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">[Mockup / Imagen]</span>
          </div>
        </div>
      </div>
    </section>
  )
}
