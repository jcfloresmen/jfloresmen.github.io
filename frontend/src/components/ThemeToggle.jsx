import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaLightbulb } from 'react-icons/fa';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;
`;

const String = styled.div`
  width: 3px; /* más grueso */
  height: 18px; /* un poco más largo */
  background-color: ${props => props.isDarkMode ? '#555' : '#222'}; /* colores más oscuros */
  border-radius: 2px;
  
  @media (max-width: 992px) {
    height: 12px;
  }
`;

const BulbWrapper = styled.div`
  transform: rotate(180deg);
  color: ${props => props.isDarkMode ? '#aaa' : '#888'}; /* tonos metálicos */
  font-size: 1.8rem; /* más grande y robusto */
  transition: all 0.3s ease;
  position: relative;
  
  @media (max-width: 992px) {
    font-size: 1.5rem;
  }
`;

const Glow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 28px;
  height: 28px;
  background: radial-gradient(circle, rgba(100,100,100,0.6) 0%, rgba(0,0,0,0) 70%);
  border-radius: 50%;
  opacity: ${props => props.isDarkMode ? 1 : 0.6}; /* efecto más sólido */
  box-shadow: ${props => props.isDarkMode ? '0 0 10px rgba(255,255,255,0.5)' : '0 0 8px rgba(50,50,50,0.5)'};
  transition: all 0.3s ease;
  z-index: -1;
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <ToggleContainer onClick={toggleTheme}>
      <String isDarkMode={isDarkMode} />
      <BulbWrapper isDarkMode={isDarkMode}>
        <Glow isDarkMode={isDarkMode} />
        <FaLightbulb />
      </BulbWrapper>
    </ToggleContainer>
  );
};

export default ThemeToggle;
