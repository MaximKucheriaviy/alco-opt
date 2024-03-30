import styled from "@emotion/styled";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const StyledAccodion = styled(Accordion)`
  background-color: transparent;
  border: none;
  box-shadow: none;
  padding: 0px;
  margin: 0px;
  margin-top: 15px;

  outline: 1px solid green;

  & .css-x4d5v9-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
    min-height: 0px;
  }
  &::before {
    display: none;
  }
  /* min-height: 0px; */
  & .css-o4b71y-MuiAccordionSummary-content {
    margin: 0px;
    align-items: center;
  }
  & .css-o4b71y-MuiAccordionSummary-content.Mui-expanded {
    margin: 0px;
  }
  & .css-1yixl0h-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
    min-height: 0px;
  }
`;
const StyledSummary = styled(AccordionSummary)`
  padding: 0px;
  margin: 0px;
  display: flex;
  & .numberBox {
    position: relative;
    color: #000;

    text-align: center;
    font-family: "Proxima Nova";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50px;
    border: 1px solid #000;

    background: #ff5748;

    box-shadow: 0px 3px 4px 0px rgba(136, 24, 14, 0.3);
    & .divider {
      width: 2px;
      height: 16px;
      background-color: black;
      position: absolute;
      top: -16px;
      left: 50%;
    }
  }

  & .text {
    color: #000;

    font-family: "Proxima Nova";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 24px;
  }
`;
const StyledDetails = styled(AccordionDetails)`
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: white;
  margin-top: 10px;
`;

export const MobileAccordeon = ({
  number,
  summaryText,
  children,
  line = false,
}) => {
  return (
    <StyledAccodion>
      <StyledSummary>
        <div className="numberBox">
          {number}
          {line && <div className="divider"></div>}
        </div>
        <p className="text">{summaryText}</p>
      </StyledSummary>
      <StyledDetails>{children}</StyledDetails>
    </StyledAccodion>
  );
};
