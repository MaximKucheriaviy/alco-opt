import styled from "@emotion/styled";

export const StyledInvastition = styled.section`
  background-color: #fff;
  padding-top: 177px;
  padding-bottom: 117px;
  display: grid;

  & .description {
    color: var(--Text-color, #0b0b0b);
    font-family: "Proxima Nova";
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & h2 {
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
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
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
`;
