import React from 'react';
import styled from 'styled-components';
import ImageGrid from './ImageGrid';
import Accomplishments from './Accomplishments';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NewSection = () => {
    return (
        <SectionContainer>
            <ImageGrid />
            <Accomplishments />
        </SectionContainer>
    );
};

export default NewSection;
