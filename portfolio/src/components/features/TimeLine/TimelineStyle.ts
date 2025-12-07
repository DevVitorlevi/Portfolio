import styled from 'styled-components';

export const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background:transparent;
  min-height: 100vh;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    z-index: -20;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #290b5c 0%, #0e0322 50%, #2b086b 100%);
    transform: translateX(-50%);
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
  }

  @media (max-width: 768px) {
    padding-left: 40px;
    
    &::before {
      left: 20px;
      transform: translateX(0);
    }
  }
`;