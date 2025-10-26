import { atom } from "recoil";
import { localStorageEffect } from "../Effects/localStorageEffect";

export const userState = atom({
    key: "userState",
    default: {
        loggedIn: false,
        email: "",
    },
    effects_UNSTABLE: [
      localStorageEffect(),
    ],
});

