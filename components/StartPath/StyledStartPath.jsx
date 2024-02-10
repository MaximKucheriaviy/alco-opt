import styled from "@emotion/styled";

export const StyledStartPath = styled.section`
  background-color: #131313;
  padding-top: 174px;
  padding-bottom: 71px;
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
    padding-left: 67px;
    margin-top: 81px;
    display: flex;
    padding-top: 9px;
    padding-bottom: 27px;
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

    text-align: center;
    font-family: "Proxima Nova";
    font-size: 16px;
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
    left: 231px;
  }
  & .arrowBow2 {
    position: absolute;
    bottom: 0px;
    left: 553px;
  }
  & .arrowBow3 {
    position: absolute;
    top: 0px;
    left: 886px;
  }
  & .arrowBow4 {
    position: absolute;
    top: 0px;
    left: 229px;
  }
  & .arrowBow5 {
    position: absolute;
    bottom: 0px;
    left: 552px;
    transform: rotateZ(6.002deg);
  }
  & .arrowBow6 {
    position: absolute;
    top: 0px;
    left: 894px;
  }
`;
