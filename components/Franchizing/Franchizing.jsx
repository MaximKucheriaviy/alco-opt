import { StyledFrancizng } from "./StyledFranchizing";
import { Container } from "../Container/Container";
import Image from "next/image";
import { NavigationControl } from "../NavigationControl/NavigationControl";
export const Francgizing = () => {
  return (
    <StyledFrancizng id="francgizing">
      <Container className="container">
        <p className="airBackText numberAir">№4</p>
        <h2>ФРАНЧАЙЗИНГ</h2>
        <p className="sub">Орієнтовні інвестиції</p>
        <p className="price">
          <span>ТОВАР ВІД 26 000$</span>
          <span>ІНШЕ ВІД 22 000$</span>
        </p>
        <ul>
          <li>
            <Image src="/calendar.svg" width={50} height={49} alt="calender" />
            <p>реалізація проєкту через 2 місяці</p>
          </li>
          <li>
            <Image src="/Royalty.svg" width={61} height={49} alt="calender" />
            <p className="big">
              роялті: <br /> ФОРМАТ МІНІ - 2%
              <br /> ІНШИЙ <span className="noMobile">ФОРМАТ</span> - 3%
            </p>
          </li>
          <li>
            <Image src="/lether.svg" width={61} height={49} alt="calender" />
            <p>дохід з першого місяця роботи</p>
          </li>
          <li>
            <Image src="/rotDolar.svg" width={50} height={49} alt="calender" />
            <p>повернення інвестицій від 18 місяців</p>
          </li>
        </ul>
        <NavigationControl active={4} top={-20} />
        <div className="image">
          <div className="effect1"></div>
          <div className="effect2"></div>
          <div className="effect3"></div>
          <Image src="/wineBox.png" width={469} height={469} alt="wine box" />
        </div>
        <div className="logo">
          <div className="logoThumb">
            <Image src="/logo.png" width={124} height={91} alt="logo" />
          </div>
          <p className="logoText">Дешевше ваших інтернетів</p>
        </div>
      </Container>
      <div className="imageMobile">
        <div className="effect1"></div>
        <div className="effect2"></div>
        <div className="effect3"></div>
        <Image src="/wineBox.png" width={469} height={469} alt="wine box" />
      </div>
    </StyledFrancizng>
  );
};
