import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Authentication from "../pages/Authentication";
import History from "../pages/History";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Authentication />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="history" element={<History />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
