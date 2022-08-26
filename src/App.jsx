import { Outlet, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Store from "./context";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useLayoutEffect, useState } from "react";

window.$native = (message) => {
  toast(`message from $ : ${message}`);
  return message;
};

function App() {
  const [nativeData, setNativeData] = useState(null);
  const navigate = useNavigate();

  window.nativeData = (message) => {
    toast(`message received:  ${message}`);
    setNativeData(message);
    return message;
  };

  useEffect(() => {
    toast(`${nativeData}`);
  }, [toast, nativeData]);

  useLayoutEffect(() => {
    // window.nativeBackPressed = (ev) => {
    //   ev.preventDefault();
    //   this.goBack;
    //   alert("Back button pressed via native");
    // };
    // window.onBackPressed = navigate(-1);
    // window.nativeBackPressed = navigate(-1);

    window.nativeBackPressed = alert("halo");
    window.onBackPressed = alert("halo 2");

    return () => {
      window.nativeBackPressed = null;
      window.onBackPressed = null;
    };
  }, []);

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
