import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

export const StyledCostCount = styled.section`
  position: relative;
  z-index: 5;
  background-color: #ff4a3a;
  background-position: center;
  overflow: hidden;
  padding-top: 116px;
  ${mediaScreen(1280)} {
    padding-top: 0;
  }
  & .container {
    display: flex;
    flex-direction: column-reverse;
    ${mediaScreen(1280)} {
      flex-direction: row;
    }
  }
  & .imageThumb {
    /* display: none; */
    width: 100%;
    height: 562px;
    position: absolute;
    bottom: 0px;
    left: 0;
    background-image: url("/imageCostCount.png");
    background-size: cover;
    ${mediaScreen(1280)} {
      display: block;
      width: 50%;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
  & .leftContainer {
    /* padding-top: 160px; */
    padding-bottom: 116px;
    /* width: 50%; */
    /* background-image: url("/imageCostCount.png"); */
    ${mediaScreen(1280)} {
      background-image: none;
      width: 50%;
      padding-top: 160px;
      padding-bottom: 76px;
    }

    & h2 {
      display: none;
      ${mediaScreen(1280)} {
        display: block;
      }
      width: 624px;
      color: #fff;
      font-family: "Proxima Nova";
      font-size: 44px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; /* 115.385% */
      text-transform: uppercase;
    }

    & .priceItem {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      &:not(:first-child) {
        margin-top: 14px;
      }
    }

    & .whiteBlock {
      background-color: white;
      padding: 40px 24px;
      margin-top: 42px;
      position: relative;
      ${mediaScreen(1280)} {
        padding: 48px 40px;
      }
      & .dialog {
        position: absolute;
        top: -100px;
        left: 35px;
        ${mediaScreen(1280)} {
          top: -80px;
          left: 246px;
        }
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
          drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        fill: rgba(255, 255, 255, 0.28);
        & .text {
          position: absolute;
          color: #000;

          text-align: center;
          font-family: "Proxima Nova";
          width: 162px;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;

          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-60%);
        }
      }
      & .priceBig {
        position: relative;
        color: #000;
        font-family: "Proxima Nova";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        ${mediaScreen(1280)} {
          font-size: 28px;
        }
        & button {
          border: none;
          background-color: transparent;
          position: absolute;
          top: -10px;
          left: 100px;
          ${mediaScreen(1280)} {
            top: -10px;
            left: 0px;
            position: relative;
          }
        }
      }
      & .redValue {
        color: var(--Button-color, #da2919);
        font-family: "Proxima Nova";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        flex-shrink: 0;
        ${mediaScreen(1280)} {
          font-size: 28px;
        }
      }
      & .from {
        margin-top: 6px;
        color: var(--Button-color, #9e9e9e);

        font-family: "Proxima Nova";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        text-align: right;
        ${mediaScreen(1280)} {
          margin-top: 16px;
          font-size: 14px;
        }
      }
      & .price {
        color: #000;

        font-family: "Proxima Nova";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        ${mediaScreen(1280)} {
          font-weight: 700;
          font-size: 24px;
        }
      }

      .value {
        color: #353535;

        font-family: "Proxima Nova";
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        flex-shrink: 0;
      }
    }
    & .link,
    & .linkMobile {
      ${mediaScreen(1280)} {
        display: flex;
      }
      display: none;
      justify-content: center;
      align-items: center;
      gap: 32px;
      text-decoration: none;

      width: 100%;
      height: 70px;
      background: rgba(255, 255, 255, 0.24);

      backdrop-filter: blur(5px);
      border: none;

      color: #fff;

      font-family: "Proxima Nova";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    & .linkMobile {
      ${mediaScreen(1280)} {
        display: none;
      }
      font-size: 16px;
      display: flex;
      height: 51px;
    }
  }
  & .rightContainer {
    padding-bottom: 64px;
    ${mediaScreen(1280)} {
      padding-top: 88px;
      padding-left: 70px;
      padding-bottom: 0px;
      width: 50%;
    }

    & h2 {
      display: block;
      ${mediaScreen(1280)} {
        display: none;
      }

      color: #fff;
      font-family: "Proxima Nova";
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; /* 115.385% */
      text-transform: uppercase;
    }

    & .place {
      color: #171717;

      font-family: "Proxima Nova";
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; /* 125% */
      text-transform: uppercase;
      margin-top: 56px;
      ${mediaScreen(1280)} {
        font-size: 42px;
        margin-top: 0;
      }
    }
    & .priceses {
      margin-top: 73px;
      color: #fff;
      /* width: 421px; */
      /* height: 75px; */
      font-family: "Proxima Nova";
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: 15px;
      transform: rotateZ(-90deg) translateY(-35px);
      width: 90px;
      height: 0px;
      ${mediaScreen(1280)} {
        /* width: 421px; */
        transform: rotateZ(-90deg) translateY(-20px) translateX(20px);

        line-height: 20px;
      }

      li {
        &:not(:last-child) {
          margin-bottom: 30px;
        }
        ${mediaScreen(1280)} {
          &:not(:last-child) {
            margin-bottom: 43px;
          }
        }
        flex-shrink: 0;
        /* width: 80px; */
      }
      & br {
        /* margin-top: 0px; */
      }
      & span {
        font-size: 12px;
      }
      & .active {
        color: #151414;
        font-weight: 700;
      }
      & p {
        cursor: pointer;
        flex-shrink: 0;
        /* width: 0px; */
        /* height: 10px; */
      }
      /* gap: -20px; */
      align-items: center;
    }

    & .MuiSlider-root {
      transform: translateX(40px);
      margin-top: 64px;
      color: transparent;
      height: 12px;
      width: 200px;
      ${mediaScreen(1280)} {
        width: 350px;
        margin-top: 44px;
      }
    }
    & .MuiSlider-track {
      background: rgba(255, 255, 255, 0.719);
    }
    & .MuiSlider-rail {
      background: rgba(255, 255, 255, 0.404);
    }
    & .MuiSlider-thumb {
      width: 65px;
      height: 44px;
      border-radius: 22px;
      border: 5px solid #fff;
      background: #000;
      box-shadow: 4px 0px 20px 0px rgba(0, 0, 0, 0.25);
    }
    & .need {
      background-color: transparent;
      border: none;
      margin-top: 48px;
      color: #000;
      display: block;
      font-family: "Proxima Nova";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-decoration-line: underline;

      ${mediaScreen(1280)} {
        font-size: 32px;
        margin-top: 80px;
      }
    }
    & .iconText {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-top: 70px;
      }
      margin-top: 32px;
      gap: 16px;

      color: #000;

      font-family: "Proxima Nova";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
      width: 280px;

      ${mediaScreen(1280)} {
        font-size: 20px;
        width: 380px;
      }
      & span {
        font-size: 20px;
        ${mediaScreen(1280)} {
          font-size: 20px;
        }
        font-weight: 700;
      }
    }
    & .first {
      width: 230px;

      ${mediaScreen(1280)} {
        width: 380px;
      }
    }
  }

  & .numberAir {
    position: absolute;
    font-size: 80px;
    top: -60px;
    left: -20px;
    ${mediaScreen(1280)} {
      width: 380px;
      font-size: 130px;
      top: 60px;
      left: -20px;
    }
  }
  & .opt {
    position: absolute;
    font-size: 140px;
    top: 300px;
    right: -350px;
    transform: rotateZ(-90deg);
  }
  & .overlay {
    z-index: 2000;
    fill: rgba(0, 0, 0, 0.62);

    display: flex;
    justify-content: center;
    align-items: center;

    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    & .modal {
      position: relative;
      display: flex;
      background-color: #fff;
      /* width: 1200px; */
      & .textDiv {
        width: 519px;
      }
      & ul {
        padding: 40px 46px;
      }
      & .text {
        margin-top: 24px;
        display: flex;

        font-family: "Proxima Nova";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 145%;
        & .blackPoint {
          margin-top: 10px;
          margin-right: 10px;
          display: block;
          height: 100%;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #000;
        }
      }
      & .modalImageThumb {
        width: 618px;
      }
      & .crostButton {
        position: absolute;
        padding: 0;
        background-color: transparent;
        border: none;
        top: 20px;
        right: 20px;
      }
    }
  }
  & .fromNumber {
    color: white;
  }
`;
