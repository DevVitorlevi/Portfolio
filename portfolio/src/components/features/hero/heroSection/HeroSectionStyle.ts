import styled, { keyframes } from 'styled-components';

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(48px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 4rem;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding: 6rem 2rem 3rem;
  }

  @media screen and (max-width: 480px) {
    padding: 5rem 1.25rem 2.5rem;
    min-height: auto;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 9999;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    gap: 2rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  flex: 1;
  min-width: 0;

  animation: ${fadeSlideUp} 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 0.15s;

  @media screen and (max-width: 1024px) {
    align-items: center;
    text-align: center;
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.4rem;

  h1 {
    font-size: clamp(1.6rem, 4vw + 0.5rem, 2.6rem);
    font-weight: 300;
    margin: 0;
    background: linear-gradient(90deg, #c4b5fd, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    line-height: 1.2;
  }

  p {
    font-size: clamp(1.05rem, 2vw, 1.5rem);
    font-weight: 300;
    color: #fff;
    margin: 0;
  }

  p.split-parent {
    font-size: clamp(1.2rem, 3vw, 1.6rem);
  }

  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`;

export const Bio = styled.p`
  font-size: clamp(0.95rem, 1vw + 0.4rem, 1.05rem);
  line-height: 1.75;
  color: #d1d5db;
  margin: 0;
  max-width: 560px;
  text-align: justify;

  @media screen and (max-width: 1024px) {
    text-align: center;
    max-width: 600px;
  }

  @media screen and (max-width: 480px) {
    text-align: left;
  }
`;

export const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(90deg, #7c3aed55, #7c3aed44);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  width: fit-content;
  transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  letter-spacing: 0.03em;

  &:hover {
    background: #4c1d95;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px -8px #7c3aedaa;
  }

  &:active {
    transform: translateY(0);
  }

  @media screen and (max-width: 1024px) {
    align-self: center;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const RightSide = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    order: 1;
    width: 100%;
  }
`;

export const PhotoFrame = styled.div`
  width: clamp(180px, 28vw, 380px);
  height: clamp(180px, 28vw, 380px);
  border-radius: 50%;

  border: 3px solid transparent;
  background-clip: padding-box;
  box-shadow:
    0 0 0 3px #7c3aed44,
    0 0 40px 10px #7c3aed55,
    0 0 80px 20px #4c1d9522;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    border: 2px solid #7c3aed33;
    pointer-events: none;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    border-radius: 50%;
  }

  animation:
    ${fadeSlideUp} 0.9s cubic-bezier(0.22, 1, 0.36, 1) both,
    ${float} 4s ease-in-out 0.9s infinite;

  @media screen and (max-width: 480px) {
    width: clamp(160px, 55vw, 240px);
    height: clamp(160px, 55vw, 240px);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
