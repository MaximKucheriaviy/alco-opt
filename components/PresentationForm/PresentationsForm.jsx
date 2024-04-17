import { StyledPresentationForm } from "./StyledPresentationsForm";
import Image from "next/image";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { NavigationControl } from "../NavigationControl/NavigationControl";
import { useRouter } from "next/router";
import { useState } from "react";

export const PresentationForm = ({ addLoader, removeLoader }) => {
  const router = useRouter();
  const [responseOpen, setResponseOpen] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData(event.target);
    try {
      addLoader();
      const response = await fetch(
        "https://franchise.alcoopt.com.ua/send_message.php",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      removeLoader();
      setResponseOpen(true);
      true;
    } catch (error) {
      removeLoader();
      setResponseOpen(true);
      true;
    }
  };
  return (
    <StyledPresentationForm id="presentation_form">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Container className="container">
        <div className="imageTablet"></div>
        <div className="imageThumbMobile"></div>
        <div className="imageThumb">
          <Image
            className="cardLogo"
            src={"/cardLogo.png"}
            width={1020}
            height={891 - 148}
            alt="card logo"
          />
        </div>
        {responseOpen && (
          <div className="responseDiv">
            <p>ДЯКУЄМО ЗА ЗАЯВКУ!</p>
            <p>НАШІ МЕНЕДЖЕРИ ЗВʼЯЖУТЬСЯ З ВАМИ НАЙБЛИЖЧИМ ЧАСОМ</p>
            <button
              className="crossButton"
              onClick={() => {
                setResponseOpen(false);
              }}
            >
              <Image
                src="/crostButton.svg"
                alt="crost"
                width={46}
                height={46}
              />
            </button>
          </div>
        )}
        {!responseOpen && (
          <form onSubmit={onSubmit}>
            <h2>
              Отримайте інформацію по франшизі з детальним розрахунком вартості
              і окупності вкладень
            </h2>
            <div className="inputContainer">
              <label htmlFor="nameInput">Ім’я</label>
              <input name="nameInput" type="text" id="nameInput" />
            </div>
            <div className="inputContainer">
              <label htmlFor="phoneInput">Номер телефону</label>
              <input name="phoneInput" type="text" id="phoneInput" />
            </div>
            <div className="inputContainer">
              <label htmlFor="phoneInput">E-mail</label>
              <input name="emailInput" type="text" id="phoneInput" />
            </div>
            <Button type="submit" className={"submitButton"}>
              отримати розрахунок
            </Button>
          </form>
        )}
        <NavigationControl
          black
          active={8}
          downArrow={false}
          height={525}
          top={63}
        />
      </Container>
    </StyledPresentationForm>
  );
};
