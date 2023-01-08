import { Link } from 'react-router-dom'
import routes from '../../core/routes'

const NotFoundPage = () => {
    return (
        <div className="page-content">
            <p>404 NO ENCONTRADO</p>
            <Link to={routes.home}>Ir a formulario de Inicio</Link>
        </div>
    )
}

export default NotFoundPage