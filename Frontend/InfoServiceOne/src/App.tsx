import "./App.css";
import { Route, Routes } from 'react-router-dom';
import NotExist from "./components/NotExist/NotExist";
import Start from "./components/Home/Start";
import RoutesOne from "./components/ServiceOne/RoutesOne";
import RoutesTwo from "./components/ServiceTwo/RoutesTwo";
import RoutesThree from "./components/ServiceThree/RoutesThree";
import RoutesFour from "./components/ServiceFour/RoutesFour";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/homeone/*" element={<RoutesOne />} />
        <Route path="/hometwo/*" element={<RoutesTwo />} />
        <Route path="/homethree/*" element={<RoutesThree />} />
        <Route path="/homefour/*" element={<RoutesFour />} />
        <Route path="*" element={<NotExist />} />
      </Routes>      
    </>
  );
}

export default App
