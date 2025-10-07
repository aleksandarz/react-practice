import Payment from "./Components/Payment";
import { CurrencyContext } from "./Context/CurrencyContext";
import { AmountContext } from "./Context/AmountContext";
import { useEffect, useReducer, useState } from "react";
import { userReducer, initialUserState } from "./Reducers/User";

function App() {

  const [userState, dispatch] = useReducer(userReducer, initialUserState);

  const [currency, setCurrency] = useState(1);
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [visible, setVisible] = useState(true);

  const calculateAmount = () => {
    setResult(amount * currency);
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      dispatch({ type: "SET_USERNAME", payload: parsedUser.userName });
      dispatch({ type: "SET_MONEY", payload: parsedUser.money });
      dispatch({ type: "SET_USER_CREATED", payload: true });
      setVisible(false);
    }
  }, []);

  const saveUser = () => {
    if (userState.userName.trim() === "" || userState.money === 0 || isNaN(userState.money)) {
      return;
    }

    const updatedUser = {
      ...userState,
      isUserCreated: true,
    };

    dispatch({type: "SET_USER_CREATED", payload: true});
    localStorage.setItem("userData", JSON.stringify(updatedUser));
    setVisible(false);
  }

  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <AmountContext.Provider value={{ amount, setAmount, result, setResult }}>
          <div className="flex flex-col gap-2 m-5">

            {visible && (
              <div className="flex flex-col gap-2 my-5">
                <h1 className="text-xl">User details</h1>

                <input
                  placeholder="Enter a name"
                  className="w-64 h-9 rounded border border-gray-400 outline-none pl-1.5"
                  type="text" onChange={ (e) => dispatch({type: "SET_USERNAME", payload: e.target.value}) }/>

                <input
                  placeholder="Enter money amount"
                  className="w-64 h-9 rounded border border-gray-400 outline-none pl-1.5"
                  type="text" onChange={ (e) => dispatch({type: "SET_MONEY", payload: e.target.value}) }/>

                <button
                  type="button"
                  className="w-36 h-8 rounded bg-black text-white"
                  onClick={() => saveUser()}>Save user details
                </button>
              </div>
            )}

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
          <div className="flex flex-col gap-2 m-5">

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
