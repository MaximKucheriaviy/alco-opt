import { mediaScreen } from "@/service/mediaRules";
import styled from "@emotion/styled";

export const StyledPresentationForm = styled.section`
  height: 743px;
  background: #e8e8e9;

  & .container {
    height: 100%;
    position: relative;
    padding-top: 196px;
    padding-bottom: 64px;
    ${mediaScreen(1280)} {
      padding-top: 0;
      padding-bottom: 0;
    }
    & .imageThumb {
      position: absolute;
      top: 0;
      left: -256px;
      height: 100%;
      overflow: hidden;
      display: none;
      ${mediaScreen(1280)} {
        display: block;
      }
    }
    & .imageThumbMobile {
      background-image: url("/bookMobile.png");
      width: 320px;
      height: 100%;
      top: 0px;
      left: -16px;
      background-repeat: no-repeat;
      position: absolute;
    }
    & form {
      position: static;
      right: 91px;
      top: 100px;

      height: 543px;
      padding: 24px 0px;
      background: rgba(255, 255, 255, 0.21);

      backdrop-filter: blur(10px);
      ${mediaScreen(1280)} {
        position: absolute;
        width: 841px;
        height: 543px;
        padding: 24px 16px;
      }
      & h2 {
        width: 263px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        color: #0b0b0b;
        text-align: center;
        font-family: "Proxima Nova";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;

        margin-bottom: 25px;

        ${mediaScreen(1280)} {
          width: 599px;
          font-size: 32px;
        }
      }
      & .inputContainer {
        margin-left: auto;
        margin-right: auto;
        &:not(:last-child) {
          margin-bottom: 8px;
        }
        ${mediaScreen(1280)} {
          width: 551px;
        }
        & input {
          width: 100%;
          height: 51px;
          padding: 12px;
          margin-top: 8px;
          border: none;
          &:focus {
            outline: none;
          }
        }
        & label {
          color: #000000;

          text-align: center;
          font-family: "Proxima Nova";
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 24px */
          ${mediaScreen(1280)} {
            font-size: 16px;
          }
        }
      }
      & .submitButton {
        margin-top: 25px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        ${mediaScreen(1280)} {
          width: initial;
        }
      }
    }
  }
`;
