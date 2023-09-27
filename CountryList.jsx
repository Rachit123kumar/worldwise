import React from 'react'
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import CountryItem from "./CountryItem"
import Message from './Message'

export default function CountriesList({cities,isLoading}) {



if(isLoading)return <Spinner/>
if(!cities.length)return <Message message="Click on the map to add your first cities"/>
const countries=cities.reduce((arr,city)=>
{if(!arr.map((el)=>el.country).includes(city.country)){
  return [...arr,{country:city.country,emoji:city.emoji}]
}
{
return arr;
}
}

,[]);

  return (
  <ul className={styles.countryList}>
{countries.map((country,i)=><CountryItem  country={country} key={i}/>)}
  </ul>
  )
}
