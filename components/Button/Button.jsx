import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

const checkColor = (type) => {
  switch (type) {
    case "default":
      return "#DA2919";
    case "active":
      return "#C12618";
    case "disabled":
      return "#828282";
    case "hover":
      return "#F04031";
  }
};

const StyledButton = styled.button`
  background-color: ${({ type }) => checkColor(type)};
  &:hover {
    background-color: ${({ type }) =>
      type === "disabled" ? checkColor("disabled") : checkColor("hover")};
  }
  border: none;

  color: #fff;

  font-family: "Proxima Nova";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding: 24px 16px;

  ${mediaScreen(1280)} {
    padding: 16px 46px;
  }
`;

export const Button = ({
  type = "default",
  children,
  className,
  onClick = () => {},
}) => {
  return (
    <StyledButton onClick={onClick} className={className} type={type}>
      {children}
    </StyledButton>
  );
};
