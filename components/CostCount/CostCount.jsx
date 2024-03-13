import { StyledCostCount } from "./StyledCostCount";
import { Container } from "../Container/Container";
import Image from "next/image";
import { Slider } from "@mui/material";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NavigationControl } from "../NavigationControl/NavigationControl";
import { Lines } from "../Lines/Lines";
import { spaceTable } from "@/service/spaceTable";

export const CostCount = () => {
  const [space, setSpace] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [timer, setTimer] = useState(null);
  const [dialog, setDialog] = useState(false);
  const [table, setTable] = useState(spaceTable[0]);
  const setTimerCallback = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setDialog(true);
    const t = setTimeout(() => {
      setDialog(false);
    }, 3000);
    setTimer(t);
  };
  useEffect(() => {
    setTable(spaceTable[space - 1]);
  }, [space]);
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
              <p className="priceBig">
                всього інвестицій:
                <button>
                  <Image
                    onClick={setTimerCallback}
                    src={"quesionMark.svg"}
                    width={19}
                    height={19}
                  />
                </button>
              </p>
              <p className="redValue">{table.total} 000$</p>
            </div>
            {dialog && (
              <div className="dialog">
                <Image
                  className="image"
                  src={"dialogSVG.svg"}
                  width={207}
                  height={131}
                  alt="dialog"
                />
                <p className="text">
                  Розраховується індивідуально для кожного магазину
                </p>
              </div>
            )}
            <p className="from">з них: </p>
            <div className="priceItem">
              <p className="price">Обладнання:</p>
              <p className="value">{table.stuf} 000$</p>
            </div>
            <div className="priceItem">
              <p className="price">Ліцензійний внесок:</p>
              <p className="value">{table.license} 000$</p>
            </div>
            <div className="priceItem">
              <p className="price">Ремонт:</p>
              <p className="value">{table.fix} 000$</p>
            </div>
            <div className="priceItem">
              <p className="price">Товар:</p>
              <p className="value">{table.goods} 000$</p>
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
          <div className="iconText first">
            <Image
              src={"/iconInvest.svg"}
              alt={"icon"}
              width={50}
              height={50}
            />
            <p>
              повернення інвестицій від <span>18 місяців</span>
            </p>
          </div>
          <div className="iconText">
            <Image
              src={"/iconIncome.svg"}
              alt={"icon"}
              width={61}
              height={48}
            />
            <p>
              дохід з першого місяця від - <span>{table.income}$</span>
            </p>
          </div>
        </div>
        <NavigationControl active={5} black top={150} />
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
                  <div>Розміщення в зонах активного трафіку;</div>
                </li>
                <li className="text">
                  <div className="blackPoint"></div>
                  <div>
                    Обов’язковість встановлення рампи та наявність чорного
                    входу.
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
