import { mediaScreen } from "@/service/mediaRules";
import styled from "@emotion/styled";

export const StyledInvastition = styled.section`
  background-color: #fff;
  padding-top: 164px;
  padding-bottom: 82px;
  display: grid;
  overflow: hidden;
  ${mediaScreen(1280)} {
    padding-top: 152px;
  }
  & .description {
    position: relative;
    z-index: 1000;
    color: var(--Text-color, #0b0b0b);
    font-family: "Proxima Nova";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    ${mediaScreen(1280)} {
      font-size: 52px;
    }
  }
  & h2 {
    position: relative;
    z-index: 1000;
    margin-top: 56px;
    color: #000;

    font-family: "Proxima Nova";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    ${mediaScreen(1280)} {
      font-size: 40px;
      margin-top: 64px;
    }
  }
  & .line {
    margin-top: 16px;
    ${mediaScreen(1280)} {
      margin-top: 32px;
    }
  }

  & .grid1 {
    margin-top: 40px;
    display: grid;
    column-gap: 40px;
    /* grid-template-columns: repeat(3, 282px); */
    row-gap: 24px;
    ${mediaScreen(1280)} {
      margin-top: 56px;
      grid-template-columns: repeat(3, 282px);
      row-gap: 56px;
    }
  }

  & .moreButton {
    color: #f71b07;

    font-family: "Proxima Nova";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 1px;
    border: 0.5px solid #f71b07;
    background-color: transparent;
    height: 49px;
    text-align: center;
    width: 100%;
    margin-top: 40px;
    ${mediaScreen(1280)} {
      display: none;
    }
  }
  & .values {
    margin-top: 80px;
    color: var(--Text-color, #0b0b0b);

    font-family: "Proxima Nova";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    ${mediaScreen(1280)} {
      margin-top: 72px;
    }
  }
  & .numberAir {
    position: absolute;
    font-size: 130px;
    top: -100px;
    left: -30px;
    -webkit-text-stroke-color: #ffc0bc71;
  }
  & .opt,
  & .optAlco {
    -webkit-text-stroke-color: #ffc0bc6e;
    line-height: 100%;
    position: absolute;
    font-size: 110px;
    top: 430px;
    right: -275px;
    transform: rotateZ(-90deg);
    ${mediaScreen(1280)} {
      top: 50px;
      left: 200px;
      font-size: 56px;
      right: initial;
    }
  }
  & .optAlco {
    top: initial;
    bottom: 200px;
    right: -255px;
    ${mediaScreen(1280)} {
      display: none;
    }
  }
  & .logoText {
    color: #f04130;

    font-family: "DIN Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 100% */
    text-transform: uppercase;
    width: 100px;
    ${mediaScreen(1280)} {
      font-size: 32px;
      width: 180px;
      line-height: 32px; /* 100% */
    }
  }
  & .image {
    width: 63px;
    height: 46px;
    flex-shrink: 0;
    ${mediaScreen(1280)} {
      width: 100%;
      height: auto;
    }
  }
  & .logo {
    position: absolute;
    /* top: -20px; */
    right: 0px;
    top: -130px;
    display: flex;
    align-items: center;
    gap: 24px;
    ${mediaScreen(1280)} {
      right: 0px;
      top: -90px;
    }
  }
`;
