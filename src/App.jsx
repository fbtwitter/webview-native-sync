import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Store from "./context";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Store>
      <div className="relative mx-auto min-h-screen max-w-screen-sm bg-[#F5F5F5]">
        <Outlet />
        <ToastContainer draggablePercent={60} />
      </div>
    </Store>
  );
}

export default App;
