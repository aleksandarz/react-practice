import { atom } from "recoil";
import { userStateEffect } from "../Effects/userStateEffect";

export const tasksState = atom<string[]>({
  key: "tasksState",
  default: [],
  effects_UNSTABLE: [
    userStateEffect(),
  ],
});