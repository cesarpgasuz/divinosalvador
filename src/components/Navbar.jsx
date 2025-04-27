import { Link } from "react-router"

function Navbar() {
  return (
    <section className="contenedor py-12">
         <ul className="bg-red-100 w-fit flex gap-12 ml-auto">
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/tramites'>Tramites</Link></li>
            <li><Link to='/horarios'>Horarios</Link></li>
            <li>Eventos</li>
            <li>Contacto</li>
        </ul>
    </section>
       
  )
}

export default Navbar