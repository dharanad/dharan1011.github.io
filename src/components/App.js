import React from 'react';
import './App.css';
import './App.scss';
import {Container, Row, CardColumns, Col} from 'react-bootstrap';
import Header from './Header';
import Skills from './Skills';
import ProjectCard from './ProjectCard';

function App() {
  const userInfo = {
    name: 'Dharan Aditya',
    designation: 'Asst System Engineer',
    organisation: 'TCS',
  };
  const skills = [
    {skill: 'React', type: 'primary', info: 'foobar'},
    {skill: 'Java', type: 'primary', info: 'foobar'},
    {skill: 'C++', type: 'primary', info: 'foobar'},
    {skill: 'Python', type: 'primary', info: 'foobar'},
    {skill: 'Android', type: 'secondary', info: 'foobar'},
    {skill: 'Nginx', type: 'secondary', info: 'foobar'},
  ];
  const projects = [
    {
      name: 'algorun',
      techList: ['node.js', 'react.js'],
      description: 'Online C++ Code Ide and Compiler',
      link: 'https://algorun.foobar.works',
    },
  ];
  return (
    <Container>
      <Row>
        <Header {...userInfo} />
      </Row>
      <Row>
        <Skills skills={skills} />
      </Row>
      <Row>
        <Container>
          <Row>
            <Col>
              <div className="h4">Projects</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardColumns>
                {projects.map((project, index) => (
                  <ProjectCard {...project} key={index} />
                ))}
              </CardColumns>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default App;
