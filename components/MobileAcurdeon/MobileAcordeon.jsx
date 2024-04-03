import styled from "@emotion/styled";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Container } from "../Container/Container";
import Image from "next/image";

const StyledAccodion = styled(Accordion)`
  background-color: transparent;
  border: none;
  box-shadow: none;
  padding: 0px;
  margin: 0px;
  margin-top: 15px;

  /* outline: 1px solid green; */

  & .css-x4d5v9-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
    min-height: 0px;
  }
  &::before {
    display: none;
  }
  /* min-height: 0px; */
  & .MuiAccordionSummary-content {
    margin: 0px;
    align-items: center;
  }

  & .MuiAccordionSummary-root {
    min-height: 0px !important;
  }
  & .Mui-expanded {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
`;
const StyledSummary = styled(AccordionSummary)`
  padding: 0px;
  margin: 0px;
  display: flex;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  & .acordionContainer {
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    align-items: center;
  }
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

    background-color: #ff5748;

    box-shadow: 0px 3px 4px 0px rgba(136, 24, 14, 0.3);
    transition-duration: 300ms;
    transition-property: background-color color;
    & .divider {
      width: 2px;
      height: 16px;
      background-color: black;
      position: absolute;
      top: -16px;
      left: 50%;
    }
  }

  & .chevron {
    margin-left: 16px;
    transform: none;
    transition-property: transform;
    transition-duration: 300ms;
  }
  & .Mui-expanded {
    & .numberBox {
      background-color: black;
      color: white;
    }
    & .chevron {
      transform: rotateZ(-180deg);
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

  & .info {
    color: #000;

    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }

  & .info:not(:last-child) {
    margin-bottom: 8px;
  }

  & .triangle {
    position: absolute;
    left: 4px;
    top: -35px;
  }
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
        <div className="acordionContainer">
          <div className="numberBox">
            {number}
            {line && <div className="divider"></div>}
          </div>

          <p className="text">{summaryText}</p>
          <Image
            className="chevron"
            src={"/chevronDown.svg"}
            width={16}
            height={6}
            alt="chevron"
          />
        </div>
      </StyledSummary>
      <StyledDetails>
        <Container>
          <Image
            src={"/triangle.svg"}
            alt="tiangle"
            width={42}
            height={21}
            className="triangle"
          />
          {children}
        </Container>
      </StyledDetails>
    </StyledAccodion>
  );
};
