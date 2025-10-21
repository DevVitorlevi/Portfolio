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
  gap: 2rem;
  width: 80vw;
  margin: 0 auto;

  grid-template-columns: repeat(4, 1fr);

  & > * {
    opacity: 0;
    transform: translateY(20px);
    ${({ $isVisible }) =>
      $isVisible &&
      css`
        animation: ${fadeInUp} 0.6s ease forwards;
      `}
  }

  @media (max-width: 1570px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
`;
