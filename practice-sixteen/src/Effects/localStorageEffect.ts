import { AtomEffect } from "recoil";

export const localStorageEffect = <T>(): AtomEffect<T> =>
  ({setSelf, onSet}) => {
    const savedValues = localStorage.getItem("userData");

    if (savedValues !== null) {
      setSelf(JSON.parse(savedValues));
    }

    onSet((newValue) => {
      localStorage.setItem("userData", JSON.stringify(newValue));
    });
  };
