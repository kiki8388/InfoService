import { Route, Routes } from 'react-router-dom';
import HomeOne from './HomeOne';
import ArticleOne from './ArticleOne';

const Login = () => {

    return (
        <>
            <Routes>
                <Route index element={<HomeOne />} />
                <Route path="article" element={<ArticleOne />} />
            </Routes>
        </>
    )
}

export default Login;