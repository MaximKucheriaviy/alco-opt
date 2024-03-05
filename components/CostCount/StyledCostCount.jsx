import styled from "@emotion/styled";

export const StyledCostCount = styled.section`
  position: relative;
  z-index: 5;
  background-color: #ff4a3a;
  background-position: center;
  overflow: hidden;
  & .container {
    display: flex;
  }
  & .imageThumb {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("/imageCostCount.png");
    background-size: cover;
  }
  & .leftContainer {
    padding-top: 160px;
    padding-bottom: 76px;
    width: 50%;

    & h2 {
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
      &:not(:first-child) {
        margin-top: 14px;
      }
    }

    & .whiteBlock {
      background-color: white;
      padding: 48px 40px;
      margin-top: 42px;
      & .priceBig {
        color: #000;
        font-family: "Proxima Nova";
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
      & .redValue {
        color: var(--Button-color, #da2919);
        font-family: "Proxima Nova";
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
      & .from {
        margin-top: 16px;
        color: var(--Button-color, #9e9e9e);

        font-family: "Proxima Nova";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        text-align: right;
      }
      & .price {
        color: #000;

        font-family: "Proxima Nova";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      .value {
        color: #353535;

        font-family: "Proxima Nova";
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
    & .link {
      display: flex;
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
  }
  & .rightContainer {
    padding-top: 88px;
    padding-left: 70px;
    width: 50%;

    & .place {
      color: #171717;

      font-family: "Proxima Nova";
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; /* 125% */
      text-transform: uppercase;
    }
    & .priceses {
      margin-top: 73px;
      color: #fff;
      width: 421px;
      height: 75px;
      font-family: "Proxima Nova";
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
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
        transform: rotateZ(-90deg);
      }

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & .MuiSlider-root {
      transform: translateX(40px);
      margin-top: 44px;
      color: transparent;
      height: 12px;
      width: 350px;
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
      margin-top: 80px;
      color: #000;
      display: block;
      font-family: "Proxima Nova";
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-decoration-line: underline;
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
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
    }
  }
  & .numberAir {
    position: absolute;
    font-size: 130px;
    top: 60px;
    left: -20px;
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
`;
