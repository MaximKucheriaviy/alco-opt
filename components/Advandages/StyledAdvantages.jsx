import styled from "@emotion/styled";

export const StyledAdvantages = styled.section`
  background-color: #ff4a3a;
  padding-top: 149px;
  height: 813px;
  position: relative;
  overflow: hidden;
  h2 {
    position: relative;
    z-index: 1000;
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
  & .controlBox {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: relative;
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
    font-size: 130px;
    top: -100px;
    left: 0px;
  }

  & .opt {
    /* z-index: 1; */
    position: absolute;
    /* font-size: 130px; */
    top: -20px;
    left: 149px;
    transform: rotateZ(-90deg);
  }
`;
