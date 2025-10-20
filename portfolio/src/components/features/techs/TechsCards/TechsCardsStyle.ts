import styled, { keyframes, css } from "styled-components";

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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
`;

export const Cards = styled.div<{ $isVisible: boolean }>`
  display: grid;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
  h2{
    font-size: 1.4rem;
  }
  /* Desktop / Notebook grande */
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

  /* Tablets / Notebooks médios */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  /* Celulares pequenos */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
