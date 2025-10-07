import { useContext } from "react";
import { AmountContext } from "../Context/AmountContext";

const PayPal = () => {

  const { result, setResult } = useContext(AmountContext);

  return (
    <>
      <p className="text-2xl">Calculated amount: {result.toFixed(2)}</p>
    </>
  );
}

export default PayPal;