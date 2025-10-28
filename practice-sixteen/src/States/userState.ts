import { atom } from "recoil";
import { localStorageEffect } from "../Effects/localStorageEffect";

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
      localStorageEffect(),
    ],
});

