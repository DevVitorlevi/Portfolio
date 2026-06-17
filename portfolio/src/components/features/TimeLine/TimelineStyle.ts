import styled from 'styled-components';

export const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(40px, 8vw, 60px) clamp(16px, 4vw, 20px);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: transparent;
  min-height: 100vh;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  padding: 0 20px;

  --line-width: 4px;
  --dot-size: 20px;
  --item-gap: 40px;
  --rail-padding: 20px;
  --line-left: 50%;

  &::before {
    content: '';
    position: absolute;
    left: var(--line-left);
    top: 0;
    z-index: -20;
    bottom: 0;
    width: var(--line-width);
    background: linear-gradient(180deg, #290b5c 0%, #0e0322 50%, #2b086b 100%);
    transform: translateX(-50%);
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
  }

  @media (max-width: 768px) {
    --rail-padding: 40px;
    --line-left: 20px;
    --dot-size: 16px;

    padding-left: var(--rail-padding);
    padding-right: 12px;

    &::before {
      transform: translateX(0);
    }
  }

  @media (max-width: 480px) {
    --rail-padding: 32px;
    --line-left: 14px;

    padding-left: var(--rail-padding);
  }
`;
