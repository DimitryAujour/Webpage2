import React from 'react';
import styled from 'styled-components';
import ImageGrid from './ImageGrid';
import Accomplishments from './Accomplishments';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
   
  }
`;
const StyledImageGrid = styled(ImageGrid)`
  flex: 1; // Takes up half of the space
  // additional styles...
`;

const StyledAccomplishments = styled(Accomplishments)`
  flex: 1; // Takes up the other half
  // additional styles...
`;

const NewSection = () => {
    return (
        <SectionContainer>
            <StyledImageGrid
            />
            <StyledAccomplishments />
        </SectionContainer>
    );
};

export default NewSection;
