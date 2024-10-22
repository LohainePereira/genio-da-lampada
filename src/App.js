import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
};

  body {
    font-family: "Sevillana", cursive;
    text-align: center;
    color: white;
    width:100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }`;

const Title = styled.h1`
  font-family: "Aladin", system-ui;
  font-size: 2.6rem;
  text-align: center;
  display: flex;
  margin-top: 10px;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  max-width: 700px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Lampadaimg = styled.img`
  width: 80%;
  max-width: 900px;
  height: auto;
`;

const Botao = styled.button`
  cursor: pointer;
  margin: 0px;
  border-radius: 15px;
  background-color: purple;
  color: white;
  display: flex;
  padding: 0.5rem 1.5rem;
  font-family: "Aladin", system-ui;
  font-size: 1.5rem;
  width: fit-content;
  text-align: center;
  border: none;
  margin-bottom: 10px;
  margin-top: -75px;

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <Main>
      <GlobalStyle />
      <Title>"Liberte a magia da programação com a lâmpada de Aladim."</Title>
      <Content>
        <Lampadaimg
          src={
            lampada
              ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
              : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
          }
          alt="Lâmpada"
        />
        <Botao onClick={trocarLampada}>Clique Aqui</Botao>
      </Content>
    </Main>
  );
}
