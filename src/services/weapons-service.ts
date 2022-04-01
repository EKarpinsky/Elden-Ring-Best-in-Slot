import { IPlayerStats, IWeapon } from "../shared/types";
import { weaponSumAttack } from "./weapon-sum-attack";

export const WeaponsService = {

   filterWeapons: (weapons: IWeapon[], playerStats: IPlayerStats) => {
      return weapons.filter(weapon => {
         // for each property of requiredAttributes for the weapon, check if the same property in playerStats has a higher or equal value
         return Object.keys(weapon.requiredAttributes).every(
             key => playerStats[key as keyof IPlayerStats] === 0 || playerStats[key as keyof IPlayerStats] >= weapon.requiredAttributes[key]!
         );
      });
   },



   sortWeapons: (weapons: IWeapon[]) => {
      return weapons.sort((a: IWeapon, b: IWeapon) => {
         // add up every property in the attack property of the weapon, except for Crit. Sort by sums in descending order
         const aSum = weaponSumAttack(a);
         const bSum = weaponSumAttack(b)
         return bSum - aSum;
      });
   }

}

