import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

export const StyledHeader = styled.header`
  .blackDiv {
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .leftLink {
    display: none;
    ${mediaScreen(1280)} {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    color: #fff;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
  .leftLinkMobile {
    ${mediaScreen(1280)} {
      display: none;
    }
    border: none;
    background-color: transparent;
  }

  .rightLinks {
    display: flex;
    gap: 18px;
  }
  & .absoluteDiv {
    position: absolute;
    left: 0;
    top: calc(100% + 24px);
    /* background-color: red; */
    width: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    & .mainNavigation {
      display: flex;
      margin-left: 288px;
      gap: 54px;

      a {
        color: #fff;

        font-family: "Proxima Nova";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
    & button {
      margin-left: auto;
    }
  }
`;
