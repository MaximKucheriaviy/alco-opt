import styled from "@emotion/styled";

export const StyledAbout = styled.section`
  padding-top: 175px;
  padding-bottom: 64px;
  position: relative;
  z-index: 850;
  h2 {
    color: var(--Button-color, #da2919);
    font-family: "Proxima Nova";
    font-size: 64px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    & .defis {
      font-size: 48px;
    }
  }
  .subtitle {
    color: var(--Button-color, #fff);
    font-family: "Proxima Nova";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
  .line {
    margin-top: 20px;
  }
  & .textList {
    width: 530px;
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
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 145%; /* 26.1px */
    }

    font-family: "Proxima Nova";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
    & .redPoint {
      margin-top: 10px;
      margin-right: 10px;
      display: block;
      height: 100%;
      width: 20px;
      height: 5px;
      border-radius: 50%;
      background-color: #da2919;
    }
  }

  .imageTumb {
    height: ${() => (601 * 100) / 718}%;
    /* overflow: hidden; */
    width: 50%;
    position: absolute;
    bottom: 0px;
    right: 0px;

    background-image: url("/imageAbout.jpg");
    background-repeat: no-repeat;
    background-size: cover;
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
  & .numberAir {
    position: absolute;
    font-size: 130px;
    top: -100px;
    left: 0px;
  }

  & .opt {
    position: absolute;
    /* font-size: 130px; */
    top: -20px;
    left: 199px;
    transform: rotateZ(-90deg);
  }
`;
