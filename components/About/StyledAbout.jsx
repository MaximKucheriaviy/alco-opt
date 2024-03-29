import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

export const StyledAbout = styled.section`
  padding-top: 117px;
  padding-bottom: 64px;
  position: relative;
  z-index: 850;
  h2 {
    position: relative;
    z-index: 1000;
    color: var(--Button-color, #da2919);
    font-family: "Proxima Nova";
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    ${mediaScreen(1280)} {
      font-size: 64px;
    }
  }
  .subtitle {
    color: #fff;

    font-family: "Proxima Nova";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    ${mediaScreen(1280)} {
      font-size: 36px;
    }
  }
  .lineRed {
    margin-top: 20px;
  }
  & .textList {
    width: auto;
    ${mediaScreen(1280)} {
      width: 552px;
    }
  }
  & .text {
    margin-top: 24px;
    /* width: 580px; */
    color: #fff;
    display: flex;
    /* align-items: baseline; */

    & span {
      color: #f71b07;

      font-family: "Proxima Nova";
      /* font-size: 18px; */
      font-style: normal;
      font-weight: 700;
      line-height: 145%; /* 26.1px */
    }

    font-family: "Proxima Nova";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;

    ${mediaScreen(1280)} {
      font-size: 18px;
    }
    & .redPoint {
      flex-shrink: 0;
      margin-top: 10px;
      margin-right: 10px;
      display: none;
      height: 100%;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #da2919;
      ${mediaScreen(1280)} {
        display: block;
      }
    }
  }

  .imageTumb {
    height: ${() => (601 * 100) / 718}%;
    overflow: hidden;
    width: 44%;
    position: absolute;
    bottom: 0px;
    right: 0px;
    display: none;
    ${mediaScreen(1280)} {
      display: block;
    }

    /* background-image: url("/carouselImages/1.jpg");
    background-size: cover;
    transition-property: background-image;
    transition-duration: 500ms; */
    & .slider {
      width: 100%;
      height: 100%;
      // background-color: red;

      & .item {
        width: 100%;
        height: 700px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    & .i1 {
      background-image: url("/carouselImages/1.jpg");
    }
    & .i2 {
      background-image: url("/carouselImages/2.jpg");
    }
    & .i3 {
      background-image: url("/carouselImages/3.jpg");
    }
    & .i4 {
      background-image: url("/carouselImages/4.jpg");
    }
    & .logoText {
      color: #fff;

      font-family: "DIN Pro";
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 100% */
      text-transform: uppercase;
      width: 180px;
    }
    & .image {
      width: 100%;
      height: auto;
    }
    & .logo {
      position: absolute;
      top: 0;
      left: -25px;
      top: -20px;
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }

  .imageTumbMobile {
    margin-top: 86px;
    height: ${() => (601 * 100) / 718}%;
    overflow: hidden;
    width: 100%;

    bottom: 0px;
    right: 0px;
    display: block;
    ${mediaScreen(1280)} {
      display: none;
    }
    /* background-image: url("/carouselImages/1.jpg");
    background-size: cover;
    transition-property: background-image;
    transition-duration: 500ms; */
    & .slider {
      width: 100%;
      height: 100%;
      // background-color: red;

      & .item {
        width: 100%;
        height: 341px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    & .i1 {
      background-image: url("/carouselImages/1.jpg");
    }
    & .i2 {
      background-image: url("/carouselImages/2.jpg");
    }
    & .i3 {
      background-image: url("/carouselImages/3.jpg");
    }
    & .i4 {
      background-image: url("/carouselImages/4.jpg");
    }
    & .logoText {
      color: #fff;

      font-family: "DIN Pro";
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 100% */
      text-transform: uppercase;
      width: 180px;
    }
    & .image {
      width: 100%;
      height: auto;
    }
    & .logo {
      position: absolute;
      top: 0;
      left: -25px;
      top: -20px;
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }
  & .corouselDots {
    display: flex;
    margin-top: 29px;
    gap: 5px;
    justify-content: center;
    & div {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: #3c3131;
    }
    & .active {
      background-color: #da2919;
    }
  }
  & .numberAir {
    position: absolute;
    font-size: 80px;
    top: -60px;
    left: 0px;
    ${mediaScreen(1280)} {
      font-size: 130px;
      top: -110px;
      left: 0px;
    }
  }

  & .opt {
    position: absolute;
    /* font-size: 130px; */
    display: none;
    transform: rotateZ(-90deg);
    ${mediaScreen(1280)} {
      display: block;
      top: 180px;
      left: 255px;
    }
  }
`;
