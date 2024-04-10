import { mediaScreen } from "@/service/mediaRules";
import styled from "@emotion/styled";
const StyledLines = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  ${mediaScreen(768)} {
    gap: 148px;
  }
  ${mediaScreen(1280)} {
    gap: 194px;
  }
  & .line {
    height: 100%;
    width: 1px;
    background-color: #fff;
    opacity: 0.1;
  }
  & .hidden {
    background-color: transparent;
    ${mediaScreen(768)} {
      background-color: #fff;
    }
    ${mediaScreen(1280)} {
      background-color: transparent;
    }
  }
`;

export const Lines = ({
  no1 = false,
  no2 = false,
  no3 = false,
  no4 = false,
  no5 = false,
  children,
}) => {
  return (
    <StyledLines className="lines">
      <div className={`line ${no1 && "hidden"}`}></div>
      <div className={`line ${no2 && "hidden"}`}></div>
      <div className={`line ${no3 && "hidden"} noTablet`}></div>
      <div className={`line ${no4 && "hidden"}`}></div>
      <div className={`line ${no5 && "hidden"}`}></div>
      {children}
    </StyledLines>
  );
};
