import { AtomEffect } from "recoil";

export const userStateEffect = <T>(): AtomEffect<T> =>
  ({setSelf, onSet}) => {
    const savedTasks = localStorage.getItem("userTasks");

    if (savedTasks !== null) {
      setSelf(JSON.parse(savedTasks));
    }

    onSet((newTask) => {
      localStorage.setItem("userTasks", JSON.stringify(newTask));
    });
  };
