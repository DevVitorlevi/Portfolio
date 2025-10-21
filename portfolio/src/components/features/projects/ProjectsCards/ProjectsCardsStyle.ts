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
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Cards = styled.div<{ $isVisible?: boolean }>`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  justify-content:center;
  gap: 3rem;
  width: 100%;
  max-width: 1600px;

  & > * {
    opacity: 0;
    transform: translateY(20px);
    ${({ $isVisible }) =>
      $isVisible &&
      css`
        animation: ${fadeInUp} 0.6s ease forwards;
      `}
  }

  /* ======= RESPONSIVIDADE ======= */
  @media (max-width: 1570px) {
    grid-template-columns: repeat(2,500px);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 360px);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1,80vw);
    justify-content:center;
    gap: 2rem;
  }
`;

export const Card = styled.div`
  border-radius: 1rem;
  text-align: center;
  background-color: transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  p {
    margin-left: 1rem;
    padding: 1rem;
    font-size: 0.95rem;
    line-height: 1.4;
    text-align: left;
    flex-grow: 1;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px #3c0061;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  margin-top: auto;

  a {
    font-size: 1.2rem;
    border-radius: 0.4rem;
    padding: 0.4rem;
    transition: all 0.4s;
  }

  .web {
    background-color: #073b8a;
  }
  .git {
    background-color: #24292e;
  }

  .web:hover {
    box-shadow: 0 0 12px 8px #073b8a;
  }
  .git:hover {
    box-shadow: 0 0 12px 8px #24292e;
  }
`;
