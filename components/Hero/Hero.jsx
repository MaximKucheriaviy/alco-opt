import { StyledHero } from "./StyledHero";
import { Container } from "../Container/Container";
import { Line } from "../Line/Line";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button/Button";

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
    <StyledHero buttonPadding={buttonPading}>
      <div className="videoDiv">
        <video loop autoPlay muted className="video" src="/v1.mp4"></video>
      </div>
      <Container ref={containerRef}>
        <h1>АЛКО/ОПТ</h1>
        <Line></Line>
        <div className="line"></div>
        <p className="subtitle">ФРАНШИЗА</p>
        <p className="discription">
          Нова революційна концепція з найнижчими цінами та найвищим сервісом в
          Україні!
        </p>

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
      </Container>
    </StyledHero>
  );
};
