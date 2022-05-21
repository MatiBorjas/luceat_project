import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import '../styles/NavBar.css'

const NavBar = () => {
    
    return (
        <header className='contenedor-navbar'>
        <h3><Link to='/' className='brand'>LUCEAT</Link></h3>
        <ul className='navbar-botones'>
            <li className='link'>Inicio</li>
            <li><Link to={'/productos'} className='link'>Productos</Link></li>
            <li><Link to={'/categoria/difusores'} className='link'>Difusores</Link></li>
            <li><Link to={'/categoria/aguas'} className='link'>Body Splash</Link></li>
            <li><Link to={'/categoria/escencias'} className='link'>Escencias</Link></li>
            <li><Link to={'/categoria/velas'} className='link'>Velas</Link></li>
            <li><Link to={'/categoria/sahumerios'} className='link'>Sahumerios</Link></li>
            <CartWidget />
        </ul>
    </header>
    );
}

export default NavBar