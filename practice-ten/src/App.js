import Payment from "./Components/Payment";
import { CurrencyContext } from "./Context/CurrencyContext";
import { AmountContext } from "./Context/AmountContext";
import { useState } from "react";

function App() {

  const [currency, setCurrency] = useState(1);
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  const calculateAmount = () => {
    setResult(amount * currency);
  }

  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <AmountContext.Provider value={{ amount, setAmount, result, setResult }}>
          <div className="flex flex-col gap-3 m-5">

            <select
              name="currency"
              id="currency"
              className="w-64 h-9 border border-gray-400 rounded pl-2 outline-none"
              onChange={(e) => setCurrency(parseFloat(e.target.value))}
              defaultValue="1"
            >
              <option value="1">RSD - Serbian Dinar 🇷🇸</option>
              <option value="0.00853">EUR - Euro 🇪🇺</option>
              <option value="0.00927">USD - US Dollar 🇺🇸</option>
              <option value="0.00785">GBP - British Pound 🇬🇧</option>
              <option value="1.39">JPY - Japanese Yen 🇯🇵</option>
              <option value="0.00898">CHF - Swiss Franc 🇨🇭</option>
              <option value="0.0128">CAD - Canadian Dollar 🇨🇦</option>
              <option value="0.0139">AUD - Australian Dollar 🇦🇺</option>
              <option value="0.073">CNY - Chinese Yuan 🇨🇳</option>
              <option value="0.098">SEK - Swedish Krona 🇸🇪</option>
              <option value="0.0145">NZD - New Zealand Dollar 🇳🇿</option>
              <option value="0.099">NOK - Norwegian Krone 🇳🇴</option>
              <option value="0.064">DKK - Danish Krone 🇩🇰</option>
              <option value="0.22">PLN - Polish Zloty 🇵🇱</option>
              <option value="1.55">CZK - Czech Koruna 🇨🇿</option>
              <option value="3.35">HUF - Hungarian Forint 🇭🇺</option>
              <option value="0.0099">TRY - Turkish Lira 🇹🇷</option>
              <option value="0.0105">RUB - Russian Ruble 🇷🇺</option>
              <option value="0.91">INR - Indian Rupee 🇮🇳</option>
              <option value="0.049">BRL - Brazilian Real 🇧🇷</option>
              <option value="0.0505">ZAR - South African Rand 🇿🇦</option>
            </select>

          </div>
          <div className="flex flex-col gap-3 m-5">

            <input
              type="number"
              placeholder="Enter amount"
              className="w-64 h-9 rounded border border-gray-400 outline-none pl-1.5"
              onChange={(e) => setAmount(Number(e.target.value))}/>

            <button
              type="button"
              className="w-36 h-8 rounded bg-black text-white"
              onClick={() => calculateAmount()}>Calculate Amount
            </button>

            <Payment />

          </div>
        </AmountContext.Provider>
      </CurrencyContext.Provider>
    </>
  );
}

export default App;
