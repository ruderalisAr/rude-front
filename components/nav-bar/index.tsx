import Image from "next/image"
// import logo from "/public/logo.png"
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between py-4">
        <a href="/" className="flex items-center">
          <Image src="/public/logo.png" width={50} height={50} alt="" />
          <span className="font-bold">Rude Argentina</span>
        </a>
        <ul className="ml-auto flex">
          <li>
            <a href="/inicio" className="mr-4">
              Inicio
            </a>
          </li>
          <li>
            <a href="https://rudeargentina.com/shop" className="mr-4">
              Shop
            </a>
          </li>
          <li>
            <a href="https://rudeargentina.com/crew" className="mr-4">
              Crew
            </a>
          </li>
          <li>
            <a href="https://rudeargentina.com/plataforma" className="mr-4">
              Plataforma
            </a>
          </li>
          <li>
            <a href="https://rudeargentina.com/contactanos" className="mr-4">
              Contactanos
            </a>
          </li>
          <li>
            <a href="https://rudeargentina.com/blog" className="mr-4">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
