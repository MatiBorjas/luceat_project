import CartWidget from "./CartWidget";
import '../styles/NavBar.css'

const NavBar = () => {
    return (

    <header className='contenedor-navbar'>
        <h3>LUCEAT</h3>
        <ul className='navbar-botones'>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Conocenos</li>
            <li>Contacto</li>
            <CartWidget/>
        </ul>
    </header>
    );
}

export default NavBar