import React from "react";
import {Card, Icon} from 'semantic-ui-react';

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.type} - {props.dimension}</Card.Meta>
      <Card.Content extra floated='right'>Residents: {props.residents.length}</Card.Content>
    </Card>
  )
}
