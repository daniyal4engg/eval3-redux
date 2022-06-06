import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Posts } from './Posts'
export const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/posts' element={<Posts/>}></Route>
            </Routes>
        </div>
    )
}