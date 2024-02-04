import styled from "@emotion/styled";

export const StyledAdvantages = styled.section`
  background-color: #ff4a3a;
  padding-top: 149px;
  height: 813px;
  position: relative;
  h2 {
    color: var(--Button-color, #0c0c0c);
    font-family: "Proxima Nova";
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    & span {
      color: var(--Button-color, #0c0c0c);

      font-family: "Proxima Nova";
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
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
  }
  & .buttonDiv {
    left: 0px;
    bottom: 0px;
    transform: translateX(-100%);
    position: absolute;
    & button {
      border: none;
      padding: 40px 26px;
      background-color: #fff;
    }
  }
`;
