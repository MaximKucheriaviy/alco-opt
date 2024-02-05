import { StyledFrancizng } from "./StyledFranchizing";
import { Container } from "../Container/Container";
import Image from "next/image";
export const Francgizing = () => {
  return (
    <StyledFrancizng>
      <Container className="container">
        <h2>ФРАНЧАЙЗИНГ</h2>
        <p className="sub">Орієнтовні інвестиції</p>
        <p className="price">ВІД 250 000$</p>
        <ul>
          <li>
            <Image src="/calendar.svg" width={50} height={49} alt="calender" />
            <p>реалізація проєкту через 2-3 місяці</p>
          </li>
          <li>
            <Image src="/lether.svg" width={61} height={49} alt="calender" />
            <p>реалізація проєкту через 2-3 місяці</p>
          </li>
          <li>
            <Image src="/rotDolar.svg" width={50} height={49} alt="calender" />
            <p>реалізація проєкту через 2-3 місяці</p>
          </li>
        </ul>
      </Container>
      <div className="image">
        <div className="effect1"></div>
        <div className="effect2"></div>
        <div className="effect3"></div>
        <Image src="/wineBox.png" width={524} height={524} alt="wine box" />
      </div>
    </StyledFrancizng>
  );
};
