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
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
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
    grid-template-columns: repeat(2, 500px);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 360px);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 80vw);
    justify-content: center;
    gap: 2rem;
  }
`;

export const Card = styled.div`
  border-radius: 1rem;
  background-color: transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center; /* centraliza conteúdo horizontalmente */
  justify-content: space-between;
  height: 100%;
  text-align: center;

  #img {
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  /* ======== DESCRIÇÃO ======== */
  p {
    width: 90%;
    margin-top: .4rem;
    font-size: 1rem;
    text-align: justify;
    color: #eaeaea;
    display: flex;
    align-items: center; /* centraliza verticalmente o texto */
    justify-content: center;
    flex-grow: 1; /* ocupa o espaço restante do card */
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

export const StackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 1rem 0;

  img {
    width: 40px;
    height: 40px;
  }
`;
