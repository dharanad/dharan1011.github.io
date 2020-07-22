import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Badge, Container} from 'react-bootstrap';
const Skills = ({skills}) => (
  <Container>
    <Row>
      <Col xs="auto" style={{paddingRight: 0}} />
      {skills.map(({skill, type}, index) => (
        <Col xs="auto" style={{padding: 2}}>
          <Badge pill variant={type} key={index}>
            {skill}
          </Badge>
        </Col>
      ))}
    </Row>
  </Container>
);
Skills.prototype = {
  skills: {
    skill: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  },
};
export default Skills;
