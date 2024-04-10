import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

export const StyledStartPath = styled.section`
  background-color: #131313;
  padding-top: 172px;
  padding-bottom: 64px;
  position: relative;
  ${mediaScreen(768)} {
    padding-top: 148px;
    padding-bottom: 80px;
  }
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
    ${mediaScreen(768)} {
      font-size: 48px;
      width: 390px;
    }
    text-transform: uppercase;
    ${mediaScreen(1280)} {
      font-size: 52px;
      width: auto;
    }
  }
  & .pathTopLine {
    position: relative;
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(2, 94px);
    justify-content: space-between;
    grid-row-gap: 64px;
    ${mediaScreen(768)} {
      grid-template-columns: repeat(3, 161px);
    }
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
    ${mediaScreen(768)} {
      font-size: 100px;
    }
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

    ${mediaScreen(768)} {
      width: 159px;
      font-size: 14px;
    }

    & .name {
      display: block;
      ${mediaScreen(768)} {
        display: inline;
      }
      color: #f04031;
    }
  }

  & .arrowBow1 {
    position: absolute;
    top: 9px;
    left: 170px;
    ${mediaScreen(768)} {
      width: 100px;
      height: 20px;
    }
    ${mediaScreen(1280)} {
      top: 9px;
      left: 150px;
      width: initial;
      height: initial;
    }
  }
  & .arrowBow2 {
    position: absolute;
    top: 100px;
    left: 110px;
    width: 70px;
    height: 9px;
    ${mediaScreen(768)} {
      width: 100px;
      height: 20px;
      top: 190px;
      left: 450px;
    }
    ${mediaScreen(1280)} {
      top: 180px;
      left: 430px;
      width: initial;
      height: initial;
    }
  }
  & .arrowBow3 {
    position: absolute;
    top: 520px;
    left: 170px;
    width: 100px;
    height: 20px;
    ${mediaScreen(1280)} {
      top: 0px;
      left: 740px;
      width: initial;
      height: initial;
    }
  }
  & .arrowBow4 {
    position: absolute;
    top: 250px;
    left: 170px;
    width: 100px;
    height: 20px;
    ${mediaScreen(1280)} {
      top: 250px;
      left: 150px;
      width: initial;
      height: initial;
    }
  }
  & .arrowBow5 {
    position: absolute;
    bottom: 20px;
    left: 432px;
    transform: rotateZ(6.002deg);
    ${mediaScreen(768)} {
      display: none;
    }
    ${mediaScreen(1280)} {
      display: block;
    }
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
    ${mediaScreen(768)} {
      font-size: 120px;
      top: -95px;
      left: -5px;
    }
    ${mediaScreen(1280)} {
      font-size: 130px;
      top: -110px;
      left: -20px;
    }
  }
  & .opt {
    line-height: 100%;
    position: absolute;
    font-size: 110px;

    top: 668px;
    right: -160px;
    transform: rotateZ(-90deg);

    ${mediaScreen(768)} {
      display: none;
    }
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
    ${mediaScreen(768)} {
      top: 460px;
    }
  }
  & .m3 {
    top: 500px;
    ${mediaScreen(768)} {
      display: none;
    }
  }
  & .m4 {
    top: 700px;
    ${mediaScreen(768)} {
      display: none;
    }
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
    ${mediaScreen(768)} {
      width: 108px;
      height: 80px;
    }
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
    ${mediaScreen(768)} {
      right: 16px;
      top: -250px;
    }
    ${mediaScreen(1280)} {
      top: -250px;
      right: 00px;
    }
  }
`;
