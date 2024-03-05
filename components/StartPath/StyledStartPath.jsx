import styled from "@emotion/styled";

export const StyledStartPath = styled.section`
  background-color: #131313;
  padding-top: 174px;
  padding-bottom: 119px;
  & h2 {
    color: #fff;

    font-family: "Proxima Nova";
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  & .pathTopLine {
    position: relative;
    margin-top: 81px;
    display: grid;
    grid-template-columns: repeat(4, 161px);
    grid-column-gap: 129px;
    grid-row-gap: 64px;
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
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    text-align: center;
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
    width: 159px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: "Proxima Nova";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

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
    top: 170px;
    left: 440px;
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
    font-size: 130px;
    top: -110px;
    left: -20px;
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
    /* top: -20px; */
    right: -100px;
    top: -250px;
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;
