import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 1600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 480px;
    gap: 2rem;
  }
`;

export const Card = styled.div`
  border-radius: 1rem;
  background: linear-gradient(135deg, #0d041e 0%, #000 100%);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  text-align: center;
  overflow: hidden;

  #img {
    width: 100%;
    display: block;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    transition: transform 0.4s ease;
  }

  p {
    width: 90%;
    margin-top: 0.4rem;
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    text-align: justify;
    color: #eaeaea;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px #3c0061;
  }

  &:hover #img {
    transform: scale(1.04);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
    &:hover #img { transform: none; }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  margin-top: auto;
  flex-wrap: wrap;

  a {
    font-size: 1.2rem;
    border-radius: 0.4rem;
    padding: 0.5rem 0.6rem;
    transition: all 0.4s;
    display: inline-flex;
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
  gap: 0.5rem;
  margin: 1rem 0;

  img {
    width: clamp(28px, 6vw, 40px);
    height: clamp(28px, 6vw, 40px);
    transition: transform 0.25s ease;
  }

  img:hover {
    transform: translateY(-3px);
  }
`;
