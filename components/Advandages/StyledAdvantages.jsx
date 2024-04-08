import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

export const StyledAdvantages = styled.section`
  background-color: #ff4a3a;
  padding-top: 116px;
  padding-bottom: 64px;
  position: relative;
  overflow: hidden;
  ${mediaScreen(768)} {
    padding-top: 160px;
  }
  ${mediaScreen(1280)} {
    padding-top: 149px;
    height: 813px;
  }
  h2 {
    position: relative;
    z-index: 1000;
    color: var(--Button-color, #0c0c0c);
    font-family: "Proxima Nova";
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    ${mediaScreen(768)} {
      font-size: 40px;
    }
    ${mediaScreen(1280)} {
      font-size: 48px;
    }
    & span {
      color: var(--Button-color, #0c0c0c);

      font-family: "Proxima Nova";
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      ${mediaScreen(1280)} {
        font-size: 40px;
      }
    }
  }
  & .controlBox {
    margin-top: 40px;
    display: none;
    flex-direction: column;
    gap: 25px;
    position: relative;
    ${mediaScreen(768)} {
      display: flex;
    }
    & .line {
      position: absolute;
      top: 0;
      left: 25px;
      height: 100%;
      border-left: 1px solid black;
    }
  }
  & .imageThumb {
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0px;
    bottom: 0px;
    background-image: url("/imgeAdvantages.jpg");
    background-size: cover;
    display: none;
    ${mediaScreen(768)} {
      display: block;
    }
  }
  & .buttonDiv {
    left: 0px;
    bottom: 0px;
    transform: translateX(-100%);
    position: absolute;
    & button {
      border: none;
      padding: 32px 28px;
      background-color: #fff;
      opacity: 0.2;
      transition-duration: 500ms;
      transition-property: opacity;
      &:hover {
        opacity: 1;
      }
    }
  }
  & .numberAir {
    position: absolute;
    font-size: 80px;
    top: -60px;
    left: -5px;
    ${mediaScreen(1280)} {
      font-size: 130px;
      top: -100px;
      left: 0px;
    }
  }

  & .opt {
    /* z-index: 1; */
    position: absolute;
    /* font-size: 130px; */
    top: 150px;
    left: -10px;
    font-size: 110px;
    transform: rotateZ(-90deg);
    ${mediaScreen(1280)} {
      font-size: 110px;
      left: 225px;
      top: 185px;
    }
  }

  & .mobieData {
    ${mediaScreen(768)} {
      display: none;
    }
  }
`;
