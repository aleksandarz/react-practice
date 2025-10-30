import { AtomEffect } from "recoil";
import { localStorageEffects } from "./localStorageEffects";
import { TaskInterface } from "../States/tasksState";

export const tasksStateEffect: AtomEffect<TaskInterface[]> = localStorageEffects("userTasks");
