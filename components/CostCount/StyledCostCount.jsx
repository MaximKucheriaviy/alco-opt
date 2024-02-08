import styled from "@emotion/styled";

export const StyledCostCount = styled.section`
  height: 813px;
  position: relative;
  background-color: #ff4a3a;
  background-position: center;
  & container {
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
      width: 100%;
    }
  }
`;
