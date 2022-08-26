/* eslint-disable no-undef */
import { useEffect } from "react";
import { toast } from "react-toastify";

const History = () => {
  useEffect(() => {
    toast(`back native ${window.nativeBackPressed}`);
    toast(`back pressed ${window.onBackPressed}`);
  }, []);

  const backHandler = () => {
    if (/Android/.test(window.navigator.userAgent)) {
      window.InterfaceObject.nativeDo({ command: "finish", data: {} });
    } else {
      webkit.messageHandlers.nativeDo.postMessage({
        command: "finish",
        data: {},
      });
    }
  };
  return (
    <div>
      Halaman Baru
      <button onClick={() => backHandler()}>Coba Back Button</button>
    </div>
  );
};

export default History;
