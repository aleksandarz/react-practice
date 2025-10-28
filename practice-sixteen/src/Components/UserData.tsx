import { useRecoilValue } from "recoil";
import { userState } from "../States/userState";

const UserData = () => {
  const userData = useRecoilValue(userState);

  console.log("User data: ", userData);

  return (
    <>
      {/*{userData.loggedIn && (*/}
      {/*  <p className="m-5 text-xl">User logged in: true</p>*/}
      {/*)}*/}
    </>
  );
};

export default UserData;
