import React from "react"
import { IWeaponContainerProps } from "../../shared/types";
import { WeaponImage } from "../WeaponImage/weapon-image";
import { WeaponStats } from "../WeaponStats/weapon-stats";


// TODO: FunctionComponent vs props interface
// @see PlayerStatsForm in player-stats-form.tsx
export const WeaponContainer = ({
                                   weapon,
                                   onNextWeapon,
                                   onPreviousWeapon,
                                   weaponIndex,
                                   weaponArrayLength
                                }: IWeaponContainerProps) => {

   return (
       <>
          {/* weapon image component*/}
          <WeaponImage weapon={weapon} onNextWeapon={onNextWeapon} onPreviousWeapon={onPreviousWeapon}
                       weaponIndex={weaponIndex} weaponArrayLength={weaponArrayLength}></WeaponImage>
          {/* weapon stats component*/}
          <WeaponStats weapon={weapon}></WeaponStats>
       </>
   )
}


