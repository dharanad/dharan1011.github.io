import React from 'react';
import {Card} from 'react-bootstrap';
const ProjectCard = ({name, techList, description, link}) => (
  <Card>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Link href={link}>Link</Card.Link>
    </Card.Body>
  </Card>
);
export default ProjectCard;
