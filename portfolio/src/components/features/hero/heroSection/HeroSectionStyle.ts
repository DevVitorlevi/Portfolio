import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: transparent;
`;

export const Content = styled.div`
  position: relative; /* em vez de absolute */
  z-index: 9999;
  color: #fff;
  font-size: 5rem;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h1 {
    font-weight: 300;

    /* Gradiente no texto */
    background: linear-gradient(90deg, #5d07e7ff, #0514b6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  @media screen and (max-width:710px){
    h1{
      font-size: 1.8rem;
    }
    p{
      font-size: 1.8rem;
    }
  }
  @media screen and (min-width:650px) and (max-width:992px){
    h1{
      font-size: 3.4rem;
    }
    p{
      font-size: 3.4rem;
    }
  }
`;

