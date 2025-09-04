import './App.css';

function App() {

    let time = new Date().getHours();
    document.body.style.backgroundColor = (time >= 22 && time <= 6) ? "gray" : "white";

    return (
        <>
            <h1>Hello world</h1>
            <p>Current time is: { time }</p>
        </>
    );
}

export default App;