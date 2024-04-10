import { mediaScreen } from "@/service/mediaRules";
import styled from "@emotion/styled";
import Image from "next/image";

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  & p {
    color: var(--Text-color, #0b0b0b);
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 218px;
    ${mediaScreen(768)} {
      width: 260px;
    }
    ${mediaScreen(1280)} {
      width: 218px;
    }
  }
`;

export const ItemPrice = ({ className, path, children }) => {
  return (
    <StyledItem className={className}>
      <Image src={path} width={40} height={40} alt="logo" />
      <p>{children}</p>
    </StyledItem>
  );
};
