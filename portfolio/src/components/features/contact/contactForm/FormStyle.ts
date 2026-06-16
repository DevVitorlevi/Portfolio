import styled, { keyframes, css } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  width: 92%;
  max-width: 680px;
  margin: 1rem auto;
  padding: clamp(20px, 5vw, 32px);
  background: linear-gradient(135deg, #0d041e 0%, #000 100%);
  border: 1px solid rgba(255, 255, 255, 0.115);
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.6s ease forwards;

  @media (max-width: 480px) {
    border-radius: 14px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  text-align: center;
  margin-bottom: 24px;
  color: #a78bfa;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #333;
  background: #1f2937;
  color: #fff;
  outline: none;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px #7c3aed33;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 14px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #333;
  background: #1f2937;
  color: #fff;
  outline: none;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  resize: vertical;
  min-height: 120px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px #7c3aed33;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background: ${(props) => (props.disabled ? "#6b21a8" : "#7c3aed")};
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${(props) => (props.disabled ? "#6b21a8" : "#8b5cf6")};
    transform: ${(props) => (props.disabled ? "none" : "scale(1.02)")};
  }

  &:active {
    transform: scale(0.98);
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.8;
    `}
`;
