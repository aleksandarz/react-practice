import { RecoilRoot } from "recoil";
import Login from "./Components/Login";
import UserData from "./Components/UserData";
import Tasks from "./Components/Tasks";

const App = () => {
  return (
    <RecoilRoot>
      <Login />
      <Tasks />l
      <UserData />
    </RecoilRoot>
  );
}

export default App;
