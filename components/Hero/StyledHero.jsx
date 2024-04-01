import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

export const StyledHero = styled.section`
  overflow: hidden;
  background-color: white;
  position: relative;
  padding-bottom: 34px;
  z-index: 900;
  padding-top: 99px;
  ${mediaScreen(1280)} {
    padding-top: 200px;
    padding-bottom: 71px;
  }
  .line {
    border-radius: 50px;
  }

  .videoDiv {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    & video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h1 {
    position: relative;
    z-index: 1000;
    color: var(--Button-color, #da2919);
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    font-size: 48px;
    ${mediaScreen(1280)} {
      font-size: 80px;
    }
  }
  .subtitle {
    margin-top: 20px;

    color: #fff;
    font-family: "Proxima Nova";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    ${mediaScreen(1280)} {
      font-size: 56px;
      margin-top: 24px;
    }
  }
  .discription {
    margin-top: 24px;

    color: #fff;

    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 250px;
    ${mediaScreen(1280)} {
      width: 552px;
      font-size: 24px;
      margin-top: 32px;
    }
  }

  & .slogan {
    color: #fff;

    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 12px;
    ${mediaScreen(1280)} {
      width: 552px;
      font-size: 26px;
      margin-top: 16px;
    }
  }
  & .slogan1 {
    margin-top: 0;
  }
  .buttons {
    height: 54px;
    display: flex;
    margin-top: 24px;
    align-items: center;
    ${mediaScreen(1280)} {
      height: 71px;
      margin-top: 48px;
    }
    & .line {
      width: 2px;
      height: 41px;
      background-color: #da2919;
      flex-shrink: 0;
      ${mediaScreen(1280)} {
        width: 3px;
      }
    }
    button {
      margin-left: 16px;
      margin-right: 16px;
      background-color: transparent;
      border: none;
      color: #fff;

      font-family: "Proxima Nova";
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-decoration: none;
      ${mediaScreen(1280)} {
        font-size: 24px;
        margin-left: 32px;
        margin-right: 32px;
      }
    }
  }
  & .buttonDiv {
    display: flex;
  }
  .gradientButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 246px;
    height: 51px;

    margin-top: 48px;

    color: #fff;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    border: none;
    z-index: 1000;

    gap: 32px;
    background-color: #da2919;
    ${mediaScreen(1280)} {
      width: 336px;
      height: 77px;
      font-size: 24px;
    }
  }

  .tlephone {
    margin-top: 42px;
    margin-left: auto;
    width: 85px;
    height: 85px;
    padding: 0;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    ${mediaScreen(1280)} {
      display: flex;
    }
  }
  & .alcoopt {
    position: absolute;
    top: -20px;
    left: -3px;
    ${mediaScreen(1280)} {
      top: -100px;
      left: 0;
    }
  }
  & .number {
    position: absolute;
    font-size: 130px;
    top: 240px;
    left: 447px;
  }
  & .fran {
    position: absolute;
    /* font-size: 130px; */
    bottom: -53px;
    left: 0px;
    ${mediaScreen(1280)} {
      bottom: -120px;
      left: 161px;
    }
  }
  & .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 100vw;
    height: 100vh;
    background: rgba(11, 11, 11, 0.78);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    & form {
      padding: 24px 16px;
      width: 841px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.44);

      box-shadow: 3px 6px 10px 0px rgba(32, 32, 32, 0.11);
      backdrop-filter: blur(20px);
      & .title {
        color: #000;

        text-align: center;
        font-family: "Proxima Nova";
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 43.2px */
      }
      & .inputContainer {
        width: 551px;
        margin-left: auto;
        margin-right: auto;
        &:not(:last-child) {
          margin-bottom: 8px;
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
          color: #5f5e5e;

          text-align: center;
          font-family: "Proxima Nova";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 24px */
        }
      }
      & .submitButton {
        margin-top: 25px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;
