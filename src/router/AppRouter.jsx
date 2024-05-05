import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import PrivateRouter from "../router/PrivateRouter";
import News from "../pages/News";
import About from "../pages/About";
import MoreInfo from "../pages/MoreInfo";
import SportNews from "../pages/SportNews";
import MyNavbar from '../components/MyNavbar';
const AppRouter = () => {
  return (
    <BrowserRouter>
    <MyNavbar />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
          <Route path="/MoreInfo" element={<MoreInfo />} />
          <Route path="/SportNews" element={<SportNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
