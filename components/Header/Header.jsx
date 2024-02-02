import { StyledHeader } from "./StyledHeader";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="blackDiv">
          <Link className="leftLink" href={"/"}>
            <Image src={"/pinSVG.svg"} width={13} height={16} alt="icon" />
            Київ, вул. О. Мишуги, 3А
          </Link>
          <div className="rightLinks">
            <Image src={"/instagram.svg"} width={26} height={26} alt="icon" />
            <Image src={"/facebook.svg"} width={26} height={26} alt="icon" />
            <Image src={"/telegram.svg"} width={26} height={26} alt="icon" />
          </div>
        </div>
        <div className="absoluteDiv">
          <Image src={"/logo.png"} width={100} height={74} alt="logo" />
          <nav className="mainNavigation">
            <Link href={"/"}>Про нас</Link>
            <Link href={"/"}>Програма лояльності</Link>
            <Link href={"/"}>Контакти</Link>
          </nav>
          <Button className={"button"}>Франчайзинг</Button>
        </div>
      </Container>
    </StyledHeader>
  );
};
