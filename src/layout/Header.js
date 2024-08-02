import { Link, NavLink } from 'react-router-dom'
import './Layout.css'

const Header = () => {

    return (
        <header>
            <div className="logo">
                <Link to="/"><img src='/assets/logo.png' alt="Logo" /></Link>
                <span>Projet</span>
            </div>
            <nav className="nav">
                <NavLink to="/" className="link">Home</NavLink>
            </nav>
        </header>
    )
}

export default Header