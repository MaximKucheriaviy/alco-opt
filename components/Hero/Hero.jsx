import { StyledHero } from "./StyledHero";

export const Hero = () => {
  return (
    <StyledHero>
      <div className="videoDiv">
        <video loop autoPlay muted className="video" src="/v1.mp4"></video>
      </div>
    </StyledHero>
  );
};
