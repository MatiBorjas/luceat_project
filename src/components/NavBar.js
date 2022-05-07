import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        
        <header className='contenedor-navbar'>
        <h3><Link to='/' className='brand'>LUCEAT</Link></h3>
        <ul className='navbar-botones'>
            <li className='link'>Inicio</li>
            <li ><Link to='/productos' className='link'>Productos</Link></li>
            <li className='link'>Conocenos</li>
            <li className='link'>Contacto</li>
            <CartWidget/>
        </ul>
    </header>
    );
}

export default NavBar