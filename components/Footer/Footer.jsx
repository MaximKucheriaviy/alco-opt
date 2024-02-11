import { StyledFooter } from "./StyledFooter";
import { Container } from "../Container/Container";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container className="container">
        <Image src="/logo.png" width={108} height={80} />
        <p className="notAll">Вистачить не всім</p>
        <div className="addresBlock">
          <p className="title">Адреса</p>
          <Link className="item" href={"/"}>
            Київ, вул. О Мишуги, 3А
          </Link>
          <p className="item">Пн.-Нд. 11:00-23:00</p>
        </div>
        <div className="addresBlock">
          <p className="title">Номер телефону</p>
          <Link className="item" href="tel:+380939334303">
            +38 093 933 43 03
          </Link>
          <Link className="item" href="mailto:info@alcoopt.com.ua">
            info@alcoopt.com.ua
          </Link>
        </div>
        <div className="addresBlock">
          <p className="title">Соціальні мережі</p>
          <div className="socialLiks">
            <Link href={"/"}>
              <Image
                src={"/footerIcons/telegram.svg"}
                width={24}
                height={24}
                alt="icon"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/footerIcons/instagram.svg"}
                width={24}
                height={24}
                alt="icon"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/footerIcons/facebook.svg"}
                width={24}
                height={24}
                alt="icon"
              />
            </Link>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};
