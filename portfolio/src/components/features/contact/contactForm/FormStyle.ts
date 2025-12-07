import styled, { keyframes, css } from "styled-components";

// Animação de fade-in suave
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container principal do formulário
export const Container = styled.div`
  width: 90%;
  max-width: 680px;
  margin: 1rem auto;
  padding: 32px;
  background: linear-gradient(135deg, #0d041e 0%, #000 100%);
  border: 1px solid rgba(255, 255, 255, 0.115);
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.6s ease forwards;
`;

// Título do formulário
export const Title = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 24px;
  color: #a78bfa;
`;

//  Wrapper do <form>
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

//  Campos de input
export const Input = styled.input`
  padding: 12px 14px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #333;
  background: #1f2937;
  color: #fff;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #7c3aed;
  }
`;

// Campo de texto
export const TextArea = styled.textarea`
  padding: 12px 14px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #333;
  background: #1f2937;
  color: #fff;
  outline: none;
  transition: border 0.3s ease;
  resize: none;

  &:focus {
    border-color: #7c3aed;
  }
`;

// Botão de envio
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
    transform: ${(props) => (props.disabled ? "none" : "scale(1.03)")};
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.8;
    `}
`;