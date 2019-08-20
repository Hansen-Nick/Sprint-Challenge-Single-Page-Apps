import React from "react";
import {Card, Icon} from 'semantic-ui-react';

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Header textAlign='center'>{props.name}</Card.Header>
      <Card.Meta>{props.releaseDate}</Card.Meta>
      <Card.Content extra textAlign='right'>Episode Number: {props.epNumber}</Card.Content>
    </Card>
  )
}
