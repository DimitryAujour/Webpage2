import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import css from './logos/css.png';
import html from './logos/html.png';
import js from './logos/js.jpg';
import react from './logos/React.png';
import node from './logos/node.png';
import graph from './logos/GraphQL.png';
import sql from './logos/sql.png';
import java from './logos/java.jpg';
import C_sharp from './logos/C_sharp.png';

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; // This makes sure the container takes at least the full height of the viewport
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  padding: 30px;
`;

const StyledImage = styled.img`
  width: 50px; // Makes image fill the cell
  height: auto; // Keeps the aspect ratio of the image
`;
const Title = styled.h1`
  text-align: center;
  margin: 0;
`;
const MotionTitle = motion(Title);
const MotionGridContainer = motion(GridContainer);


const ImageGrid = () => {
    return (
        <>
            <MotionTitle
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                Skills
            </MotionTitle>

            <MotionGridContainer
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Grid>
                    <StyledImage src={css} alt="CSS Logo" />
                    <StyledImage src={html} alt="HTML Logo" />
                    <StyledImage src={js} alt="JavaScript Logo" />
                    <StyledImage src={react} alt="React Logo" />
                    <StyledImage src={node} alt="Node.js Logo" />
                    <StyledImage src={graph} alt="GraphQL Logo" />
                    <StyledImage src={sql} alt="SQL Logo" />
                    <StyledImage src={java} alt="Java Logo" />
                    <StyledImage src={C_sharp} alt="C# Logo" />
                </Grid>
            </MotionGridContainer>
        </>
    );
};

export default ImageGrid;
