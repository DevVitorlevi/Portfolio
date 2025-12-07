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
    background: linear-gradient(135deg, #2b086b 0%, #290b5c  100%);
}
    
    `
export const Data = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
p {
    font-size: 1.2rem;
}
@media screen and (max-width:768px){
    p{ font-size:0.8rem;
    }
}
`