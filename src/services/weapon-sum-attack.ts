import { IWeapon } from "../shared/types";

export const weaponSumAttack = (a: IWeapon) => {
   return Object.keys(a.attack).reduce((acc, key) => {
      if (key !== "Crit") {
         return acc + a.attack[key as keyof IWeapon["attack"]]!;
      }
      return acc;
   }, 0);
}
