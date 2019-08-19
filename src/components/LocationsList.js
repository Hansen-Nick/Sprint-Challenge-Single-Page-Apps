import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard'

export default function LocationsList() {
    const [locationList, setLocationList] = useState([])

    useEffect(() => {
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios.get('https://rickandmortyapi.com/api/location/')
          .then(res => {
            setLocationList(res.data.results);
          })
          .catch(err => console.log(err))
    }, []);
  
    console.log(locationList)
  
    return (
      <section className="character-list grid-view">
        {locationList.map( (location, index) => <LocationCard key={index} name={location.name} dimension={location.dimension} type={location.type} residents={location.residents} />)}
      </section>
    );
}

