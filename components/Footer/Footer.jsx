import { StyledFooter } from "./StyledFooter";
import { Container } from "../Container/Container";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container className="container">
        <div className="logo">
          <Image
            className="image"
            src="/logo.png"
            width={108}
            height={80}
            alt="logo"
          />
          <p className="notAll">Вистачить не всім</p>
        </div>
        <div className="addresBlock">
          <p className="title">Адреса</p>
          <Link className="item addres" href={"/"}>
            Київ, вул. О Мишуги, 3А
          </Link>
          <p className="item">Пн.-Нд. 11:00-23:00</p>
        </div>
        <div className="addresBlock">
          <p className="title">Номер телефону</p>
          <Link className="item" href="tel:+380935324149">
            +38 093 532 41 49
          </Link>
          <Link className="item" href="mailto:info@alcoopt.com.ua">
            info@alcoopt.com.ua
          </Link>
        </div>
        <div className="links addresBlock">
          <p className="title">Соціальні мережі</p>
          <div className="socialLiks">
            <Link href={"https://t.me/alcoopt_ua_bot"}>
              <Image
                src={"/footerIcons/telegram.svg"}
                width={24}
                height={24}
                alt="icon"
              />
            </Link>
            <Link href={"https://www.instagram.com/alcoopt_ua/"}>
              <Image
                src={"/footerIcons/instagram.svg"}
                width={24}
                height={24}
                alt="icon"
              />
            </Link>
            <Link href={"https://www.facebook.com/alcoopt"}>
              <Image
                src={"/footerIcons/facebook.svg"}
                width={24}
                height={24}
                alt="icon"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/footerIcons/tiktok.svg"}
                width={24}
                height={24}
                alt="icon"
              />
            </Link>
          </div>
        </div>
        <div className="copyright">© 2023-2024 All rights Reserved</div>
      </Container>
    </StyledFooter>
  );
};

//tiktok.svg
