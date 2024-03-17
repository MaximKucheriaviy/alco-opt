import { StyledHero } from "./StyledHero";
import { Container } from "../Container/Container";
import { Line } from "../Line/Line";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button/Button";
import { NavigationControl } from "../NavigationControl/NavigationControl";
import { Lines } from "../Lines/Lines";

export const Hero = () => {
  const containerRef = useRef(null);
  const [buttonPading, setButtonPudding] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);
  const [videoPath, setVideoPath] = useState("./v2.mp4");
  useEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    const block = getComputedStyle(containerRef.current).marginLeft;
    setButtonPudding(block);
  }, [containerRef.current]);
  return (
    <StyledHero id="hero" buttonPadding={buttonPading}>
      <div className="videoDiv">
        <video
          loop
          autoPlay
          muted
          className="video"
          preload="auto"
          src={videoPath}
        ></video>
      </div>
      <Lines></Lines>
      <Container ref={containerRef}>
        <p className="airBackText alcoopt">АЛКО/ОПТ</p>
        <p className="airBackText number">№1</p>
        <p className="airBackText fran">ФРАНШИЗА</p>
        <h1>АЛКО/ОПТ</h1>
        <Line></Line>
        <div className="line"></div>
        <p className="subtitle">ФРАНШИЗА</p>
        <p className="discription">
          Нова революційна концепція алкогольного магазину з найнижчими цінами
          та найвищим сервісом в Україні!
        </p>
        <p className="slogan"> Станьте магазином алкоголя №1 у своєму місті!</p>

        <div className="buttons">
          <div className="line"></div>
          <button
            onClick={() => {
              setVideoPath("./v2.mp4");
            }}
            href="/"
          >
            МАГАЗИН
          </button>
          <div className="line"></div>
          <button
            onClick={() => {
              setVideoPath("./v4.mp4");
            }}
            href="/"
          >
            СКЛАД
          </button>
          <div className="line"></div>
          <button
            onClick={() => {
              setVideoPath("./v3.mp4");
            }}
            href="/"
          >
            БАР
          </button>
        </div>
        <div className="buttonDiv">
          <Link href="#presentation_form" className="gradientButton">
            Стати партнером
            <Image
              src="/diagonalArrow.svg"
              width={13}
              height={13}
              alt="arrow"
            />
          </Link>
          <Button
            onClick={() => {
              setModalOpened(true);
            }}
            className="tlephone"
          >
            <Image src={"/Phone.svg"} width={49} height={49} alt="phone" />
          </Button>
        </div>
        <NavigationControl
          top={0}
          moreText
          // height={482}
          upArrow={false}
          active={1}
        />
      </Container>
      {modalOpened && (
        <div
          onClick={(event) => {
            if (!event.target.classList.contains("modal")) {
              return;
            }
            setModalOpened(false);
          }}
          className="modal"
        >
          <form>
            <p className="title">
              Залишіть свій номер телефону і ми зв’яжемось з Вами
            </p>
            <div className="inputContainer">
              <label htmlFor="nameInput">Ім’я</label>
              <input type="text" id="nameInput" />
            </div>
            <div className="inputContainer">
              <label htmlFor="phoneInput">Номер телефону</label>
              <input type="text" id="phoneInput" />
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  setModalOpened(false);
                }}
                className="submitButton"
              >
                ЗАМОВИТИ ВИКЛИК
              </Button>
            </div>
          </form>
        </div>
      )}
    </StyledHero>
  );
};
