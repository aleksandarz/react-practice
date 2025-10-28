import { AtomEffect } from "recoil";
import { localStorageEffects } from "./localStorageEffects";

export const userStateEffect: AtomEffect<any> = localStorageEffects("userData");

