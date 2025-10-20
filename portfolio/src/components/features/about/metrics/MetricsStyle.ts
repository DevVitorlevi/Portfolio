import styled from 'styled-components';

export const Metricas = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding-bottom: 10px;
    width: 100%;
    gap: 1rem;

&::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #7B2FF7, #2983f0);
}
    
    `
export const Data = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
p {
    font-size: 1.4rem;
}
@media screen and (max-width:768px){
    p{ font-size:1rem;
    }
}
`