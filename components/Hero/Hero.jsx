import { StyledHero } from "./StyledHero";
import { Container } from "../Container/Container";
import { Line } from "../Line/Line";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button/Button";
import { NavigationControl } from "../NavigationControl/NavigationControl";
import { Lines } from "../Lines/Lines";

export const Hero = ({ addLoader, removeLoader }) => {
  const containerRef = useRef(null);
  const [buttonPading, setButtonPudding] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);
  const [videoPath, setVideoPath] = useState(
    "https://res.cloudinary.com/dfjnw7uur/video/upload/v1713214824/v2_i5vddy.mp4"
  );
  const videoRef = useRef(null);

  useEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    const block = getComputedStyle(containerRef.current).marginLeft;
    setButtonPudding(block);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (!videoRef.current) {
      return;
    }
    const video = videoRef.current;
    const onLoadStart = () => {
      console.log("loading video");
      addLoader();
    };
    const onVideoLoad = () => {
      console.log("start video");
      removeLoader();
    };

    setTimeout(() => {
      if (!video.paused) {
        removeLoader();
      }
    }, 1000);

    video.addEventListener("loadstart", onLoadStart);
    video.addEventListener("play", onVideoLoad);
    return () => {
      video.removeEventListener("loadstart", onLoadStart);
      video.removeEventListener("play", onVideoLoad);
    };
  }, [addLoader, removeLoader]);
  return (
    <StyledHero id="hero" buttonPadding={buttonPading}>
      <div className="videoDiv">
        <video
          loop
          autoPlay
          data-keepplaying
          muted
          className="video"
          preload="auto"
          src={videoPath}
          ref={videoRef}
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
        <p className="slogan">
          Станьте власником магазину алкоголю №1 у своєму місті!
        </p>
        <div className="buttons">
          <div className="line"></div>
          <button
            onClick={() => {
              setVideoPath(
                "https://asset.cloudinary.com/dfjnw7uur/ef16d3e41f7fe33a893541c91ee0fcb0https://res.cloudinary.com/dfjnw7uur/video/upload/v1713214824/v2_i5vddy.mp4"
              );
              addLoader();
            }}
            href="/"
          >
            МАГАЗИН
          </button>
          <div className="line"></div>
          <button
            onClick={() => {
              setVideoPath(
                "https://res.cloudinary.com/dfjnw7uur/video/upload/v1713215073/v4_swebxf.mp4"
              );
              addLoader();
            }}
            href="/"
          >
            СКЛАД
          </button>
          <div className="line"></div>
          <button
            onClick={() => {
              setVideoPath(
                "https://res.cloudinary.com/dfjnw7uur/video/upload/v1713214876/v3_nwhlg8.mp4"
              );
              addLoader();
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
