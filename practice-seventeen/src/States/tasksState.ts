import { atom } from "recoil";
import { tasksStateEffect } from "../Effects/tasksStateEffect";

export interface TaskInterface {
  taskId: string;
  taskName: string;
  category: string;
}

export const tasksState = atom<TaskInterface[]>({
  key: "tasksState",
  default: [
    {
      taskId: "",
      taskName: "",
      category: "",
    },
  ],
  effects_UNSTABLE: [
    tasksStateEffect,
  ],
});