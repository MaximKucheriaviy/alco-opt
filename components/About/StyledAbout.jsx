import styled from "@emotion/styled";

export const StyledAbout = styled.section`
  padding-top: 175px;
  padding-bottom: 64px;
  position: relative;
  h2 {
    color: var(--Button-color, #da2919);
    font-family: "Proxima Nova";
    font-size: 64px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    & .defis {
      font-size: 48px;
    }
  }
  .subtitle {
    color: var(--Button-color, #fff);
    font-family: "Proxima Nova";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
  .line {
    margin-top: 20px;
  }
  .text {
    margin-top: 24px;
    width: 580px;
    color: #fff;

    font-family: "Proxima Nova";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
  }

  .imageTumb {
    height: ${() => (601 * 100) / 718}%;
    /* overflow: hidden; */
    width: 50%;
    position: absolute;
    bottom: 0px;
    right: 0px;

    background-image: url("/imageAbout.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    & .image {
      width: 100%;
      height: auto;
    }
    & .logo {
      position: absolute;
      top: 0;
      left: -25px;
      top: -20px;
    }
  }
`;
