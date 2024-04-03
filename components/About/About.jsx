import { Container } from "../Container/Container";
import { StyledAbout } from "./StyledAbout";
import { Line } from "../Line/Line";
import { NavigationControl } from "../NavigationControl/NavigationControl";
import { Lines } from "../Lines/Lines";
import { ImageCarousel } from "../ImageCaruosel/ImageCarousel";
import { useState } from "react";
import Image from "next/image";

export const About = () => {
  const [activeDot, setActiveDot] = useState(0);
  const onChage = (event) => {
    setActiveDot(event);
  };
  return (
    <StyledAbout id="about">
      <Lines no3 />
      <Container className="container">
        <p className="airBackText numberAir">№2</p>
        <p className="airBackText opt">АЛКО/ОПТ</p>

        <h2>АЛКО/ОПТ</h2>
        <p className="subtitle">РЕВОЛЮЦІЙНА КОНЦЕПЦІЯ: </p>
        <Line className="lineRed" />
        <ul className="textList">
          <li className="text">
            <div className="redPoint"></div>
            <div>
              <span>МАГАЗИН</span> - привертає увагу своїми найнижчими цінами на
              алкоголь у будь-якому сегменті, не тільки в офлайн-магазинах, але
              й серед купівлі онлайн. При цьому забезпечується найвищий рівень
              обслуговування, яким задоволені всі наші клієнти.
            </div>
          </li>
          <li className="text">
            <div className="redPoint"></div>
            <div>
              <span>СКЛАД</span> - всі звикли, що оптом дешевше, але у нас опт
              від однієї пляшки, ми впевнено гарантуємо, що можемо задовольнити
              різні об{`'`}єми замовника. Починаючи від пляшки та закінчуючи
              ящиками і ціна буде найнижча на ринку. 
            </div>
          </li>
          <li className="text">
            <div className="redPoint"></div>
            <div>
              <span>БАР</span> - купуйте на полиці, пийте на барі – ціни
              залишаються незмінними! Ми даємо найнижчу ціну на коктейлі з
              оригінальною рецептурою та використанням справжніх інгредієнтів.
              Якщо вагаєтеся, який смак обрати, спробуйте 50 мл. на барі –
              тільки після цього вирішуйте, яку пляшку обрати.
            </div>
          </li>
          <NavigationControl active={2} top={40} height={328} />
          <div className="logo">
            <Image
              className="image"
              src={"/logo.png"}
              width={100}
              height={74}
              alt="logo"
            />
            <p className="logoText">Вистачить не всім</p>
          </div>
        </ul>
        <div className="imageTumbMobile">
          <ImageCarousel onChage={onChage} />
        </div>
        <div className="corouselDots">
          <div className={activeDot === 0 ? "active" : ""}></div>
          <div className={activeDot === 1 ? "active" : ""}></div>
          <div className={activeDot === 2 ? "active" : ""}></div>
          <div className={activeDot === 3 ? "active" : ""}></div>
        </div>
      </Container>
      <div className="imageTumb">
        <ImageCarousel />
        {/* <div className="logo">
          <Image src={"/logo.png"} width={100} height={74} alt="logo" />
          <p className="logoText">Вистачить не всім</p>
        </div> */}
      </div>
    </StyledAbout>
  );
};
