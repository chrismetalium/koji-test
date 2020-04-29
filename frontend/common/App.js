import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #395b88;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    text-align: center;
    color: #fcfcfc;
`;

const Image = styled.img`
    max-width: 60%;
    max-height: 60%;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <h1>{'Welcome to Your App'}</h1>
        <Image src={'https://images.koji-cdn.com/d9c6b38e-08c4-4faf-ae8e-01082c41a0fb/3f83q-9634d620e97345a6b250ca2feb7e5a2e.png'} />
      </Container>
    );
  }
}

export default App;
