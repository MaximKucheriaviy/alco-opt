import styled from "@emotion/styled";

export const StyledFrancizng = styled.section`
  padding-top: 147px;
  position: relative;
  & h2 {
    color: #fff;

    font-family: "Proxima Nova";
    font-size: 64px;
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
    font-size: 24px;
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
    display: grid;
    margin-top: 72px;

    padding-bottom: 73px;
    grid-column-gap: 56px;
    grid-row-gap: 40px;
    grid-template-columns: repeat(2, 230px);
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
    top: 20px;
    right: 116px;
    width: 469px;
    height: 469px;

    & img {
      position: relative;
      z-index: 0;
    }
    /* background-color: green; */
    & .effect1 {
      position: absolute;
      top: 200px;
      left: 24px;
      width: 415.528px;
      height: 157.988px;
      transform: rotate(-5.137deg);
      flex-shrink: 0;

      border-radius: 464.257px;
      background: #800a0a;

      filter: blur(150px);
    }
    & .effect2 {
      position: absolute;
      top: 287px;
      left: 55px;
      width: 223.159px;
      height: 96.609px;
      transform: rotate(6.54deg);
      flex-shrink: 0;

      border-radius: 464.257px;
      background: #800a0a;

      filter: blur(150px);
    }
    & .effect3 {
      position: absolute;
      top: 272px;
      left: 228px;
      width: 212.204px;
      height: 96.609px;
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
    left: 80px;
  }
  & .logoText {
    color: #ffffff;

    font-family: "DIN Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 100% */
    text-transform: uppercase;
    width: 180px;
  }

  & .logo {
    position: absolute;
    /* top: -20px; */
    right: 100px;
    top: -90px;
    display: flex;
    align-items: center;
    gap: 24px;

    & .image {
      width: 100%;
      height: auto;
    }
  }
`;
