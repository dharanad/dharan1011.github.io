import React from 'react';
import './App.css';
import './App.scss';
import {Container, Row} from 'react-bootstrap';
import Header from './Header';
import Skills from './Skills';

function App() {
  const userInfo = {
    name: 'Dharan Aditya',
    designation: 'Asst System Engineer',
    organisation: 'TCS',
  };
  const skills = [
    {skill: 'React', type: 'primary'},
    {skill: 'Java', type: 'primary'},
    {skill: 'C++', type: 'primary'},
    {skill: 'Python', type: 'primary'},
    {skill: 'Android', type: 'secondary'},
    {skill: 'Nginx', type: 'secondary'},
  ];
  return (
    <Container>
      <Row>
        <Header {...userInfo} />
      </Row>
      <Row>
        <Skills skills={skills} />
      </Row>
    </Container>
  );
}

export default App;
