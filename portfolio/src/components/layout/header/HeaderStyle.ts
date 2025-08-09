import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(20px);
  background-color: rgba(255, 0, 0, 1);
  font-size: 1.4rem;
  border-radius: 0 0 20px 20px;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 800px) {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
  }
`;

export const HamburgerButton = styled.button`
  display: block;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 10000;

  @media (min-width: 800px) {
    display: none;
  }
`;

// Troquei open por $open (transient prop) para não passar para o DOM
export const NavList = styled.ul<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70vw;
  max-width: 320px;
  background-color: var(#121212);
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem 2rem;
  gap: 1.5rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;

  ${({ $open }) =>
        $open &&
        css`
      transform: translateX(0);
    `}

  @media (min-width: 800px) {
    position: static;
    height: auto;
    width: auto;
    flex-direction: row;
    padding: 0;
    background: transparent;
    transform: none;
    box-shadow: none;
    display: flex;
    gap: 0.6rem;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    gap: 4rem;
  }
`;

export const NavItem = styled.li`
  width: 100%;

  @media (min-width: 800px) {
    width: auto;
  }
`;

export const NavLink = styled.a`
  font-size: 1.5rem;
  width: 100%;
  padding: 1rem 0;
  display: block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: var(--fonte-principal, Arial, sans-serif);
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: linear-gradient(90deg, #7b2ff7, #2983f0);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 800px) {
    padding: 0.5rem 1rem;
    border-bottom: none;
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #7b2ff7, #2983f0);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

// Você já fez certo aqui com $active
export const Overlay = styled.div<{ $active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 9998;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: ${({ $active }) => ($active ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`;
