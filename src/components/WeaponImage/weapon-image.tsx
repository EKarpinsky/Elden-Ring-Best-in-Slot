import React, { CSSProperties } from "react"
import { IWeaponContainerProps } from "../../shared/types";


const weaponContainerStyle: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   border: '1px solid #ccc',
   maxWidth: 'fit-content',
   minWidth: 'fit-content',
};

const weaponImageStyles: CSSProperties = {
   width: '60%',
   height: 'auto',
   padding: '5rem',
};

const weaponButtonsContainerStyles: CSSProperties = {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   width: '100%',
   padding: '1rem',
};

// TODO: FunctionComponent vs props interface
// @see PlayerStatsForm in player-stats-form.tsx
export const WeaponImage = ({
                               weapon,
                               onNextWeapon,
                               onPreviousWeapon,
                               weaponIndex,
                               weaponArrayLength
                            }: IWeaponContainerProps) => {

   return (
       <div style={weaponContainerStyle}>

          <h2>{weapon.name}</h2>
          <img src={weapon.image} alt={weapon.name} style={weaponImageStyles}/>
          <div style={weaponButtonsContainerStyles}>
             <button onClick={onPreviousWeapon} disabled={weaponIndex === 0}>Previous Weapon</button>
             <button onClick={onNextWeapon} disabled={weaponIndex === weaponArrayLength - 1}>Next Weapon</button>
          </div>


       </div>
   )
}


