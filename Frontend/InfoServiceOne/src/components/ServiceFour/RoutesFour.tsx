import { Route, Routes } from 'react-router-dom';
import HomeFour from './HomeFour';
import ArticleFour from './ArticleFour';

const RoutesFour = () => {

    return (
        <>
            <Routes>
                <Route index element={<HomeFour />} />
                <Route path="article" element={<ArticleFour />} />
            </Routes>
        </>
    )
}

export default RoutesFour;