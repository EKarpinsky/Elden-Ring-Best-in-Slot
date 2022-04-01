import * as React from "react"
import { WeaponContainer } from '../components/WeaponContainer/weapon-container'
import { useEffect, useState } from "react";

import weapons from "../shared/assets/weapons.json";
import { WeaponsService } from "../services/weapons-service";
import { IPlayerStats, IWeapon } from "../shared/types";
import { PlayerStatsForm } from "../components/PlayerStatsForm/player-stats-form";

/**
 * Styles
 */

const pageStyles = {
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   margin: "0",
   flexWrap: "wrap" as "wrap",
}

const sortedWeapons = WeaponsService.sortWeapons(weapons);

/**
 * Markup
 */

const IndexPage = () => {
   const [filteredWeapons, setFilteredWeapons] = useState<IWeapon[]>(sortedWeapons);
   const [currentWeaponIndex, setCurrentWeaponIndex] = useState<number>(0);
   const [currentWeapon, setCurrentWeapon] = useState<IWeapon>(filteredWeapons[currentWeaponIndex]);

   const onNextWeapon = async () => {
      setCurrentWeaponIndex(currentWeaponIndex + 1);
   };

   const onPreviousWeapon = async () => {
      setCurrentWeaponIndex(currentWeaponIndex - 1);
   };

   useEffect(() => {
      const currentWeapon = filteredWeapons[currentWeaponIndex];
      console.log(currentWeaponIndex);
      fetch(currentWeapon.image).then(res => res.blob().then(blob => {
         const blobUrl = URL.createObjectURL(blob);
         setCurrentWeapon({
            ...currentWeapon,
            image: blobUrl,
         });
      }));
   }, [currentWeaponIndex]);

   function onStatsSubmit(playerStats: IPlayerStats) {
      const filteredWeapons = WeaponsService.filterWeapons(sortedWeapons, playerStats);
      // const sortedWeapons = WeaponsService.sortWeapons(filteredWeapons);
      console.log(filteredWeapons);
      setFilteredWeapons(filteredWeapons);
      setCurrentWeapon(filteredWeapons[0]);
   }

   return (
       <main style={pageStyles}>
          <PlayerStatsForm onSubmit={onStatsSubmit}/>
          <WeaponContainer weapon={currentWeapon} onNextWeapon={onNextWeapon} onPreviousWeapon={onPreviousWeapon}
                           weaponIndex={currentWeaponIndex} weaponArrayLength={filteredWeapons.length}/>
       </main>
   )
}

export default IndexPage
