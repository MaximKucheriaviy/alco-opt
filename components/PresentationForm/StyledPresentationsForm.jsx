import { mediaScreen } from "@/service/mediaRules";
import styled from "@emotion/styled";

export const StyledPresentationForm = styled.section`
  height: 743px;
  background: #e8e8e9;
  position: relative;
  & .container {
    height: 100%;
    position: relative;
    padding-top: 196px;
    padding-bottom: 64px;
    ${mediaScreen(768)} {
      padding-top: 116px;
      padding-bottom: 116px;
    }
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
      ${mediaScreen(768)} {
        display: none;
      }
    }
    & .imageTablet {
      background-image: url("/bookTablet.png");
      width: 100%;
      height: 100%;

      top: 0px;
      left: 0px;
      background-repeat: no-repeat;
      position: absolute;
    }
    & form {
      position: static;
      right: 56px;
      top: 116px;

      height: 543px;
      padding: 24px 0px;
      background: rgba(255, 255, 255, 0.21);

      backdrop-filter: blur(10px);
      ${mediaScreen(768)} {
        position: static;
        margin-left: auto;
        margin-right: auto;
        width: 656px;
        height: 543px;
        padding: 24px 56px;
      }
      ${mediaScreen(1280)} {
        right: 91px;
        top: 100px;
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
        ${mediaScreen(768)} {
          font-size: 32px;
          width: 559px;
        }
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
          ${mediaScreen(768)} {
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
  & .responseDiv {
    width: 320px;
    background: rgba(255, 255, 255, 0.38);

    box-shadow: 3px 6px 10px 0px rgba(32, 32, 32, 0.11);
    backdrop-filter: blur(10px);
    padding: 40px 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    ${mediaScreen(768)} {
      width: 668px;
      border-radius: 20px;
      gap: 50px;
    }
    ${mediaScreen(1280)} {
      padding: 42px 121px;
      width: 841px;
      padding: 54px 100px;
    }
    & p {
      color: #000;

      text-align: center;
      font-family: "Proxima Nova";
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: 120%; /* 33.6px */
      position: relative;
      ${mediaScreen(768)} {
        color: #000;

        text-align: center;
        font-family: "Proxima Nova";
        font-size: 28px;
      }
      ${mediaScreen(1280)} {
        font-size: 36px;
      }
    }
    & .crossButton {
      position: absolute;
      display: block;
      width: 16px;
      height: 16px;
      background-color: transparent;
      padding: 0px;
      border: none;
      top: 9px;
      right: 9px;
      & img {
        width: 100%;
        height: 100%;
      }
      ${mediaScreen(768)} {
        width: 46px;
        height: 46px;
        top: 15px;
        right: 28px;
      }
      ${mediaScreen(1280)} {
        top: 25px;
        right: 43px;
        width: 36px;
        height: 36px;
      }
    }
  }
`;
