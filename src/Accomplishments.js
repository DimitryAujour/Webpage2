import React from 'react';
import styled from 'styled-components';
import LaSalle from './logos/LaSalle.png';
import Cspi from './logos/Cspi.png';
import Mimo from './logos/Mimo.png';
import cje from './logos/CJECDN.png';

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center; // Align image and text vertically
  gap: 10px; // Space between the image and the text
  // Add other styles as needed
`;
const ListImage = styled.img`
  width: 40px; // Adjust the size as needed
  height: auto; // Adjust the size as needed
  // Add other styles as needed
`;


const Title = styled.h1`
  text-align: center;
  margin: 0;
`;

const Accomplishments = () => {
    return (
        <>
        <Title>Recent Accomplishments</Title>
        <ListContainer>


            <ul>
                <ListItem>
                    <ListImage src={Cspi} alt="Icon" />
                    Stage au Centre de services scolaire de la Pointe-de-l'Île
                comme programmeur analyste du 30 Octobre au</ListItem>
                <ListItem>
                    <ListImage src={LaSalle} alt="Icon" />
                    Diplôme AEC comme programmeur analyste du college Lasalle.</ListItem>
                <ListItem>
                    <ListImage src={Mimo} alt="Icon" />
                    Certificat de terminaison du cours de full stack developper mimo.</ListItem>
<ListItem>
    <ListImage src={cje} alt="Icon" />
    stage comme infographiste au carefour jeunesse de côte des neiges.</ListItem>
            </ul>
        </ListContainer>
        </>
    );
};

export default Accomplishments;
