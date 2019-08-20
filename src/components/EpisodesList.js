import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodesCard from './EpisodesCard'

export default function LocationsList() {
    const [episodesList, setEpisodesList] = useState([])

    useEffect(() => {
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios.get('https://rickandmortyapi.com/api/location/')
          .then(res => {
            setEpisodesList(res.data.results);
          })
          .catch(err => console.log(err))
    }, []);
  
    return (
      <section className="character-list grid-view">
      {episodesList.map( (episode, index) => <EpisodesCard key={index} epNumber={episode.id} releaseDate={episode.created} name={episode.name} />)}
      </section>
    );
}

