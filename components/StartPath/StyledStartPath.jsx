import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

export const StyledStartPath = styled.section`
  background-color: #131313;
  padding-top: 172px;
  padding-bottom: 64px;
  ${mediaScreen(1280)} {
    padding-top: 174px;
    padding-bottom: 119px;
  }
  & h2 {
    color: #fff;

    font-family: "Proxima Nova";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    ${mediaScreen(1280)} {
      font-size: 52px;
    }
  }
  & .pathTopLine {
    position: relative;
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(2, 94px);
    justify-content: space-between;
    grid-row-gap: 64px;
    ${mediaScreen(1280)} {
      grid-template-columns: repeat(4, 161px);
      grid-column-gap: 129px;
      justify-content: left;
      margin-top: 81px;
    }
  }

  & .bottomLine {
    position: relative;
    padding-left: 46px;
    margin-top: 64px;
    display: flex;
    padding-bottom: 27px;
    height: 208px;
  }
  & .item {
    max-height: 203px;
  }

  & .number {
    font-family: "Proxima Nova";
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    text-align: center;
    ${mediaScreen(1280)} {
      font-size: 96px;
    }
  }
  & .outlined {
    color: transparent;
    -webkit-text-stroke: 1px #f04031;
  }
  & .filled {
    color: #f04031;
  }
  & .discription {
    color: #fff;
    width: 97px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: "Proxima Nova";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    ${mediaScreen(1280)} {
      width: 159px;
      font-size: 14px;
    }

    & .name {
      color: #f04031;
    }
  }

  & .arrowBow1 {
    position: absolute;
    top: 9px;
    left: 150px;
  }
  & .arrowBow2 {
    position: absolute;
    top: 100px;
    left: 110px;
    width: 70px;
    height: 9px;
    ${mediaScreen(1280)} {
      top: 170px;
      left: 440px;
      width: initial;
      height: initial;
    }
  }
  & .arrowBow3 {
    position: absolute;
    top: 0px;
    left: 740px;
  }
  & .arrowBow4 {
    position: absolute;
    top: 250px;
    left: 150px;
  }
  & .arrowBow5 {
    position: absolute;
    bottom: 20px;
    left: 432px;
    transform: rotateZ(6.002deg);
  }
  & .arrowBow6 {
    position: absolute;
    top: 250px;
    left: 740px;
  }
  & .numberAir {
    position: absolute;
    font-size: 80px;
    top: -65px;
    left: -5px;
    ${mediaScreen(1280)} {
      font-size: 130px;
      top: -110px;
      left: -20px;
    }
  }
  & .opt {
    position: absolute;
    /* font-size: 140px; */
    top: 100px;
    right: -320px;
    transform: rotateZ(-90deg);
  }
  & .logoText {
    color: #fff;

    font-family: "DIN Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 100% */
    text-transform: uppercase;
    width: 100px;

    ${mediaScreen(1280)} {
      width: 180px;
      font-size: 32px;
      line-height: 32px; /* 100% */
    }
  }

  & .m2 {
    top: 300px;
  }
  & .m3 {
    top: 500px;
  }
  & .m4 {
    top: 700px;
  }

  & .m2,
  & .m3,
  & .m4 {
    ${mediaScreen(1280)} {
      display: none;
    }
  }
  & .image {
    width: 64px;
    height: 46px;
    ${mediaScreen(1280)} {
      width: 100%;
      height: auto;
    }
  }
  & .logo {
    position: absolute;
    /* top: -20px; */
    right: 16px;
    top: -350px;
    display: flex;
    align-items: center;
    gap: 24px;

    ${mediaScreen(1280)} {
      top: -250px;
      right: 00px;
    }
  }
`;
