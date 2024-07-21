import { Route, Routes } from 'react-router-dom';
import HomeOne from './HomeOne';
import ArticleOne from './ArticleOne';

const RoutesOne = () => {

    return (
        <>
            <Routes>
                <Route index element={<HomeOne />} />
                <Route path="article" element={<ArticleOne />} />
            </Routes>
        </>
    )
}

export default RoutesOne;