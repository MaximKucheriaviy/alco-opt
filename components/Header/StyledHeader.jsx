import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

export const StyledHeader = styled.header`
  .headerContainer {
    width: auto;
    padding-left: 16px;
    padding-right: 16px;
    ${mediaScreen(1280)} {
      width: 1140px;
      padding: 0;
    }
  }
  .blackDiv {
    height: 42px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
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

  .hiddenMobileLink {
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 36px;
    & a {
      color: #ffffff;
      text-decoration: none;
    }
    & button {
      background-color: transparent;
      border: none;
    }
  }
  .rightLinks {
    display: flex;
    gap: 18px;
    margin-left: auto;
  }
  & .absoluteDiv {
    position: absolute;
    left: 0;
    top: calc(100% + 10px);
    padding-left: 16px;
    padding-right: 16px;
    ${mediaScreen(1280)} {
      top: calc(100% + 24px);
      padding: 0px;
    }
    /* background-color: red; */
    width: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    & .logoThumb {
      flex-shrink: 0;
      width: 64px;
      height: 48px;

      ${mediaScreen(1280)} {
        width: auto;
        height: auto;
      }
    }
    & .mainNavigation {
      display: none;
      ${mediaScreen(1280)} {
        display: flex;
        margin-left: 288px;
        gap: 54px;
      }
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
    & .button {
      display: none;
      ${mediaScreen(1280)} {
        margin-left: auto;
        display: block;
      }
    }
    & .burgerButton {
      background-color: transparent;
      border: none;
      margin-left: auto;
      ${mediaScreen(1280)} {
        display: none;
      }
    }
  }
`;
