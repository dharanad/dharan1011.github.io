import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Header from './Header';

function App() {
  const [userInfo] = useState({
    name: 'Dharan Aditya',
    designation: 'Asst System Engineer',
    organisation: 'TCS',
  });
  return (
    <Container>
      <Header {...userInfo} />
    </Container>
  );
}

export default App;
