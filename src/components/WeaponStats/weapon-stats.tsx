import React, { CSSProperties } from "react"
import { IWeapon } from "../../shared/types"
import { weaponSumAttack } from "../../services/weapon-sum-attack";

interface IWeaponStatsProps {
   weapon: IWeapon
}

const weaponStatsContainerStyle: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   border: '1px solid #ccc',
   maxWidth: 'fit-content',
   minWidth: 'fit-content',
   textAlign: 'center',
};

const weaponHeadingStyles: CSSProperties = {
   width: '360px'
};

export const WeaponStats = ({weapon}: IWeaponStatsProps) => {
   return (
       <div style={weaponStatsContainerStyle}>
          <h2 style={weaponHeadingStyles}>Weapon Stats</h2>
          <div>
             <h3>
                Attack
             </h3>
             <ul>
                {
                   //   make an array out of weapon.attack object
                   Object.entries(weapon.attack).map(([key, value]) => {
                      return (
                          <li key={key}>
                             {key}: {value}
                          </li>
                      )
                   })
                }
                <li>
                   <strong>Total:</strong> {weaponSumAttack(weapon)}
                </li>
             </ul>
          </div>
       </div>
   )
}
