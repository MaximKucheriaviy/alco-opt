import styled from "@emotion/styled";

export const StyledHero = styled.section`
  height: 940px;
  background-color: white;
  position: relative;
  .videoDiv {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    & video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
