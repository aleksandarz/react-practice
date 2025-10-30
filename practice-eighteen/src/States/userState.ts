import { atom } from "recoil";
import { userStateEffect } from "../Effects/userStateEffect";

type UserType = {
  loggedIn: boolean;
  email: string;
}

export const userState = atom<UserType>({
  key: "userState",
  default: {
    loggedIn: false,
    email: "",
  },
  effects_UNSTABLE: [
    userStateEffect,
  ],
});

