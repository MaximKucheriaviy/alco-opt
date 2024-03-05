import { StyledStartPath } from "./StyledStartPath";
import { Container } from "../Container/Container";
import Image from "next/image";
import { NavigationControl } from "../NavigationControl/NavigationControl";

export const StartPath = () => {
  return (
    <StyledStartPath id="start_path">
      <Container>
        <p className="airBackText numberAir">№7</p>
        {/* <p className="airBackText opt">АЛКО/ОПТ</p> */}
        <h2>Етапи запуску магазину</h2>
        <div className="pathTopLine">
          <Image
            className="arrowBow1"
            src={"/arrowBow.svg"}
            width={146}
            height={18}
            alt="arrow"
          />
          <Image
            className="arrowBow2"
            src={"/arrowBowReverce.svg"}
            width={146}
            height={18}
            alt="arrow"
          />
          <Image
            className="arrowBow3"
            src={"/arrowBow.svg"}
            width={146}
            height={18}
            alt="arrow"
          />

          <Image
            className="arrowBow4"
            src={"/arrowBow.svg"}
            width={146}
            height={18}
            alt="arrow"
          />
          <Image
            className="arrowBow5"
            src={"/arrowBowReverce.svg"}
            width={146}
            height={22}
            alt="arrow"
          />
          <Image
            className="arrowBow6"
            src={"/arrowBow.svg"}
            width={146}
            height={18}
            alt="arrow"
          />

          <div className="item">
            <p className="number filled">01</p>
            <p className="discription">Знайомство в офісі</p>
          </div>
          <div className="item">
            <p className="number outlined">02</p>
            <p className="discription">
              Підписання пакету договорів та оплата вступного внеску
            </p>
          </div>
          <div className="item">
            <p className="number outlined">03</p>
            <p className="discription">
              Проходження навчання в офісі, обговорення умов співробітництва і
              затвердження локації
            </p>
          </div>
          <div className="item">
            <p className="number outlined">04</p>
            <p className="discription">
              Передача стандартів ведення бізнесу і макетів рекламних матеріалів
            </p>
          </div>

          <div className="item">
            <p className="number outlined">05</p>
            <p className="discription">
              Підготовка проєкту приміщення, супровід під час ремонтних робіт і
              подготовки приміщення
            </p>
          </div>
          <div className="item">
            <p className="number outlined">06</p>
            <p className="discription">Навчання персоналу</p>
          </div>
          <div className="item">
            <p className="number outlined">07</p>
            <p className="discription">
              Налаштування всіх стандартів і автоматизація процесів
            </p>
          </div>
          <div className="item">
            <p className="number filled">08</p>
            <p className="discription">
              ПУрочисте відкриття магазинку{" "}
              <span className="name">АЛКООПТ</span>
            </p>
          </div>
          <div className="logo">
            <Image src="/logo.png" width={108} height={80} alt="logo" />
            <p className="logoText">Вистачить не всім</p>
          </div>
        </div>
        <NavigationControl active={7} top={63} />
      </Container>
    </StyledStartPath>
  );
};
