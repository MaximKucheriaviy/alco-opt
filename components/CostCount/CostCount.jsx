import { StyledCostCount } from "./StyledCostCount";
import { Container } from "../Container/Container";
import Image from "next/image";
import { Slider } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { NavigationControl } from "../NavigationControl/NavigationControl";
import { Lines } from "../Lines/Lines";

export const CostCount = () => {
  const [space, setSpace] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <StyledCostCount id="cost_count">
      <div className="imageThumb"></div>
      <Lines no1 no2 />
      <Container className="container">
        <p className="airBackText numberAir">№5</p>
        <p className="airBackText opt">ІНВЕСТИЦІЇ</p>

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
            <div className="priceItem">
              <p className="price">Товар:</p>
              <p className="value">100 000$</p>
            </div>
          </div>
          <Link className="link" href="#presentation_form">
            ЗАЛИШИТИ ЗАЯВКУ НА ФРАНШИЗУ{" "}
            <Image src={"/arrowWhite.svg"} width={90} height={20} alt="arrow" />
          </Link>
        </div>
        <div className="rightContainer">
          <p className="place">ПРИМІЩЕННЯ</p>
          <div className="priceses">
            <p className={space === 1 ? "active" : ""}>
              60 м<sup>2</sup>
              <br />
              <span>(формат міні)</span>
            </p>
            <p className={space === 2 ? "active" : ""}>
              100 м<sup>2</sup>
              <br />
              <span>(формат міні)</span>
            </p>
            <p className={space === 3 ? "active" : ""}>
              200 м<sup>2</sup>
            </p>
            <p className={space === 4 ? "active" : ""}>
              300 м<sup>2</sup>
            </p>
            <p className={space === 5 ? "active" : ""}>
              400 м<sup>2</sup>
            </p>
          </div>
          <Slider
            min={1}
            max={5}
            onChange={(event) => setSpace(event.target.value)}
          />
          <button
            className="need"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Які вимоги до приміщення?
          </button>
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
        <NavigationControl active={5} black top={275} />
      </Container>
      {modalOpen && (
        <div className="overlay">
          <div className="modal">
            <div className="textDiv">
              <ul>
                <li className="text">
                  <div className="blackPoint"></div>
                  <div>Торгове приміщення знаходиться на першому поверсі;</div>
                </li>
                <li className="text">
                  <div className="blackPoint"></div>
                  <div>
                    Присутні всі комунікації (електричні потужності 30-40 кВт, з
                    можливістю збільшення потужностей до 70 кВт);
                  </div>
                </li>
                <li className="text">
                  <div className="blackPoint"></div>
                  <div>Фасад з вітринними вікнами;</div>
                </li>
                <li className="text">
                  <div className="blackPoint"></div>
                  <div>Місце під літній майданчик (за бажанням);</div>
                </li>
                <li className="text">
                  <div className="blackPoint"></div>
                  <div>Розміщення в житловому районі;</div>
                </li>
                <li className="text">
                  <div className="blackPoint"></div>
                  <div>
                    Можливість встановлення рампи, або наявність чорного входу;
                  </div>
                </li>
              </ul>
            </div>
            <div className="modalImageThumb">
              <Image
                src="/modalImage.png"
                alt="hall"
                width={618}
                height={533}
              />
            </div>
            <button
              className="crostButton"
              onClick={() => [setModalOpen(false)]}
            >
              <Image
                src="/crostButton.svg"
                alt="crost"
                width={46}
                height={46}
              />
            </button>
          </div>
        </div>
      )}
    </StyledCostCount>
  );
};
