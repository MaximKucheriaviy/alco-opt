import { StyledAdvantages } from "./StyledAdvantages";
import { Container } from "../Container/Container";
import { Carousel } from "../Carousel/Carousel";

export const Advantages = () => {
  return (
    <StyledAdvantages>
      <Container>
        <h2>
          Чому обрати <br /> <span>АЛКО/ОПТ?</span>
        </h2>
        <Carousel />
      </Container>
    </StyledAdvantages>
  );
};
