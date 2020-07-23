import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Container} from 'react-bootstrap';
import SkillBadge from './SkillBadge';

const Skills = ({skills}) => {
  return (
    <Container>
      <Row>
        <Col xs="auto" style={{paddingRight: 0}} />
        {skills.map(({skill, type, info}, index) => (
          <Col xs="auto" style={{padding: 2}}>
            <SkillBadge type={type} skill={skill} info={info} key={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Skills.prototype = {
  skills: {
    skill: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  },
};

export default Skills;
