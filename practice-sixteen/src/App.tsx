import { RecoilRoot } from "recoil";
import Login from "./Components/Login";
import UserData from "./Components/UserData";

function App() {
  return (
    <RecoilRoot>
      <Login />
      <UserData />
    </RecoilRoot>
  );
}

export default App;
