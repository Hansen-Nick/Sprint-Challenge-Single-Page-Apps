import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import axios from 'axios'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          setCharacterList(res.data.results);
        })
        .catch(err => console.log(err))
  }, []);

  console.log(characterList)

  return (
    <section className="character-list grid-view">
      {characterList.map( (character, index) => <CharacterCard key={index} image={character.image} name={character.name} location={character.location.name} origin={character.origin.name} species={character.species} status={character.status} episodes={character.episode}/>)}
    </section>
  );
}
