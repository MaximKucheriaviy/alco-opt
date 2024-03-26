import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

export const Container = styled.div`
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 320px;
  ${mediaScreen(1280)} {
    width: 1140px;
    /* width: 1200px; */
  }
`;
