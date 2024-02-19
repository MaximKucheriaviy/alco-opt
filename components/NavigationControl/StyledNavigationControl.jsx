import styled from "@emotion/styled";

export const StyledNavigationContronl = styled.div`
  z-index: 1000;
  position: absolute;
  display: flex;
  align-items: center;
  right: 0px;
  top: ${({ top }) => top}px;
  gap: 24px;
  & .links {
    display: flex;
    flex-direction: column;
    gap: 22px;
    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      border-radius: 50%;
    }
    & .active {
      /* border: 1px solid #949494; */
      border: 1px solid ${({ black }) => (black ? "black" : "#949494")};

      & .point {
        background-color: #dd0000;
      }
    }
    & .point {
      width: 8px;
      height: 8px;
      background-color: ${({ black }) => (black ? "black" : "white")};
      border-radius: 50%;
    }
  }
  & .leftDiv {
    display: flex;
    flex-direction: column;
    gap: 37px;
  }
  & .lineDiv {
    display: flex;
    justify-content: center;
  }
  & .line {
    height: ${({ height }) => height}px;
    background-color: ${({ black }) => (black ? "black" : "white")};
    width: 1px;
    border-radius: 0px;
  }

  & button {
    background-color: transparent;
    border: none;
    padding: 0;
  }
  & .arrows {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
  & .moreText {
    transform: rotate(-90deg);
    width: 20px;
    height: 40px;
    text-align: center;
    color: ${({ black }) => (black ? "black" : "white")};

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .number {
    color: ${({ black }) => (black ? "black" : "white")};

    font-family: sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    & span {
      color: #dd2615;
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
