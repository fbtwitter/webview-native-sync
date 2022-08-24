/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const Authentication = () => {
  const [isRegistered, setIsRegistered] = useState(-1);
  const [searchParams] = useSearchParams({
    phoneNumber: "",
  });
  const phoneNumber = searchParams.get("phoneNumber");

  useEffect(() => {
    process.env.REACT_APP_ENVIRONMENT === "local" ||
    process.env.REACT_APP_ENVIRONMENT === "development"
      ? toast(
          `Environment is running on :  ${process.env.REACT_APP_ENVIRONMENT}`
        )
      : "";

    phoneNumber ? setIsRegistered(1) : setIsRegistered(false);
  }, []);

  console.log(phoneNumber);

  if (isRegistered === 1) {
    // removeCookie("loggedIn");
    // setCookie("loggedIn", true);
    toast("registered");

    return <Navigate to={"/home"} />;
  } else if (isRegistered === 0) {
    // removeCookie("loggedIn");
    toast("not registered yet");

    return <Navigate to={"/onboarding"} />;
  } else if (isRegistered === false) {
    // removeCookie("loggedIn");
    toast("not token yet");

    return (
      <div className="bg-base-0 mx-auto h-screen">
        <main>
          <div className="container p-5">
            <section className="mx-auto flex w-full flex-col items-center">
              <div className="mt-16">
                <figure className="mx-auto aspect-square max-w-[208px]"></figure>
              </div>
              <div className=" my-7 text-center">
                <h1 className="text-base-400 text-lg font-bold uppercase">
                  Token tidak tersedia
                </h1>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
};

export default Authentication;
