import styled from "@emotion/styled";
import { Oval } from "react-loader-spinner";

const LoaderStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3000;
  background-color: #000000dd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <LoaderStyled>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#ac2115"
        secondaryColor="#da2919"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeWidth={4}
      />
    </LoaderStyled>
  );
};
