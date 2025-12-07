import styled from 'styled-components';

export const About = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  gap: 4rem;
  opacity: 1;
  transition: opacity 0.4s ease;
  scroll-margin-top: 100px;

  @media screen and (max-width: 1180px) {
    flex-direction: column-reverse;
    height: auto;
    padding: 3rem 1rem;
    gap: 2.5rem;
  }
`;

export const SubTitle = styled.p`
  width: 45%;
  font-size: clamp(1rem, 1.2vw + 0.5rem, 1.4rem);
  line-height: 1.8rem;
  margin: 0;
  color: #f5f5f5;
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: justify;

  @media screen and (max-width: 1180px) {
    width: 90%;
    line-height: 1.6rem;
  }
`;
