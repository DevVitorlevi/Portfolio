import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: stretch;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1600px;
`;
export const Card = styled.div`
  border: 1px solid white;
  border-radius: 1rem;
  text-align: center;
  background-color: transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  display: flex;
  flex-direction: column; /* permite organizar elementos verticalmente */
  
  img {
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.4rem;
  }

  p {
    margin-left: 1rem;
    padding: 1rem;
    font-size: 0.95rem;
    line-height: 1.4;
    text-align: left;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  margin-top: auto;

  a{
    font-size: 1.2rem;
    border-radius: .4rem;
    padding: .4rem;
    transition: all.4s;
  }
  .web{
    background-color: #073b8aff;
  }
  .git{
    background-color: #24292E;
  }
  .web:hover{
    box-shadow: 0 0 12px 8px #073b8aff;
  }
  .git:hover{
    box-shadow: 0 0 12px 8px #24292E;
  }
  
`;

