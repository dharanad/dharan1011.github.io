import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = ({name, designation, organisation}) => (
  <React.Fragment>
    <Row>
      <Col xs={12}>
        <h1 className="display-1">{name}</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <p className="h3">{designation}</p>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <p className="h5">{organisation}</p>
      </Col>
    </Row>
  </React.Fragment>
);

Header.prototype = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  organisation: PropTypes.string.isRequired,
};

export default Header;
