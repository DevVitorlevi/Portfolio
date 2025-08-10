import styled, { keyframes, css } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  min-height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: center; 
  align-items: center;     
`;

export const Cards = styled.div<{ $isVisible: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 50vw;

  & > * {
    opacity: 0;
    transform: translateY(20px);
    ${({ $isVisible }) =>
        $isVisible &&
        css`
        animation: ${fadeInUp} 0.6s ease forwards;
      `}
  }
`;
