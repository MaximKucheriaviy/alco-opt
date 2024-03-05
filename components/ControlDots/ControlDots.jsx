import { StyledControlDots } from "./StyledContronDots";
import Image from "next/image";

export const ControlDots = ({ number, keyword, active, onClick }) => {
  return (
    <StyledControlDots active={active ? 1 : 0}>
      <button onClick={onClick(number - 1)}>
        <div className="number">{number}</div>
        {keyword}
      </button>
    </StyledControlDots>
  );
};
