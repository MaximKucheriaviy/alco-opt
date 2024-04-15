import { StyledPresentationForm } from "./StyledPresentationsForm";
import Image from "next/image";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { NavigationControl } from "../NavigationControl/NavigationControl";
import axios from "axios";

export const PresentationForm = () => {
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

        <form>
          <h2>
            Отримайте інформацію франшизи з детальним розрахунком вартості і
            окупності вкалдень
          </h2>
          <div className="inputContainer">
            <label htmlFor="nameInput">Ім’я</label>
            <input type="text" id="nameInput" />
          </div>
          <div className="inputContainer">
            <label htmlFor="phoneInput">Номер телефону</label>
            <input type="text" id="phoneInput" />
          </div>
          <div className="inputContainer">
            <label htmlFor="phoneInput">E-mail</label>
            <input type="text" id="phoneInput" />
          </div>
          <Button className={"submitButton"}>отримати розрахунок</Button>
        </form>
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
