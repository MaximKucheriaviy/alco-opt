import styled from "@emotion/styled";

export const StyledPresentationForm = styled.section`
  height: 743px;
  background: #e8e8e9;
  & .container {
    height: 100%;
    position: relative;
    & .imageThumb {
      position: absolute;
      top: 0;
      left: -256px;
      height: 100%;
      overflow: hidden;
    }
    & form {
      position: absolute;
      right: 91px;
      top: 100px;
      width: 841px;
      height: 543px;
      padding: 24px 16px;
      background: rgba(255, 255, 255, 0.21);

      backdrop-filter: blur(10px);
      & h2 {
        width: 599px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        color: #0b0b0b;
        text-align: center;
        font-family: "Proxima Nova";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;

        margin-bottom: 25px;
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
          color: #000000;

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
