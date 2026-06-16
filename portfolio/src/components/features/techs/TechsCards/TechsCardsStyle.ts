import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  min-height: 0vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;

  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`;

export const CategoryGrid = styled.div<{ $isVisible: boolean }>`
  display: grid;
  width: 100%;
  max-width: 1200px;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const CategoryCard = styled.div`
  background: #0d0d0f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeInUp} 0.6s ease forwards;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(124, 58, 237, 0.4);
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1.5rem;
`;

export const IconCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
`;

export const CategoryTitle = styled.h2`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  font-weight: 700;
  color: #fff;
`;

export const TechsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  h3 {
    font-size: clamp(0.85rem, 2.5vw, 1rem);
    margin-top: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`;
