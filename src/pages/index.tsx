import * as React from "react"
import { IWeapon, WeaponContainer } from "../components/weapon-container";
import { useEffect, useState } from "react";

import weapons from "../assets/weapons.json";
import { WeaponsService } from "../services/weapons-service";

// styles
const pageStyles = {
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
   display: "flex",
   justifyContent: "center",
   margin: "0",
}

const weaponsService = new WeaponsService(weapons)

// markup
const IndexPage = () => {
   const [filteredWeapons, setFilteredWeapons] = useState<IWeapon[]>(weapons);
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

   return (
       <main style={pageStyles}>
          <WeaponContainer weapon={currentWeapon} onNextWeapon={onNextWeapon} onPreviousWeapon={onPreviousWeapon}/>
       </main>
   )
}

export default IndexPage
