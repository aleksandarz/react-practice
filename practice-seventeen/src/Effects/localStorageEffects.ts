import { AtomEffect } from "recoil";

export const localStorageEffects = <T>(localStorageKey: string): AtomEffect<T> =>
  ( {setSelf, onSet} ) => {
    const savedValues = localStorage.getItem(`${localStorageKey}`);

    if (savedValues !== null) {
      setSelf(JSON.parse(savedValues));
    }

    onSet((newValue) => {
      localStorage.setItem(`${localStorageKey}`, JSON.stringify(newValue));
    });
  };