import { useRecoilValue } from "recoil";
import { userState } from "../States/userState";

const UserData = () => {
  const userData = useRecoilValue(userState);

  console.log("User data: ", userData);

  return (
    <>
    </>
  );
};

export default UserData;
