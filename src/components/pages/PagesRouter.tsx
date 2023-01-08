import { Routes, Route } from 'react-router-dom'
import routes from '../../core/routes'
import HomePage from './HomePage'

const PagesRouter = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<HomePage />}></Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default PagesRouter