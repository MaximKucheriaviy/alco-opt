import { StyledHeader } from "./StyledHeader";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { useState } from "react";

export const Header = () => {
  const [linkHidden, setLinkHidden] = useState(true);
  const linkClose = () => {
    if (window.innerWidth >= 1280) {
      return;
    }
    setLinkHidden((prev) => !prev);
  };
  return (
    <StyledHeader>
      <Container className="headerContainer">
        <div className="blackDiv">
          <Link className="leftLink" href={"/"}>
            <Image src={"/pinSVG.svg"} width={13} height={16} alt="icon" />
            Київ, вул. О. Мишуги, 3А
          </Link>
          <button onClick={linkClose} className="leftLinkMobile">
            <Image src={"/pinSVG.svg"} width={20} height={24} alt="icon" />
          </button>
          <div className={`hiddenMobileLink ${linkHidden && "visuallyHidden"}`}>
            <Link href={"/"}>Київ, вул. О. Мишуги, 3А </Link>
            <button onClick={linkClose}>
              <Image
                width={12}
                height={12}
                src={"/crostRed.svg"}
                alt="corost"
              />
            </button>
          </div>
          <div className={`rightLinks ${linkHidden || "visuallyHidden"}`}>
            <Image src={"/instagram.svg"} width={26} height={26} alt="icon" />
            <Image src={"/facebook.svg"} width={26} height={26} alt="icon" />
            <Image src={"/telegram.svg"} width={26} height={26} alt="icon" />
            <Image
              src={"/footerIcons/tiktok.svg"}
              width={26}
              height={26}
              alt="icon"
            />
          </div>
        </div>
        <div className="absoluteDiv">
          <div className="logoThumb">
            <Image
              src={"/logo.png"}
              className="imageThumbed"
              width={100}
              height={74}
              alt="logo"
            />
          </div>
          <nav className="mainNavigation">
            <Link href={"/"}>Про нас</Link>
            <Link href={"/"}>Програма лояльності</Link>
            <Link href={"/"}>Контакти</Link>
          </nav>
          <Button className={"button"}>Франчайзинг</Button>
          <button className="burgerButton">
            <Image
              src={"/burgerButton.svg"}
              width={32}
              height={24}
              alt="bugerButton"
            />
          </button>
        </div>
      </Container>
    </StyledHeader>
  );
};
