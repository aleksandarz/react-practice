import { useState } from "react";
import Products from "./Components/Products";

function App() {

  const [tax, setTax] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center gap-5 mt-5">
        <div>
          <input className="border border-gray-400 rounded h-8 w-60 pl-1"
                 type="text" name="" id="" onInput={(e) => setTax(e.target.value)} placeholder="Enter tax"/>
          <Products tax={tax}/>
        </div>
      </div>
    </>
  );
}

export default App;
