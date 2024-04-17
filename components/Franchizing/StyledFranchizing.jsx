import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

export const StyledFrancizng = styled.section`
  padding-top: 114px;
  padding-bottom: 64px;
  position: relative;
  ${mediaScreen(768)} {
    padding-top: 148px;
    padding-bottom: 81px;
  }
  ${mediaScreen(1280)} {
    padding-top: 147px;
  }
  & h2 {
    color: #fff;

    font-family: "Proxima Nova";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    ${mediaScreen(768)} {
      font-size: 48px;
    }
    ${mediaScreen(1280)} {
      font-size: 64px;
      padding-bottom: initial;
    }
  }
  & .container {
    ${mediaScreen(1280)} {
      padding-left: 95px;
    }
  }
  & .sub {
    margin-top: 32px;
    color: #fff;

    font-family: "Proxima Nova";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;

    ${mediaScreen(768)} {
      margin-top: 40px;
      font-size: 24px;
    }
  }
  & .price {
    margin-top: 24px;
    padding: 12px 16px;
    border: 1px solid #fff;
    display: flex;

    justify-content: left;
    flex-direction: column;
    gap: 16px;

    color: #f04031;

    font-family: "Proxima Nova";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 41.667% */
    & .bottomText {
      width: 167px;
    }
    ${mediaScreen(768)} {
      font-size: 24px;
      margin-top: 32px;
      padding: 16px 24px;
      display: inline-flex;
      & .bottomText {
        width: auto;
      }
    }
    ${mediaScreen(1280)} {
      font-size: 32px;
      margin-top: 32px;
      padding: 18px 32px;
      display: inline-flex;
      /* padding-right: 80px; */
      gap: 24px;
    }
  }
  & ul {
    display: grid;
    margin-top: 72px;

    grid-column-gap: 22px;
    grid-row-gap: 40px;
    grid-template-columns: repeat(2, 131px);
    ${mediaScreen(768)} {
      grid-column-gap: 41px;
      grid-row-gap: 40px;
      padding-bottom: 73px;

      grid-template-columns: repeat(2, 230px);
    }
    ${mediaScreen(1280)} {
      grid-column-gap: 56px;
      grid-row-gap: 40px;
      padding-bottom: 73px;

      grid-template-columns: repeat(2, 230px);
    }
    & li {
      color: #fff;
      font-family: "Proxima Nova";
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;

      display: flex;
      gap: 12px;
      img {
        width: 40px;
        height: 40px;
        flex-shrink: 0px;
      }

      ${mediaScreen(768)} {
        font-size: 16px;
        display: flex;
        gap: 32px;
        img {
          width: initial;
          height: initial;
        }
      }

      & p {
        ${mediaScreen(768)} {
          flex-shrink: 0;

          width: 127px;
        }
      }
      & .big {
        flex-shrink: 0;
        ${mediaScreen(768)} {
          width: 180px;
        }
      }
    }
  }
  & .image {
    display: none;

    position: absolute;
    right: 0;
    top: -20px;
    width: 343px;
    height: 343px;
    ${mediaScreen(768)} {
      display: block;
    }
    ${mediaScreen(1280)} {
      width: 469px;
      height: 469px;
      top: 20px;
      right: 70px;
    }
    & img {
      position: relative;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    /* background-color: green; */
    & .effect1 {
      position: absolute;
      width: 303.894px;
      height: 115.543px;
      transform: rotate(-5.137deg);
      flex-shrink: 0;
      top: 146px;
      left: 17px;
      ${mediaScreen(1280)} {
        top: 200px;
        left: 24px;
        width: 415.528px;
        height: 157.988px;
        transform: rotate(-5.137deg);
        flex-shrink: 0;
      }

      border-radius: 464.257px;
      background: #800a0a;

      filter: blur(150px);
    }
    & .effect2 {
      position: absolute;
      width: 163.205px;
      height: 70.655px;
      transform: rotate(6.54deg);
      flex-shrink: 0;
      top: 210px;
      left: 40px;

      ${mediaScreen(1280)} {
        top: 287px;
        left: 55px;
        width: 223.159px;
        height: 96.609px;
        transform: rotate(6.54deg);
        flex-shrink: 0;
      }
      border-radius: 464.257px;
      background: #800a0a;

      filter: blur(150px);
    }
    & .effect3 {
      position: absolute;

      width: 155.194px;
      height: 70.655px;
      transform: rotate(-4.76deg);
      flex-shrink: 0;
      top: 198px;
      left: 165px;
      ${mediaScreen(1280)} {
        top: 272px;
        left: 228px;
        width: 212.204px;
        height: 96.609px;
        transform: rotate(-4.76deg);
        flex-shrink: 0;
      }
      border-radius: 464.257px;
      fill: #ca0606;

      filter: blur(50px);
    }
  }

  & .imageMobile {
    width: 320px;
    height: 328px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    & img {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 100;
    }
    & .effect1 {
      position: absolute;
      top: 140px;
      left: 16px;
      width: 282.695px;
      height: 110.466px;
      transform: rotate(-4.999deg);
      border-radius: 282.695px;
      background: #800a0a;

      filter: blur(150px);
    }

    & .effect2 {
      position: absolute;
      width: 151.842px;
      height: 67.541px;
      transform: rotate(6.366deg);

      top: 288px;
      left: 37px;
      border-radius: 282.695px;
      background: #800a0a;
      filter: blur(150px);
    }

    & .effect3 {
      width: 144.363px;
      height: 67.552px;
      transform: rotate(-4.632deg);
      flex-shrink: 0;

      top: 278px;
      right: 15px;
      position: absolute;
      border-radius: 282.695px;
      background: #800a0a;
      filter: blur(150px);
    }
    ${mediaScreen(768)} {
      display: none;
    }
  }
  & .numberAir {
    position: absolute;
    font-size: 80px;
    top: -65px;
    left: -5px;
    ${mediaScreen(768)} {
      font-size: 120px;
      top: -100px;
    }
    ${mediaScreen(1280)} {
      font-size: 130px;
      top: -100px;
      left: 80px;
    }
  }
  & .logoText {
    color: #ffffff;

    font-family: "DIN Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 100% */
    text-transform: uppercase;
    width: 150px;
    ${mediaScreen(768)} {
      font-size: 24px;
    }
    ${mediaScreen(1280)} {
      font-size: 32px;
      width: 180px;
      line-height: 32px; /* 100% */
    }
  }

  & .logoThumb {
    width: 62px;
    height: 46px;
    ${mediaScreen(768)} {
      width: 108px;
      height: 80px;
    }
    ${mediaScreen(1280)} {
      width: auto;
      height: auto;
    }
    & img {
      width: 100%;
      height: auto;
      ${mediaScreen(1280)} {
        width: auto;
      }
    }
  }
  & .logo {
    position: static;
    margin-top: 64px;
    /* top: -20px; */
    right: 100px;
    top: -90px;
    display: flex;
    align-items: center;
    gap: 24px;
    ${mediaScreen(768)} {
      margin-top: 0;
      position: absolute;
      right: 0px;
    }
    & .image {
      width: 100%;
      height: auto;
    }
  }
`;
