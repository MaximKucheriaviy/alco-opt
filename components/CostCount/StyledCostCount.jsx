import styled from "@emotion/styled";

export const StyledCostCount = styled.section`
  position: relative;
  background-color: #ff4a3a;
  background-position: center;
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
    padding-bottom: 125px;
    width: 50%;

    & h2 {
      width: 624px;
      color: #fff;
      font-family: "Proxima Nova";
      font-size: 52px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; /* 115.385% */
      text-transform: uppercase;
    }

    & .priceItem {
      display: flex;
      justify-content: space-between;
      &:not(:first-child) {
        margin-top: 32px;
      }
    }

    & .whiteBlock {
      background-color: white;
      padding: 48px 40px;
      margin-top: 42px;
      & .priceBig {
        color: #000;
        font-family: "Proxima Nova";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
      & .redValue {
        color: var(--Button-color, #da2919);
        font-family: "Proxima Nova";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
      & .from {
        margin-top: 16px;
        color: var(--Button-color, #9e9e9e);

        font-family: "Proxima Nova";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        text-align: right;
      }
      & .price {
        color: #000;

        font-family: "Proxima Nova";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      .value {
        color: #353535;

        font-family: "Proxima Nova";
        font-size: 32px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;

      width: 100%;
      height: 88px;
      background: rgba(255, 255, 255, 0.24);

      backdrop-filter: blur(5px);
      border: none;

      color: #fff;

      font-family: "Proxima Nova";
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  & .rightContainer {
    padding-top: 88px;
    padding-left: 70px;

    & .place {
      color: #171717;

      font-family: "Proxima Nova";
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; /* 125% */
      text-transform: uppercase;
    }
    & .priceses {
      margin-top: 73px;
      color: #151414;

      font-family: "Proxima Nova";
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      & p {
        transform: rotateZ(-90deg);
      }

      display: flex;
    }

    & элемент {
    }
    .css-14pt78w-MuiSlider-rail {
      display: block;

      position: absolute;

      border-radius: inherit;

      background-color: currentColor;

      opacity: 0.38;

      width: 100%;

      height: inherit;

      top: 50%;

      -webkit-transform: translateY(-50%);

      -moz-transform: translateY(-50%);

      -ms-transform: translateY(-50%);

      transform: translateY(-50%);
    }
    & .MuiSlider-root {
      margin-top: 44px;
      color: transparent;
      height: 12px;
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
  }
`;
