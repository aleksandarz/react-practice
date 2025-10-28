import { AtomEffect } from "recoil";
import { localStorageEffects } from "./localStorageEffects";

export const tasksStateEffect: AtomEffect<string[]> = localStorageEffects("userTasks");
