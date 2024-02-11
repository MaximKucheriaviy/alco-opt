import { StyledPresentationForm } from "./StyledPresentationsForm";
import Image from "next/image";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";

export const PresentationForm = () => {
  return (
    <StyledPresentationForm>
      <Container className="container">
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
            Отримайте презентацію франшизи з детальним прорахунком вартості і
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
          <Button className={"submitButton"}>отримати презентацію</Button>
        </form>
      </Container>
    </StyledPresentationForm>
  );
};
