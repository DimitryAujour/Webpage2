import React, { useState } from 'react';
import styled from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion';
import me from './me.jpg';
import NewSection from "./NewSection";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  @media (min-width: 768px) {
    flex-direction: column;
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
  background-color: rgba(255, 255, 255, 0.4);
  margin-top: 1.5rem; /* equivalent to Tailwind's mt-6 */
  max-width: 40rem; /* to prevent text from spanning too wide */
  border-radius: 50px;
  @media (min-width: 768px) {
    margin-bottom: 30px;
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
  padding: 5px;
  margin-top: 0.5rem; /* equivalent to Tailwind's mt-2 */
  font-size: 10px; /* equivalent to Tailwind's text-sm */
  @media (min-width: 768px) {
    font-size: 1rem; /* equivalent to Tailwind's text-base */
  }
`;

const HomePage = () => {
    const [activeComponent, setActiveComponent] = useState('home');
    const handleIconClick = () => {
        setActiveComponent('newSection');
    };

    return (
        <>
            <AnimatePresence>
                {activeComponent === 'home' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
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
                <Description >
                    I am a junior developer who has recently graduated from Lasalle College, eager to embark on a journey to enhance my programming skills.
                    Beyond my passion for coding, I find inspiration in the gym, where I pursue my fitness goals.
                    I also have a profound interest in philosophy, exploring the depths of thought, and I am driven by a strong desire to use my skills to make a positive impact on people's lives.
                    As I seek opportunities to grow and contribute, I bring a unique blend of technical aptitude and a compassionate, philosophical perspective to my work
                </Description>
            </TextContainer>

            <TextContainer
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Description >
                    If you are a employer and you are short in time then you can download my resume here! <br></br>
                    click <b><a href={"https://drive.google.com/file/d/1Gg81MmLvBkWWOBw4HTgHbTPiN2FH44Bw/view?usp=sharing} </b> to download my resume on Google Drive"}>here</a></b>
                </Description>
            </TextContainer>

        </Container>
                    </motion.div>
                )}
                {activeComponent === 'newSection' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <NewSection  />
                    </motion.div>
                )}
            </AnimatePresence>
            <Footer setActiveComponent={setActiveComponent} />



        </>
    );
};

export default HomePage;
