import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #808080 5%, #ffffff 100%);
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
  gap: clamp(2rem, 5vw, 4rem);
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
`;

const ImageSection = styled.div`
  position: relative;
  justify-content: center;
    display: flex;

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.1);
    z-index: -1;
    border-radius: 8px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #333, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  
  a {
    color: #333;
    transition: all 0.3s ease;
    
    &:hover {
      color: #0066cc;
      transform: translateY(-2px);
    }
  }
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <ContentWrapper>
        <ImageSection>
          <Image
            src="/me.jpg"
            alt="Me!"
            loading="lazy"
          />
        </ImageSection>
        <ContentSection>
          <Title>Peter Edin</Title>
          <SocialLinks>
            <a href="https://github.com/edinpeter" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} aria-label="GitHub Profile" />
            </a>
            <a href="https://linkedin.com/in/edinpeter" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} aria-label="LinkedIn Profile" />
            </a>
          </SocialLinks>
        </ContentSection>
      </ContentWrapper>
    </AppContainer>
  );
};

export default App; 