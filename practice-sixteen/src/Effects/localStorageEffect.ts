import { AtomEffect } from "recoil";

export const localStorageEffect = (): AtomEffect<unknown> =>
  ({ setSelf, onSet }) => {
    const savedValues = localStorage.getItem("userData");

    if (savedValues !== null) {
      setSelf(JSON.parse(savedValues));
    }

    onSet((newValue) => {
      localStorage.setItem("userData", JSON.stringify(newValue));
    });
  };
