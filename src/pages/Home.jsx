/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useId, useState, useLayoutEffect } from "react";
import { toast } from "react-toastify";
import logo from "../logo.svg";
import { useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";

function Home() {
  const id = useId();
  const [nativeToken, setNativeToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fromNative, setfromNative] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  // JSBridge

  const onSubmit = (data) => {
    toast(`${data.example}, ${data.exampleRequired}`);
    toast(`${JSON.stringify(data)}`);
    if (!!window.chrome.webview && JSBridge) {
      JSBridge.showMessageInNative(data);
      JSBridge.showMessageInNative(JSON.stringify(data));
    }
    console.log(data);
  };
  const dataExample = watch("example");

  console.log("dari app : ", window.$native());
  const name = window.$native();
  console.log(name);
  toast(name);
  useEffect(() => {
    toast(nativeToken);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const sendMessage = () => {
    var valueReceived = document.getElementById("inputField").value;
    // Di tambahkan handling
    if (!!window.chrome.webview && JSBridge)
      JSBridge.showMessageInNative(valueReceived);
  };

  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line no-unused-vars
  function otherUpdateFromNative(message) {
    // document.getElementById("inputField").value = message;
    toast(`${message}`);
    setfromNative(message);
  }

  // eslint-disable-next-line no-unused-vars
  const otherPopupMessageV6 = (message) => {
    // document.getElementById("inputField").value = message;
    toast(`itWorks Es6`);
  };

  // eslint-disable-next-line no-unused-vars
  function otherPopupMessage(message) {
    // document.getElementById("inputField").value = message;
    toast(`It Works`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo react" />
        <a
          className="mb-4 text-3xl font-bold underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <span>get data from native : {fromNative}</span>

        <hr className="my-4 h-0.5 w-7/12 bg-slate-100"></hr>
        <div className="mb-2 flex flex-col">
          <label htmlFor="inputField" className="text-xl">
            This is web view
          </label>
          <input
            id="inputField"
            className="h-12 p-4 text-xl text-slate-700"
            type="text"
          />
        </div>

        <input
          onClick={sendMessage}
          className="h-12 w-[300px] rounded bg-green-400 text-lg"
          type="button"
          value="Send data to native"
        />

        <hr className="my-4 h-0.5 w-7/12 bg-slate-100"></hr>
        <h1 className="my-2 text-3xl font-bold">Input Element Test!</h1>
        <div className="text-base-400 text-base font-normal">
          {loading ? (
            <Skeleton width={160} height={20} baseColor={"gray"}></Skeleton>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2"
            >
              {/* register your input into the hook by invoking the "register" function */}
              <div className="flex space-x-2">
                <label htmlFor={`example`}>Input Element</label>
                <input
                  id={`example`}
                  className="border-1 text-slate-700"
                  aria-label="example"
                  {...register("example")}
                />
                {/* include validation with required or other standard HTML validation rules */}
              </div>
              <div className="flex space-x-2">
                <label htmlFor={`${id}-exampleRequired`}>
                  Input Element with Validation
                </label>
                <input
                  id={`${id}-exampleRequired`}
                  className="border-1 text-slate-700"
                  aria-label="example required"
                  {...register("exampleRequired", { required: true })}
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <div className="flex space-x-2">
                <label htmlFor={`${id}-developer`}>Choose your balloon</label>
                <input
                  id={`${id}-developer`}
                  {...register("developer", { required: true })}
                  type="radio"
                  value="Red"
                />
                Red
                <input
                  id={`${id}-developer`}
                  {...register("developer", { required: true })}
                  type="radio"
                  value="Green"
                />
                Green
                <input
                  id={`${id}-developer`}
                  {...register("developer", { required: true })}
                  type="radio"
                  value="Blue"
                />
                Blue
                <input
                  id={`${id}-developer`}
                  {...register("developer", { required: true })}
                  type="radio"
                  value="Green"
                />
                Yellow
              </div>
              {errors.developer && (
                <span>This developer field is required</span>
              )}

              <div className="flex space-x-2">
                <label htmlFor={`${id}-tnc`}>Terms & Condition</label>
                <input
                  id={`${id}-tnc`}
                  className="h-6 w-6"
                  {...register("tnc", { required: true })}
                  type="checkbox"
                  aria-label="tnc"
                />
              </div>
              {errors.tnc && <span>This TNC field is required</span>}
              <input aria-label="submit" type="submit" />
            </form>
          )}
        </div>
      </header>
    </div>
  );
}

export default Home;
