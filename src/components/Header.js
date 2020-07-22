import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = ({name, designation, organisation}) => (
  <Container>
    <Row>
      <Col xs={12}>
        <h1 className="display-2">{name}</h1>
      </Col>
    </Row>
    <Row className="flex-nowrap align-items-baseline">
      <Col xs="auto">
        <p className="h3">{designation}</p>
      </Col>
      <Col xs="auto" style={{padding: 0}}>
        <p className="h4">@</p>
      </Col>
      <Col xs="auto">
        <p className="h4">{organisation}</p>
      </Col>
    </Row>
  </Container>
);

Header.prototype = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  organisation: PropTypes.string.isRequired,
};

export default Header;
