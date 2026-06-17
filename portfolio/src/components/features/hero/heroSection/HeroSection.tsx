"use client";

import { useState, useEffect } from "react";
import TextType from "../../../animations/TextType";
import Ferrofluid from "../../../animations/Ferrofluid";
import SplitText from "../../../animations/SplitText";
import {
  Container,
  Content,
  LeftSide,
  RightSide,
  Greeting,
  Bio,
  CVButton,
  PhotoFrame,
} from "./HeroSectionStyle";

import profilePhoto from "../../../../assets/images/me.png";

const HeroSection = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {

      setIsScrolling(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Container>
      <Ferrofluid
        colors={["#43179d", "#4814b1", "#36116a"]}
        speed={0.4}
        scale={1.2}
        opacity={0.8}
        dpr={1}
        paused={isScrolling}
      />
      <Content>
        <LeftSide>
          <Greeting>
            <SplitText text="Olá! Me chamo Vitor Levi" textAlign="left" />
            <h1>
              <TextType
                text={[
                  "Desenvolvedor FullStack",
                  "Desenvolvedor Frontend",
                  "Desenvolvedor Backend",
                ]}
              />
            </h1>
          </Greeting>

          <Bio>
            Sou Desenvolvedor Full Stack com 2 anos de experiência criando aplicações web escaláveis. Já atuei em projetos para organizações internacionais e aplicações governamentais, sempre focado em entregar soluções que geram impacto real e mensurável. Transformo requisitos complexos em produtos funcionais, priorizando performance, segurança e experiência do usuário em cada decisão técnica
          </Bio>

          <CVButton
            href="/cv-vitor-levi.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Baixar CV
          </CVButton>
        </LeftSide>

        <RightSide>
          <PhotoFrame>
            <img src={profilePhoto} alt="Foto de Vitor Levi" />
          </PhotoFrame>
        </RightSide>
      </Content>
    </Container>
  );
};

export default HeroSection;
