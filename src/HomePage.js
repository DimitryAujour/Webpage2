import React from 'react';
import styled from 'styled-components';
import { motion} from 'framer-motion';
import me from './me.jpg';
import NewSection from "./NewSection";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 2rem;
  }
`;

const ProfileImage = styled(motion.img)`
  border-radius: 9999px; /* equivalent to Tailwind's rounded-full */
  width: 8rem; /* equivalent to Tailwind's w-32 */
  height: 8rem; /* equivalent to Tailwind's h-32 */
  @media (min-width: 768px) {
    width: 12rem; /* equivalent to Tailwind's md:w-48 */
    height: 12rem; /* equivalent to Tailwind's md:h-48 */
  }
`;

const TextContainer = styled(motion.div)`
  text-align: center;
  margin-top: 1.5rem; /* equivalent to Tailwind's mt-6 */
  max-width: 40rem; /* to prevent text from spanning too wide */
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 2rem; /* equivalent to Tailwind's md:ml-8 */
  }
`;

const Name = styled.h1`
  font-size: 1.5rem; /* equivalent to Tailwind's text-2xl */
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.25rem; /* equivalent to Tailwind's text-4xl */
  }
`;

const Description = styled.p`
  margin-top: 0.5rem; /* equivalent to Tailwind's mt-2 */
  font-size: 0.875rem; /* equivalent to Tailwind's text-sm */
  @media (min-width: 768px) {
    font-size: 1rem; /* equivalent to Tailwind's text-base */
  }
`;

const HomePage = () => {
    return (
        <>
        <Container>
            <ProfileImage
                src={me}
                alt="Dimitry Aujour"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            />
            <TextContainer
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Name>Dimitry Aujour</Name>
                <Description>
                    I am a junior developer who has recently graduated from Lasalle College, eager to embark on a journey to enhance my programming skills.
                    Beyond my passion for coding, I find inspiration in the gym, where I pursue my fitness goals.
                    I also have a profound interest in philosophy, exploring the depths of thought, and I am driven by a strong desire to use my skills to make a positive impact on people's lives.
                    As I seek opportunities to grow and contribute, I bring a unique blend of technical aptitude and a compassionate, philosophical perspective to my work
                </Description>
            </TextContainer>

        </Container>
    <NewSection />
    </>
    );
};

export default HomePage;
