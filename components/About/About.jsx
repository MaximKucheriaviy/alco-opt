import { Container } from "../Container/Container";
import { StyledAbout } from "./StyledAbout";
import { Line } from "../Line/Line";
import Image from "next/image";
import { NavigationControl } from "../NavigationControl/NavigationControl";
import { Lines } from "../Lines/Lines";

export const About = () => {
  return (
    <StyledAbout id="about">
      <Lines />
      <Container>
        <p className="airBackText numberAir">№2</p>
        <p className="airBackText opt">АЛКО/ОПТ</p>

        <h2>АЛКО/ОПТ</h2>
        <p className="subtitle">РЕВОЛЮЦІЙНА КОНЦЕПЦІЯ: </p>
        <Line className="line" />
        <ul className="textList">
          <li className="text">
            <div className="redPoint"></div>
            <div>
              <span>МАГАЗИН</span> - концепція вирізняється своєю унікальністю
              через найнижчі ціни на алкоголь у різних сегментах, що неоднаково
              привертає увагу не лише покупців класичних магазинів, але й
              онлайн-торгівлі. Водночас надається вищий рівень обслуговування,
              який впевнено задовольняє усіх покупців.
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
              <span>БАР</span> - купуйте з полиці, насолоджуйтеся за баром –
              ціни залишаються незмінними! Ми даємо найнижчю ціну на коктейлі,
              за класичною рецептурою та використанням якісних інгредієнтів.
              Якщо сумніваєтеся в смакових вподобаннях, спробуйте 50 мл. за
              баром – лише після цього обирайте свою ідеальну пляшку.
            </div>
          </li>
        </ul>
        <NavigationControl active={2} top={150} />
      </Container>
      <div className="imageTumb">
        <div className="logo">
          <Image src={"/logo.png"} width={100} height={74} alt="logo" />
          <p className="logoText">Вистачить не всім</p>
        </div>
      </div>
    </StyledAbout>
  );
};
