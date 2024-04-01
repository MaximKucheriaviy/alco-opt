import { mediaScreen } from "@/service/mediaRules";
import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  padding-top: 62px;
  padding-bottom: 32px;
  ${mediaScreen(1280)} {
    padding-bottom: 62px;
  }
  & .container {
    display: flex;
    flex-direction: column;
    ${mediaScreen(1280)} {
      flex-direction: row;
    }
  }
  & .logo {
    margin-bottom: 48px;

    ${mediaScreen(1280)} {
      margin-bottom: 0;
    }

    & .image {
      width: 62px;
      height: 46px;
      ${mediaScreen(1280)} {
        width: initial;
        height: initial;
      }
    }
    display: flex;
    align-items: center;
  }
  & .notAll {
    color: #fff;

    font-family: "DIN Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 100% */
    text-transform: uppercase;
    width: 180px;
    margin-left: 24px;
    margin-right: 142px;

    ${mediaScreen(1280)} {
      font-size: 32px;
    }
  }
  & .addresBlock {
    &:not(:last-child) {
      margin-right: 108px;
      margin-bottom: 32px;
    }

    ${mediaScreen(1280)} {
      &:not(:last-child) {
        margin-right: 108px;
        margin-bottom: 0;
      }
    }
    & .title {
      color: #fff;

      font-family: "DIN Pro";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-transform: uppercase;
      margin-bottom: 12px;
      ${mediaScreen(1280)} {
        margin-bottom: 24px;
      }
    }
    & .item {
      display: block;
      color: #fff;

      font-family: "Proxima Nova";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
    }
    & .addres {
      width: 174px;
    }
    & .socialLiks {
      display: flex;
      gap: 12px;
      width: 150px;
      & a {
        transform: scale(1);
        transition-duration: 100ms;
        transition-property: transform;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  & .copyright {
    color: #ffffff;

    text-align: center;
    font-family: "Proxima Nova";
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px; /* 200% */
    padding-top: 32px;

    border-top: 1px solid #f71b07;
    ${mediaScreen(1280)} {
      display: none;
    }
  }
`;
