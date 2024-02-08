import { StyledCostCount } from "./StyledCostCount";
import { Container } from "../Container/Container";

export const CostCount = () => {
  return (
    <StyledCostCount>
      <div className="imageThumb"></div>
      <Container>
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
          <button>ЗАЛИШИТИ ЗАЯВКУ НА ФРАНШИЗУ</button>
        </div>
        <div></div>
      </Container>
    </StyledCostCount>
  );
};
