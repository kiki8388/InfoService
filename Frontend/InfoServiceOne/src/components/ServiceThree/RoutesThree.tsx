import { Route, Routes } from 'react-router-dom';
import HomeThree from './HomeThree';

const RoutesThree = () => {

    return (
        <>
            <Routes>
                <Route index element={<HomeThree />} />
            </Routes>
        </>
    )
}

export default RoutesThree;