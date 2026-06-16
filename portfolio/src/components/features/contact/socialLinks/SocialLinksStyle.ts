import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  gap: clamp(0.6rem, 2vw, 1rem);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: clamp(40px, 8vw, 60px);
    transition: transform 0.25s ease, filter 0.25s ease;
  }

  img:hover {
    transform: translateY(-4px) scale(1.08);
    filter: drop-shadow(0 0 8px #7c3aed88);
  }
`;
