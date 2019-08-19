import React from "react";
import {Card, Image, Icon} from 'semantic-ui-react'

const CharacterCard = (props) => {
  return (
    <Card> 
      <Image src={props.image}/>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{`${props.species} ${props.status}`}</Card.Meta>
      <Card.Description><strong>Location:</strong> {props.location}<br></br><strong>Origin:</strong> {props.origin}</Card.Description>
      <Card.Content extra>
        <a>
          <Icon name='user'></Icon>
          Episodes: {props.episodes.length}
        </a>
      </Card.Content>
    </Card>
  );
}

export default CharacterCard
