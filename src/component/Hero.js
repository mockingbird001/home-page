import React from "react";
import styled from "styled-components";
import hero from "../img/hero.png";
import background from "../img/bg.png";
import Tilt from "react-tilt";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper styled={{ max: 25 }}>
            <img src={hero} alt="hero" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const TiltWrapper = styled(Tilt)`
  width: 60%;

  @media (max-width: 670px) {
    display: none;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  max-width: 1000px;
  height: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 100%;
  }
`;

const Left = styled.div`
  width: 40%;

  @media (max-width: 670px) {
    width: 100%;
  }
`;
