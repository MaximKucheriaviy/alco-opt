import styled from "@emotion/styled";

export const StyledControlDots = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  gap: 40px;
  position: relative;
  z-index: 2;
  & button {
    padding: 0;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 48px;

    color: #000;
    font-family: "Proxima Nova";
    font-size: 32px;
    font-style: normal;
    font-weight: ${({ active }) => (active === 1 ? "700" : "400")};
    line-height: normal;

    & .number {
      transition-duration: 500ms;

      box-shadow: 0px 3px 4px 0px rgba(136, 24, 14, 0.3);

      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #000;

      text-align: center;
      font-family: Inter, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      background-color: #ff5748;
      ${({ active }) => active === 1 && "background-color: #000;"}
      ${({ active }) => active === 1 && "color: #fff;"};
    }
    display: flex;
  }
`;
