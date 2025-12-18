import Head from 'next/head'
// import Header from '../components/Header'
//import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { HeroParallaxDemo } from '../components/HeroParallaxDemo'
import QueOfrecemos from '../components/Queofrecemos'
import Carrusel from '../components/Carrusel'
import Testimonial1 from '../components/Testimonial1'
import Consultas from '../components/Consultas'

export default function Home() {
  return (
    <>
      <Head>
        <title>Brander Cloud — Soluciones Web</title>
        <meta name="description" content="Creamos la web que tu negocio necesita en Colonia del Sacramento, Uruguay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className="min-h-screen flex flex-col w-full bg-black bg-cyan-spotlight">
        <main className="flex-grow container mx-auto py-4">
          
            <HeroParallaxDemo />


          <section className="relative">
            <Carrusel />
          </section>



          <section>


            <QueOfrecemos />


          </section>
        </main>

        <Testimonial1 />

        <section id='form-idea' className="mb-5 pb-2 sm:h-[120vh]">
          <Consultas />
        </section>

        <Footer />
      </div>
    </>
  )
}
