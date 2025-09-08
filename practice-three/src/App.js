import "./App.css";
import { useState } from "react";
import Products from "./Components/Products";

function App() {

    const clickOnBtn = () => {
        console.log(name);
    }

    // name = varijabla, setName (set pa ime varijable konvencija) = funkcija koja menja vrednost varijable
    const [name, setName] = useState("Aleksandar"); // pozivamo useState i prosledjujemo joj default vrednost
    const changeName = (e) => {
        setName(e.target.value);
    }

    const [tax, setTax] = useState(0);
    // const changeTax = (e) => {
    //     setTax(e.target.value);
    // } -> Ovo smo zamenili sa errow funkcijom

    return (
        <>
            <button onClick={clickOnBtn}>{ name }</button>
            <input type="text" name="" id="" onInput={ changeName } placeholder="Enter name" />
            <input type="text" name="" id="" onInput={ (e) => setTax(e.target.value) } placeholder="Enter tax" />
            <Products tax={ tax }/>
        </>
    );
}

export default App;
