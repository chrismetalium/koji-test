import React from 'react';
import styled from 'styled-components';
import { InstantRemixing } from '@withkoji/vcc';

const instantRemixing = new InstantRemixing();

let name = instantRemixing.get(['settings', 'name']);
let title = instantRemixing.get(['settings', 'title']);
let logo = instantRemixing.get(['logo', 'logo']);

instantRemixing.onValueChanged((path, newValue) => {
	if (path[0] && path[1] && path[0] === 'settings' && path[1] === 'name') {
		name = newValue;
	}
});

instantRemixing.ready();

const Container = styled.div`
    background-color: red;
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
    max-width: 50vmin;
    max-height: 50vmin;
`;

class App extends React.Component {
	render() {
		return (
			<Container>
				<h1>{name}</h1>
				<h2>{title}</h2>
				<Image src={logo} />
			</Container>
		);
	}
}

export default App;
