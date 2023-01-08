import { Link } from 'react-router-dom'
import routes from '../../core/routes'

const Header = () => {
    return (
        <div className="header-container">
            <nav className="header container-x">
                <div className="header-left">
                    <p className="header-logo">Bioonix</p>
                </div>
                <div className="header-right">
                    <Link className='header-link' to={routes.home}>Formulario</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header