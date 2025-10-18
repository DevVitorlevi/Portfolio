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

export const Cards = styled.div<{ $isVisible: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 80vw;

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
export const CardContent = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.3rem;
    flex-grow: 1;
    font-size: 1.1rem;
  }

  h2 {
    font-size: 1.8rem;
    margin-top: 2rem;
    text-align: center;
  }
`