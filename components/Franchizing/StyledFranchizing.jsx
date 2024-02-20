import styled from "@emotion/styled";

export const StyledFrancizng = styled.section`
  padding-top: 147px;
  position: relative;
  & h2 {
    color: #fff;

    font-family: "Proxima Nova";
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & .container {
    padding-left: 95px;
  }
  & .sub {
    margin-top: 40px;
    color: #fff;

    font-family: "Proxima Nova";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
  & .price {
    margin-top: 32px;
    padding: 40px 32px;
    border: 1px solid #fff;
    display: inline-block;

    color: #f04031;

    font-family: "Proxima Nova";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 41.667% */
  }
  & ul {
    display: flex;
    margin-top: 72px;
    gap: 32px;
    padding-bottom: 73px;
    & li {
      color: #fff;
      font-family: "Proxima Nova";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;

      display: flex;
      gap: 32px;
      & p {
        width: 127px;
      }
    }
  }
  & .image {
    position: absolute;
    top: -120px;
    right: 116px;
    width: 524px;
    height: 524px;

    & img {
      position: relative;
      z-index: 0;
    }
    /* background-color: green; */
    & .effect1 {
      position: absolute;
      top: 223px;
      left: 27px;
      width: 464.257px;
      height: 176.515px;
      transform: rotate(-5.137deg);
      flex-shrink: 0;

      border-radius: 464.257px;
      background: #800a0a;

      filter: blur(150px);
    }
    & .effect2 {
      position: absolute;
      top: 321px;
      left: 62px;
      width: 249.328px;
      height: 107.939px;
      transform: rotate(6.54deg);
      flex-shrink: 0;

      border-radius: 464.257px;
      background: #800a0a;

      filter: blur(150px);
    }
    & .effect3 {
      position: absolute;
      top: 304px;
      left: 253px;
      width: 237.089px;
      height: 107.939px;
      transform: rotate(-4.76deg);
      flex-shrink: 0;

      border-radius: 464.257px;
      fill: #ca0606;

      filter: blur(50px);
    }
  }
  & .numberAir {
    position: absolute;
    font-size: 130px;
    top: -100px;
    left: 50px;
  }
`;
