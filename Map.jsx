import React from 'react'
import styles from './Map.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Map() {

   const [searchParams,setSearchParams]=useSearchParams();
   const lat=searchParams.get('lat');
   const lng=searchParams.get('lng');
   const navigate=useNavigate();

  return (
    <div className={styles.mapContainer} onClick={()=>navigate("form")}>
     <h1> Map lat={lat} lng={lng}</h1>
     <button onClick={()=>setSearchParams({lat:23,lng:12})}>Change position</button>
    </div>
  )
}
