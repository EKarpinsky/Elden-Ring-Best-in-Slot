export interface IWeapon {
   attack: {
      [key: string]: number | undefined | null;
   };
   defence: {
      [key: string]: number | null;
   };
   requiredAttributes: {
      [key: string]: number | undefined | null;
   };
   description: string;
   scalesWith: {
      [key: string]: string | undefined;
   };
   id: string;
   name: string;
   image: string;
   category: string | null;
   weight: number;
}

export interface IPlayerStats {
   Str: number;
   Dex: number;
   Int: number;
   Arc: number;
   Fai: number;
}

export interface IWeaponContainerProps {
   weapon: IWeapon;
   onNextWeapon: () => void;
   onPreviousWeapon: () => void;
   weaponIndex: number;
   weaponArrayLength: number;
}
