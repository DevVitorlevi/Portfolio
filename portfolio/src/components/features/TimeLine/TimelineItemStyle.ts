// TimelineItemStyle.ts
import styled from 'styled-components';

export const ItemWrapper = styled.div<{ delay: number; isLeft: boolean }>`
  position: relative;
  margin-bottom: 60px;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  animation-delay: ${props => props.delay};
  width: calc(50% - var(--item-gap, 40px));
  margin-left: ${props => props.isLeft ? '0' : 'auto'};
  margin-right: ${props => props.isLeft ? 'auto' : '0'};

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  &::before {
    content: '';
    position: absolute;
    ${props => props.isLeft ? 'right' : 'left'}: calc(-1 * (var(--item-gap, 40px) + var(--dot-size, 20px) / 2));
    top: 40px;
    width: var(--dot-size, 20px);
    height: var(--dot-size, 20px);
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
    top: 48px;
    width: 20px;
    height: 2px;
    background: linear-gradient(${props => props.isLeft ? '90deg' : '-90deg'}, #a78bfa 0%, transparent 100%);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;

    &::before {
      left: calc(var(--line-left) - var(--rail-padding) + (var(--line-width) / 2) - (var(--dot-size) / 2)) !important;
      right: auto !important;
    }

    &::after {
      left: calc(var(--line-left) - var(--rail-padding) + (var(--line-width) / 2)) !important;
      right: auto !important;
    }
  }
`;

export const PulseDot = styled.span<{ isLeft: boolean }>`
  position: absolute;
  ${props => props.isLeft ? 'right' : 'left'}: calc(-1 * (var(--item-gap, 40px) + var(--dot-size, 20px) / 2));
  top: 40px;
  width: var(--dot-size, 20px);
  height: var(--dot-size, 20px);
  border-radius: 50%;
  z-index: 3;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(168, 85, 247, 0.6);
    animation: pulse 2s ease-out infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.7; }
    70% { transform: scale(2.2); opacity: 0; }
    100% { transform: scale(2.2); opacity: 0; }
  }

  @media (max-width: 768px) {
    left: calc(var(--line-left) - var(--rail-padding) + (var(--line-width) / 2) - (var(--dot-size) / 2)) !important;
    right: auto !important;
  }
`;

export const Card = styled.div`
  background: linear-gradient(135deg, #0d041e 0%, #000 100%);
  border-radius: 16px;
  padding: 28px 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(168, 85, 247, 0.2);
  transition: all 0.4s ease;
  border: 1px solid rgba(168, 85, 247, 0.1);

  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 20px 50px rgba(168, 85, 247, 0.3), 0 0 0 1px rgba(168, 85, 247, 0.4);
    border-color: rgba(168, 85, 247, 0.3);
  }

  @media (max-width: 480px) {
    padding: 22px 20px;
  }
`;

export const CompanyHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
`;

export const CompanyLogo = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(135deg, #7c3aed 0%, #2b086b 100%);
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.35);
`;

export const CompanyInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CompanyName = styled.h3`
  font-size: 1.25rem;
  color: #f3e8ff;
  font-weight: 700;
  margin: 0 0 4px 0;
  line-height: 1.3;
`;

export const CompanyMeta = styled.div`
  font-size: 0.85rem;
  color: #b9a8d9;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  margin-top: 4px;
`;

export const PeriodRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #d8c8f5;
  margin-top: 4px;
`;

export const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #c4b5fd;
  padding: 2px 8px;
  border-radius: 20px;
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.35);

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #a78bfa;
    box-shadow: 0 0 6px #a78bfa;
    animation: blink 1.6s ease-in-out infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

export const RoleList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoleItem = styled.div`
  position: relative;
  padding: 16px 0 16px 22px;
  border-left: 2px solid rgba(168, 85, 247, 0.25);

  &:first-child { padding-top: 4px; }
  &:last-child { padding-bottom: 0; }

  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 22px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #a78bfa;
    box-shadow: 0 0 8px rgba(168, 85, 247, 0.7);
  }
`;

export const RoleHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`;

export const RoleTitle = styled.h4`
  font-size: 1.05rem;
  color: #f3e8ff;
  font-weight: 600;
  margin: 0;
`;

export const RolePeriod = styled.span`
  font-size: 0.78rem;
  color: #a78bfa;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
`;

export const BulletList = styled.ul`
  margin: 0 0 14px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BulletItem = styled.li`
  position: relative;
  padding-left: 18px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #d8d0e8;
  text-align: left;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #a78bfa;
  }
`;

export const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

export const StackChip = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  color: #d8c8f5;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.25);
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(124, 58, 237, 0.25);
  }
`;
