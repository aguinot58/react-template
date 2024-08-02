import { Link, NavLink } from 'react-router-dom'
import './Layout.css'

const Header = () => {

    return (
        <header>
            <div className="logo">
                <Link to="/"><img src='' alt="" /></Link>
                <span>Header</span>
            </div>
            <nav className="navigation">
                <NavLink to="/" className="link">Home</NavLink>
            </nav>
        </header>
    )
}

export default Header