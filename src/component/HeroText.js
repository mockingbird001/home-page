import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <h5>Online education for pepople of all ages</h5>
      <h1>Learn</h1>
      <h1>Anyting.</h1>
      <h1>Anytime.</h1>
      <h1>Anywhere.</h1>
      <ButtonContainer>
        <button className="readmore">Read More</button>
        <button>7 Day Trial</button>
      </ButtonContainer>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  padding: 1rem;

  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #ad60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #ad60ff;
    }
    &:nth-of-type(3) {
      color: #ad60ff;
    }
    &:nth-of-type(4) {
      color: #ad60ff;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;

  button {
    background-color: #81d1ff;
    border: none;
    padding: 1rem 1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 17px 16px -11px #ecb6d7;
      transform: translateY(-5px);
    }
  }

  .readmore {
    color: #81d1ff;
    background: transparent;
    border: 3 px solid #81d1ff;
  }
`;
