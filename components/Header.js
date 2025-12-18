export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Brander Cloud</div>
        <nav className="space-x-4">
          <a href="#" className="text-sm">Inicio</a>
          <a href="#" className="text-sm">Servicios</a>
          <a href="#" className="text-sm">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
