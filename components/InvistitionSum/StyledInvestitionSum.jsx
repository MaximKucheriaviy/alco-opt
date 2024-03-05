import styled from "@emotion/styled";

export const StyledInvastition = styled.section`
  background-color: #fff;
  padding-top: 152px;
  padding-bottom: 82px;
  display: grid;

  & .description {
    position: relative;
    z-index: 1000;
    color: var(--Text-color, #0b0b0b);
    font-family: "Proxima Nova";
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & h2 {
    position: relative;
    z-index: 1000;
    margin-top: 64px;
    color: #000;

    font-family: "Proxima Nova";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & .line {
    margin-top: 32px;
  }

  & .grid1 {
    margin-top: 56px;
    display: grid;
    column-gap: 40px;
    grid-template-columns: repeat(3, 282px);
    row-gap: 56px;
  }

  & .values {
    margin-top: 72px;
    color: var(--Text-color, #0b0b0b);

    font-family: "Proxima Nova";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & .numberAir {
    position: absolute;
    font-size: 130px;
    top: -100px;
    left: -30px;
    -webkit-text-stroke-color: #ffc0bc71;
  }
  & .opt {
    -webkit-text-stroke-color: #ffc0bc6e;

    position: absolute;
    /* font-size: 140px; */
    top: 50px;
    left: 200px;
  }
  & .logoText {
    color: #f04130;

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
    right: 0px;
    top: -90px;
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;
