import styled, { keyframes, css } from 'styled-components';

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
  font-size: 2rem;
  margin: 10rem 0;
  opacity: 0;

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
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 1px solid white;
  box-shadow: 0 0 60px 1px #8805edff;
  opacity: 0;
  transform: scale(0.5);

  ${({ $isVisible }) =>
        $isVisible &&
        css`
      animation: ${zoomIn} 0.8s ease forwards;
      animation-delay: 2s; /* começa depois do texto */
    `}
`;
