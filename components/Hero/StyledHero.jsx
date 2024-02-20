import styled from "@emotion/styled";

export const StyledHero = styled.section`
  overflow: hidden;
  background-color: white;
  position: relative;
  padding-top: 236px;
  padding-bottom: 81px;
  z-index: 900;

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
    color: var(--Button-color, #da2919);
    font-family: "Proxima Nova";
    font-size: 96px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  .subtitle {
    margin-top: 24px;

    color: #fff;
    font-family: "Proxima Nova";
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .discription {
    margin-top: 32px;

    color: #fff;

    font-family: "Proxima Nova";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 664px;
  }

  & .slogan {
    color: #fff;

    font-family: "Proxima Nova";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 16px;
  }

  .buttons {
    height: 71px;
    display: flex;
    margin-top: 48px;
    align-items: center;
    & .line {
      width: 3px;
      height: 41px;
      background-color: #da2919;
    }
    a {
      margin-left: 32px;
      margin-right: 32px;

      color: #fff;

      font-family: "Proxima Nova";
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-decoration: none;
    }
  }
  .gradientButton {
    width: ${({ buttonPadding }) => parseInt(buttonPadding) + 461}px;
    height: 77px;
    position: relative;
    left: ${({ buttonPadding }) => parseFloat(buttonPadding) * -1 - 3}px;
    padding-left: ${({ buttonPadding }) => buttonPadding};
    margin-top: 48px;

    color: #fff;
    font-family: "Proxima Nova";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    border: none;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.24) 0%,
      rgba(255, 255, 255, 0.15) 65.01%,
      rgba(255, 255, 255, 0) 99.33%
    );

    backdrop-filter: blur(5px);
  }

  .tlephone {
    margin-top: 42px;
    margin-left: auto;
    width: 85px;
    height: 85px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  & .alcoopt {
    position: absolute;
    top: -70px;
    left: 0;
  }
  & .number {
    position: absolute;
    font-size: 130px;
    top: 336px;
    left: 577px;
  }
  & .fran {
    position: absolute;
    /* font-size: 130px; */
    bottom: -130px;
    left: 161px;
  }
`;
