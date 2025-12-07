import styled from 'styled-components';

export const ItemWrapper = styled.div<{ delay: number; isLeft: boolean }>`
  position: relative;
  margin-bottom: 60px;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  animation-delay: ${props => props.delay};
  width: calc(50% - 40px);
  margin-left: ${props => props.isLeft ? '0' : 'auto'};
  margin-right: ${props => props.isLeft ? 'auto' : '0'};

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: '';
    position: absolute;
    ${props => props.isLeft ? 'right: -42px' : 'left: -42px'};
    top: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0d041e 0%, #000 100%);
    border: 4px solid #0f0820;
    box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.3), 0 0 20px rgba(168, 85, 247, 0.6);
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    ${props => props.isLeft ? 'right: -20px' : 'left: -20px'};
    top: 28px;
    width: 20px;
    height: 2px;
    background: linear-gradient(${props => props.isLeft ? '90deg' : '-90deg'}, #a78bfa 0%, transparent 100%);
  }
  @media  (max-width: 600px) {
    width: 40rem;
  }

  @media (max-width: 768px) {
    width: 40rem;
    margin-left: 0 !important;
    margin-right: 0 !important;
    
    &::before {
      left: -32px !important;
      right: auto !important;
      width: 16px;
      height: 16px;
    }

    &::after {
      left: -12px !important;
      right: auto !important;
    }
  }
`;

export const Card = styled.div`
  background: linear-gradient(135deg, #0d041e 0%, #000 100%);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(168, 85, 247, 0.2);
  transition: all 0.4s ease;
  border: 1px solid rgba(168, 85, 247, 0.1);

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 50px rgba(168, 85, 247, 0.3), 0 0 0 1px rgba(168, 85, 247, 0.4);
    border-color: rgba(168, 85, 247, 0.3);
  }
`;

export const Period = styled.div`
  font-size: 0.9rem;
  color: white;
  font-weight: 600;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;

  &::before {
    content: '🗓️';
    font-size: 1rem;
    filter: grayscale(0.3);
  }
`;

export const JobTitle = styled.h3`
  font-size: 1.4rem;
  color: #f3e8ff;
  margin: 0 0 16px 0;
  font-weight: 700;
  line-height: 1.4;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: white;
  line-height: 1.8;
  margin: 0;
`;

export const Badge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #2b086b 0%, #290b5c  100%);
  color: white;
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);
`;