import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  padding-top: 62px;
  padding-bottom: 62px;
  & .container {
    display: flex;
  }
  & .notAll {
    color: #fff;

    font-family: "DIN Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 100% */
    text-transform: uppercase;
    width: 180px;
    margin-left: 24px;
    margin-right: 225px;
  }
  & .addresBlock {
    &:not(:last-child) {
      margin-right: 120px;
    }
    & .title {
      color: #fff;

      font-family: "DIN Pro";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-transform: uppercase;
      margin-bottom: 24px;
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
    & .socialLiks {
      display: flex;
      gap: 12px;
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
`;
