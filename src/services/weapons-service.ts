import { IWeapon } from "../components/weapon-container";

export interface IPlayerStats {
   Str: number;
   Dex: number;
   Int: number;
   Arc: number;
   Fai: number;
}

export class WeaponsService {
   private playerStats: IPlayerStats = {Str: 0, Dex: 0, Int: 0, Arc: 0, Fai: 0};

   constructor(private readonly weaponsList: IWeapon[]) {
      console.log("Weapons service initialized with the following data: ");
      console.log(weaponsList);
   }

   public setPlayerStats(playerStats: IPlayerStats) {
      this.playerStats = {...playerStats};
   }

   public filterWeapons() {

   }
}
