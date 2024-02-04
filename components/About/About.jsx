import { Container } from "../Container/Container";
import { StyledAbout } from "./StyledAbout";
import { Line } from "../Line/Line";
import Image from "next/image";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <h2>
          АЛКО/ОПТ <span className="defis">-</span>
        </h2>
        <p className="subtitle">РЕВОЛЮЦІЙНА КОНЦЕПЦІЯ: </p>
        <Line className="line" />
        <p className="text">
          Магазин-склад-бар, що привертає увагу своїми найнижчими цінами на
          алкоголь будь-якого сегменту та високим рівнем обслуговування.
          <br />
          Поєднання доступності вишуканого алкоголю та атмосферного магазину,
          досвід команди в галузі алкоголю, система контролю та навчання для
          забезпечення високого стандарту обслуговування, щоденна аналітика цін
          та асортименту, інноваційна система віртуального сомельє.
          <br /> Переваги, що сприяють успішному та прибутковому бізнесу,
          дозволяючи вам власну франшизу з найнижчими цінами та найвищим
          сервісом на ринку
        </p>
      </Container>
      <div className="imageTumb">
        <Image
          className="logo"
          src={"/logo.png"}
          width={100}
          height={74}
          alt="logo"
        />
      </div>
    </StyledAbout>
  );
};
