import { atom } from "recoil";
import { tasksStateEffect } from "../Effects/tasksStateEffect";

export const tasksState = atom<string[]>({
  key: "tasksState",
  default: [],
  effects_UNSTABLE: [
    tasksStateEffect,
  ],
});