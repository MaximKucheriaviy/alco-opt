import { StyledCostCount } from "./StyledCostCount";
import { Container } from "../Container/Container";
import Image from "next/image";
import { Slider } from "@mui/material";

export const CostCount = () => {
  return (
    <StyledCostCount>
      <div className="imageThumb"></div>
      <Container className="container">
        <div className="leftContainer">
          <h2>розрахунок вартості франшизи</h2>
          <div className="whiteBlock">
            <div className="priceItem">
              <p className="priceBig">всього інвестицій:</p>
              <p className="redValue">250 000$</p>
            </div>
            <p className="from">з них: </p>
            <div className="priceItem">
              <p className="price">Обладнання:</p>
              <p className="value">27 000$</p>
            </div>
            <div className="priceItem">
              <p className="price">Ліцензійний внесок:</p>
              <p className="value">50 000$</p>
            </div>
            <div className="priceItem">
              <p className="price">Ремонт:</p>
              <p className="value">95 000$</p>
            </div>
          </div>
          <button>
            ЗАЛИШИТИ ЗАЯВКУ НА ФРАНШИЗУ{" "}
            <Image src={"/arrowWhite.svg"} width={90} height={20} alt="arrow" />
          </button>
        </div>
        <div className="rightContainer">
          <p className="place">ПРИМІЩЕННЯ</p>
          <div className="priceses">
            <p>
              400 м<sup>2</sup>
            </p>
            <p>
              350 м<sup>2</sup>
            </p>
            <p>
              300 м<sup>2</sup>
            </p>
            <p>
              250 м<sup>2</sup>
            </p>
            <p>
              200 м<sup>2</sup>
            </p>
          </div>
          <Slider />
        </div>
      </Container>
    </StyledCostCount>
  );
};
