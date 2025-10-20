import styled, { keyframes, css } from 'styled-components';
import Me from "../../../../assets/images/me.jpg";

// animação de fade do texto subindo
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// animação de zoom inicial da imagem
const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// animação de flutuação contínua da imagem
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`;

export const About = styled.section<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  gap: 4rem;
  opacity: 0;
  transition: opacity 0.4s ease;
  scroll-margin-top: 100px; /* evita corte pelo header fixo */

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
    `}

  /* layout vertical em telas menores */
  @media screen and (max-width: 1180px) {
    flex-direction: column-reverse;
    height: auto;
    padding: 3rem 1rem;
    gap: 2.5rem;
  }
`;

export const SubTitle = styled.p<{ $isVisible: boolean }>`
  width: 45%;
  font-size: clamp(1rem, 1.2vw + 0.5rem, 1.4rem);
  line-height: 1.8rem;
  margin: 0;
  color: #f5f5f5;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: justify;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeInUp} 0.8s ease forwards;
    `}

  @media screen and (max-width: 1180px) {
    width: 90%;
    line-height: 1.6rem;
  }
`;

export const Image = styled.div<{ $isVisible: boolean }>`
  background-image: url(${Me});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: clamp(220px, 40vw, 450px);
  height: clamp(220px, 40vw, 450px);
  border-radius: 50%;
  box-shadow: 0 0 50px 2px #8805edff;
  opacity: 0;
  transform: scale(0.5);

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${zoomIn} 0.8s ease forwards, ${float} 3s ease-in-out 1s infinite;
      animation-fill-mode: forwards;
    `}

  @media screen and (max-width: 1180px) {
    width: clamp(180px, 60vw, 380px);
    height: clamp(180px, 60vw, 380px);
  }

  @media screen and (max-width: 600px) {
    width: clamp(150px, 70vw, 300px);
    height: clamp(150px, 70vw, 300px);
  }
`;
