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
        <video loop autoPlay muted className="video" src="/v1.mp4"></video>
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
        <p className="slogan">“Дешевше Ваших Інтернетів”</p>

        <div className="buttons">
          <div className="line"></div>
          <Link href="/">МАГАЗИН</Link>
          <div className="line"></div>
          <Link href="/">МАГАЗИН</Link>
          <div className="line"></div>
          <Link href="/">МАГАЗИН</Link>
        </div>
        <button className="gradientButton">Стати партнером</button>
        <Button className="tlephone">
          <Image src={"/Phone.svg"} width={49} height={49} alt="phone" />
        </Button>
        <NavigationControl
          top={-98}
          moreText
          height={482}
          upArrow={false}
          active={1}
        />
      </Container>
    </StyledHero>
  );
};
