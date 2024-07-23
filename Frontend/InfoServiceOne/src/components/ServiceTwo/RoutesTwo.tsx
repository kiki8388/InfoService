import { Route, Routes } from 'react-router-dom';
import HomeTwo from './HomeTwo';
import ArticleTwo from './ArticleTwo';

const RoutesTwo = () => {

    return (
        <>
            <Routes>
                <Route index element={<HomeTwo />} />
                <Route path="article" element={<ArticleTwo />} />
            </Routes>
        </>
    )
}

export default RoutesTwo;