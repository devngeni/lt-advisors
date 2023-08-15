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
  font-size: clamp(
    1.5rem,
    calc(1.5rem + ((1vw - 0.1375rem) * 2.0238)),
    3.625rem
  );
  font-style: normal;
  font-weight: 600;
  line-height: clamp(1.4, 1.648, 2);
  letter-spacing: 0.075rem;
  text-transform: capitalize;
  font-family: "Fontspring-DEMO-rocgroteskextrawide-regular", sans-serif;
  width: 80vw;
  @media (max-width: 300px) {
    font-size: 1.2rem;
  }
  @media (min-width: 768px) {
    width: 60vw;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.div`
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
    font-size: clamp(0.5625rem, calc(0.5625rem + ((1vw - 0.1375rem) * 0.7738)), 1.375rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: row;
    gap: 0.38rem;
    align-items: center;
    @media (min-width: 768px) {
      gap: 1.81rem;
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
