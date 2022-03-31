import React, { FunctionComponent, useEffect, useState } from "react"
import { IWeapon } from "../shared/types";

const weaponContainerStyle = {
   display: 'flex',
   flexDirection: 'column' as 'column',
   alignItems: 'center',
   border: '1px solid #ccc',
   maxWidth: 'fit-content',
   minWidth: 'fit-content',
};

const weaponImageStyles = {
   width: '60%',
   height: 'auto',
   padding: '5rem',
};

const weaponButtonsContainerStyles = {
   display: 'flex',
   flexDirection: 'row' as 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   width: '100%',
   padding: '1rem',
};

// TODO: FunctionComponent vs props interface
// @see PlayerStatsForm in player-stats-form.tsx
export const WeaponContainer: FunctionComponent<{ weapon: IWeapon, onNextWeapon: () => void, onPreviousWeapon: () => void }> =
    // props
    ({
        weapon,
        onNextWeapon,
        onPreviousWeapon

     }) => {

       return (
           <div style={weaponContainerStyle}>

              <h2>{weapon.name}</h2>
              <img src={weapon.image} alt={weapon.name} style={weaponImageStyles}/>
              <div style={weaponButtonsContainerStyles}>
                 <button onClick={onPreviousWeapon}>Previous Weapon</button>
                 <button onClick={onNextWeapon}>Next Weapon</button>
              </div>


           </div>
       )
    }


