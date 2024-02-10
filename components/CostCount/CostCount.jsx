import { StyledCostCount } from "./StyledCostCount";
import { Container } from "../Container/Container";
import Image from "next/image";
import { Slider } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export const CostCount = () => {
  const [space, setSpace] = useState(1);
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
            <p className={space === 1 ? "active" : ""}>
              400 м<sup>2</sup>
            </p>
            <p className={space === 2 ? "active" : ""}>
              350 м<sup>2</sup>
            </p>
            <p className={space === 3 ? "active" : ""}>
              300 м<sup>2</sup>
            </p>
            <p className={space === 4 ? "active" : ""}>
              250 м<sup>2</sup>
            </p>
            <p className={space === 5 ? "active" : ""}>
              200 м<sup>2</sup>
            </p>
          </div>
          <Slider
            min={1}
            max={5}
            onChange={(event) => setSpace(event.target.value)}
          />
          <Link className="need" href="/">
            Які вимоги до приміщення?
          </Link>
          <div className="iconText">
            <Image
              src={"/iconInvest.svg"}
              alt={"icon"}
              width={50}
              height={50}
            />
            <p>повернення інвестицій від 12 місяців</p>
          </div>
          <div className="iconText">
            <Image
              src={"/iconIncome.svg"}
              alt={"icon"}
              width={61}
              height={48}
            />
            <p>прибуток з першого місяця роботи</p>
          </div>
        </div>
      </Container>
    </StyledCostCount>
  );
};