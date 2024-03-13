import { StyledAdvantages } from "./StyledAdvantages";
import { Container } from "../Container/Container";
import { Carousel } from "../Carousel/Carousel";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ControlDots } from "../ControlDots/ControlDots";
import { NavigationControl } from "../NavigationControl/NavigationControl";
import { Lines } from "../Lines/Lines";

const buttonData = [
  {
    number: 1,
    keyword: "КОНЦЕПЦІЯ",
  },
  {
    number: 2,
    keyword: "ДОСВІД",
  },
  {
    number: 3,
    keyword: "СЕРВІС",
  },
  {
    number: 4,
    keyword: "АСОРТИМЕНТ",
  },
  {
    number: 5,
    keyword: "СТАНДАРТИЗАЦІЯ",
  },
  {
    number: 6,
    keyword: "ЦІНИ",
  },
];

export const Advantages = () => {
  const [activeDot, setActiveDot] = useState(0);
  const carouselRef = useRef(null);
  const [enable, setEnable] = useState(true);

  useEffect(() => {
    if (!carouselRef.current) {
      return;
    }
    carouselRef.current.slickGoTo(activeDot);
  }, [activeDot]);

  const onChage = () => {
    setEnable(true);
  };
  const leftHandler = () => {
    if (!carouselRef.current || !enable) {
      return;
    }
    setEnable(false);
    setActiveDot((prev) => {
      if (prev == 0) {
        return 5;
      }
      return prev - 1;
    });
  };
  const rightHandler = () => {
    if (!carouselRef.current || !enable) {
      return;
    }
    setEnable(false);
    setActiveDot((prev) => {
      if (prev == 5) {
        return 0;
      }
      return prev + 1;
    });
  };

  const dotClick = (index) => {
    return () => {
      setActiveDot(index);
    };
  };

  return (
    <StyledAdvantages id="advantages">
      <Lines />
      <Container>
        <p className="airBackText numberAir">№3</p>
        <p className="airBackText opt">ФРАНШИЗА</p>
        <h2>
          Чому обрати <br /> <span>АЛКО/ОПТ?</span>
        </h2>
        <div className="controlBox">
          <div className="line"></div>
          {buttonData.map((item) => (
            <ControlDots
              key={item.keyword}
              number={item.number}
              keyword={item.keyword}
              active={activeDot + 1 === item.number}
              onClick={dotClick}
            />
          ))}
        </div>
        <NavigationControl active={3} top={60} />
      </Container>

      <div className="imageThumb">
        <div className="buttonDiv">
          <button onClick={leftHandler}>
            <Image src={"/arrowLeft.svg"} width={44} height={44} alt="arrow" />
          </button>
          <button onClick={rightHandler}>
            <Image src={"/arrowRight.svg"} width={44} height={44} alt="arrow" />
          </button>
        </div>
        <Carousel refer={carouselRef} onChage={onChage} />
      </div>
    </StyledAdvantages>
  );
};
