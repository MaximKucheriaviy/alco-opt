import { StyledAdvantages } from "./StyledAdvantages";
import { Container } from "../Container/Container";
import { Carousel } from "../Carousel/Carousel";
import Image from "next/image";

export const Advantages = () => {
  return (
    <StyledAdvantages>
      <Container>
        <h2>
          Чому обрати <br /> <span>АЛКО/ОПТ?</span>
        </h2>
      </Container>

      <div className="imageThumb">
        <div className="buttonDiv">
          <button>
            <Image src={"/arrowLeft.svg"} width={44} height={44} alt="arrow" />
          </button>
          <button>
            <Image src={"/arrowRight.svg"} width={44} height={44} alt="arrow" />
          </button>
        </div>
        <Carousel />
      </div>
    </StyledAdvantages>
  );
};
