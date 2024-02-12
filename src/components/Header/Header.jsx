import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../images/logo.png'

export default function Header() {
    return (
        <header>
            <Link to="/"><img src={logo}/></Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}