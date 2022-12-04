/* eslint-disable no-undef */

import { Helmet } from "react-helmet-async";

const History = () => {
  // useEffect(() => {
  //   toast(`back native ${window.nativeBackPressed}`);
  //   toast(`back pressed ${window.onBackPressed}`);
  // }, []);

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
      <Helmet>
        <title>Halaman History!</title>
        <meta name="theme-color" content="#fff" />
        <meta name="msapplication-navbutton-color" content="#fff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#fff" />
      </Helmet>
      Halaman Baru
      <button onClick={() => backHandler()}>Coba Back Button</button>
    </div>
  );
};

export default History;
