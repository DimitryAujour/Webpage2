import React from 'react';
import styled from 'styled-components';
import Linkedin from './logos/Linkedin.png';
import Deepstash from './logos/Deepstash.png';
import Github from './logos/GitHub.png';
import css from "./logos/css.png";

const HeaderBar = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
      background-color: transparent;
  width: 100%;
  position: fixed; // optional: to keep it at the top always
  top: 0;
  left: 0;
`;

const Icons = styled.div`
align-items: flex-end`;
const Icon = styled.img`
  height: 20px; // Adjust size as needed
  margin-right: 10px; // Spacing between icons
  
`;

const Clock = styled.div`
margin-right: 30px`;

const App = () => {
        const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString());

        React.useEffect(() => {
                const timerId = setInterval(() => {
                        setCurrentTime(new Date().toLocaleTimeString());
                }, 1000);

                return () => clearInterval(timerId); // Clean up the interval on component unmount
        }, []);
        return (
            <HeaderBar>
                    <Icons>
                        <a href="https://github.com/DimitryAujour" target="_blank" rel="noopener noreferrer">

                        <Icon src={Github} alt="GitHub Logo" />
                        </a>
                        <a href="https://deepstash.com/u/dimitryaujour" target="_blank" rel="noopener noreferrer">

                        <Icon src={Deepstash} alt="Deepstash Logo" />
                        </a>
                        <a href="https://www.linkedin.com/in/dimitry-aujour-34440911b/" target="_blank" rel="noopener noreferrer">
                            <Icon src={Linkedin} alt="LinkedIn Logo" />
                        </a>                            <span>🌐</span>
                            <span>🔔</span>
                            <span>🔍</span>
                    </Icons>
                    <Clock>
                            {currentTime}
                    </Clock>
            </HeaderBar>
        );
};

export { App as Nav};
