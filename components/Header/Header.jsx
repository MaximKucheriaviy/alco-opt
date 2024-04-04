import { StyledHeader, Modal } from "./StyledHeader";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import { Portal } from "../Portal/Portal";

export const Header = () => {
  const [linkHidden, setLinkHidden] = useState(true);
  const [burOpen, burOpenSet] = useState(false);
  const linkClose = () => {
    if (typeof window === undefined) {
      return;
    }
    if (window.innerWidth >= 1280) {
      burOpenSet(false);
      return;
    }

    setLinkHidden((prev) => !prev);
  };

  return (
    <StyledHeader>
      <Container className="headerContainer">
        <div className="blackDiv">
          <Link
            className="leftLink"
            href={"https://maps.app.goo.gl/stFAbqGuakX4AJLA8"}
          >
            <Image src={"/pinSVG.svg"} width={13} height={16} alt="icon" />
            Київ, вул. О. Мишуги, 3А
          </Link>
          <button onClick={linkClose} className="leftLinkMobile">
            <Image src={"/pinSVG.svg"} width={20} height={24} alt="icon" />
          </button>
          <div className={`hiddenMobileLink ${linkHidden && "visuallyHidden"}`}>
            <Link href={"https://maps.app.goo.gl/stFAbqGuakX4AJLA8"}>
              Київ, вул. О. Мишуги, 3А{" "}
            </Link>
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
            <Link href="https://www.instagram.com/alcoopt_ua/">
              <Image src={"/instagram.svg"} width={26} height={26} alt="icon" />
            </Link>
            <Link href="https://www.facebook.com/alcoopt">
              <Image src={"/facebook.svg"} width={26} height={26} alt="icon" />
            </Link>
            <Link href="https://t.me/alcoopt_ua_bot">
              <Image src={"/telegram.svg"} width={26} height={26} alt="icon" />
            </Link>
            <Link href="https://www.tiktok.com/@alcoopt_ua">
              <Image
                src={"/footerIcons/tiktok.svg"}
                width={26}
                height={26}
                alt="icon"
              />
            </Link>
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
            <Link href={"https://alcoopt.com.ua/#about"}>Про нас</Link>
            <Link href={"https://alcoopt.com.ua/#booster"}>
              Програма лояльності
            </Link>
            <Link href={"https://alcoopt.com.ua/#contact"}>Контакти</Link>
          </nav>
          <Button className={"button"}>Франчайзинг</Button>
          <button
            onClick={() => {
              burOpenSet(true);
            }}
            className="burgerButton"
          >
            <Image
              src={"/burgerButton.svg"}
              width={32}
              height={24}
              alt="bugerButton"
            />
          </button>
        </div>
      </Container>
      {burOpen && (
        <Portal>
          <Modal>
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

              <button
                onClick={() => {
                  burOpenSet(false);
                }}
                className="burgerButton"
              >
                <Image
                  src={"/crostRed.svg"}
                  width={32}
                  height={32}
                  alt="bugerButton"
                />
              </button>
            </div>
            <Container className="container">
              <nav className="mainNavigation">
                <Link href={"https://alcoopt.com.ua/#about"}>
                  Про нас
                  <div className="arrow">
                    <Image
                      src={"/Arrow9.svg"}
                      width={11}
                      height={11}
                      alt="arrow"
                    />
                  </div>
                </Link>
                <Link href={"https://alcoopt.com.ua/#booster"}>
                  Програма лояльності
                  <div className="arrow">
                    <Image
                      src={"/Arrow9.svg"}
                      width={11}
                      height={11}
                      alt="arrow"
                    />
                  </div>
                </Link>
                <Link href={"https://alcoopt.com.ua/#contact"}>
                  Контакти{" "}
                  <div className="arrow">
                    <Image
                      src={"/Arrow9.svg"}
                      width={11}
                      height={11}
                      alt="arrow"
                    />
                  </div>
                </Link>
              </nav>
              <Button className={"button"}>
                Франчайзинг{" "}
                <div className="arrow">
                  <Image
                    src={"/Arrow9.svg"}
                    width={11}
                    height={11}
                    alt="arrow"
                  />
                </div>
              </Button>
            </Container>
          </Modal>
        </Portal>
      )}
    </StyledHeader>
  );
};
