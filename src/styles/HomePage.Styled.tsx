import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  mix-blend-mode: luminosity;
  background-image: url("/MobileBg.svg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: #000000;
  @media (min-width: 768px) {
    background-image: url("/BgImg.svg");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: transparent;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  color: #97aad7;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 164.8%; /* 2.472rem */
  letter-spacing: 0.075rem;
  text-transform: capitalize;
  font-family: "FSP DEMO -Rc Grtsk xtrWd", sans-serif;
  @media (min-width: 768px) {
    font-size: 3.625rem;
    line-height: 164.8%;
    width: 60%;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Text = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 0.5625rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 0.1rem;
  @media (min-width: 768px) {
    font-size: 1rem;
    gap: 0.5rem;
  }
`;
export const TwitterText = styled.div`
  &:hover {
    svg {
      fill: #fff;
    }
  }
  a {
    color: #fff;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: row;
    gap: 0.1rem;
    align-items: center;
    @media (min-width: 768px) {
      font-size: 1rem;
      gap: 0.5rem;
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.2rem;
  @media (min-width: 768px) {
    gap: 1rem;
  }
`;
