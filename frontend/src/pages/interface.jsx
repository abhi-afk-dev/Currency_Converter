import { useState } from "react";
import InputBox from "../components/inputbox";
import Header from "../components/header";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import BGVideo from "../assets/back.mp4";

function Interface() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <video
        src={BGVideo}
        className="w-full h-[100vh] z-0 object-cover"
        autoPlay
        loop
        muted
      ></video>
      <div className="w-full absolute inset-0 z-10 flex flex-col h-full items-center justify-center p-10">
        <form
          className="w-full gap-2 flex flex-col items-center justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            className="text-black"
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setAmount(amount)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <button
            type="button"
            className="absolute left-1/2
                    -translate-x-1/2
                    -translate-y-6
                    border-white rounded-md
                    bg-blue-600 text-white px-8
                    py-3
                    z-20"
            onClick={swap}
          >
            swap
          </button>

          <InputBox
            className="text-black"
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
          <button
            type="submit"
            className="w-[30rem] px-6 py-3 rounded-lg bg-blue-700 text-white hover:bg-white hover:text-black "
          >
            Convert {from} to {to}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Interface;
