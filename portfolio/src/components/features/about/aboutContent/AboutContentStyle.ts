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

export const About = styled.div<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
    `}
`;

export const SubTitle = styled.p<{ $isVisible: boolean }>`
  width: 50%;
  font-size: 1.3rem;
  margin: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeInUp} 0.8s ease forwards;
    `}

  .destaq {
    background: linear-gradient(90deg, #7B2FF7, #2983f0);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Image = styled.div<{ $isVisible: boolean }>`
  background-image: url(${Me});
  background-size: cover;
  background-position: center;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  box-shadow: 0 0 60px 1px #8805edff;
  opacity: 0;
  transform: scale(0.5);

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      /* zoom inicial */
      animation: ${zoomIn} 0.8s ease forwards, ${float} 3s ease-in-out 1.0s infinite;
      animation-fill-mode: forwards;
    `}
`;
