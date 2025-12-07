import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import type { ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { keyframes } from "styled-components";
import {
  Button,
  Container,
  FormWrapper,
  Input,
  TextArea,
  Title,
} from "./FormStyle";

// Spinner animado
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top: 3px solid #a78bfa;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: ${spin} 0.8s linear infinite;
  margin: 0 auto;
  display: block;
`;

const toastOptions: ToastOptions = {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  style: {
    background: "#1f2937",
    color: "#f3f4f6",
    fontWeight: 600,
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  },
};

const Form = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"" | "enviando">("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("enviando");

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_lbb3i1h",
        "template_7tbjjil",
        form.current,
        "Ht8dFIapMl4ACFoY5"
      );

      setStatus("");
      form.current.reset();

      toast.success("Mensagem enviada com sucesso!", toastOptions);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setStatus("");

      toast.error("Ocorreu um erro ao enviar. Tente novamente.", toastOptions);
    }
  };

  return (
    <Container>
      <Title>Entre em contato</Title>

      <FormWrapper ref={form} onSubmit={sendEmail}>
        <Input type="text" name="from_name" placeholder="Seu nome" required />
        <Input type="email" name="from_email" placeholder="Seu e-mail" required />
        <TextArea name="message" rows={5} placeholder="Sua mensagem" required />

        <Button type="submit" disabled={status === "enviando"}>
          {status === "enviando" ? <Spinner /> : "Enviar"}
        </Button>
      </FormWrapper>

      <ToastContainer />
    </Container>
  );
};

export default Form;
