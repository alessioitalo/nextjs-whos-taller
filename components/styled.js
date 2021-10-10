import styled from 'styled-components';
import { css } from 'styled-components';

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const differentText = css`
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
`;

export const StyledNavbar = styled.nav`
  height: 10%;
  ${flexCenter}

  a {
    text-decoration: none;
  }
  @media (max-width: 750px) {
    font-size: 0.8rem;
  }
`;

export const StyledMain = styled.main`
  height: 100vh;
  width: 100%;
  ${flexCenter}
  background-repeat: no-repeat;
  background-image: url('/bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;

  .content {
    width: 80%;
    padding-top: 10vh;
  }

  h1 {
    ${differentText};
    font-size: 4rem;
  }
`;
export const StyledGameContainer = styled.div`
  height: 100%;
  width: 100%;
  ${flexCenter}
  position: relative;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const StyledHalf = styled.div`
  width: 50%;
  min-height: 90vh;
  background-image: ${(props) => `url(${props.photo})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 20%;
  background-position-x: center;
  text-shadow: -1px -1px 0 hsl(205, 46%, 37%), 1px -1px 0 hsl(205, 46%, 37%),
    -1px 1px 0 hsl(205, 46%, 37%), 1px 1px 0 hsl(205, 46%, 37%);
  ${flexCenter}
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  ${differentText}

  .name {
    font-size: 3rem;
  }

  .bio {
    font-size: 1.5rem;
  }

  .credit {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  @media (max-width: 750px) {
    width: 100%;
    min-height: 50vh;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: right;
    padding-right: 0.5rem;
    .name {
      font-size: 1.6rem;
    }

    .bio,
    .credit {
      font-size: 0.8rem;
    }
  }
`;

export const StyledScore = styled.div`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  padding: 3rem;
  font-size: 1rem;
  height: 4rem;
  position: absolute;
  border: 2px solid white;
  background-color: ${(props) =>
    props.correct === 'correct'
      ? 'green'
      : props.correct === 'incorrect'
      ? 'red'
      : 'hsl(205, 46%, 37%)'};
  ${flexCenter};
  ${differentText};
  transition: background-color 0.2s linear;
  @media (max-width: 750px) {
    left: 1rem;
  }
`;

export const StyledFooter = styled.footer`
  background-color: hsl(205, 46%, 37%);
  padding: 2rem;
  a {
    text-decoration: none;
  }

  .credit {
    font-size: 0.8rem;
  }
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  border: none;
  padding: 1rem 4rem;
  cursor: pointer;
  color: hsl(205, 46%, 37%);
  font-size: 1.5rem;
  outline: 2px solid hsl(205, 46%, 37%);
  ${differentText};
  z-index: ${(props) => (props.isForCard ? 1 : null)};
  margin-bottom: ${(props) => (props.isForCard ? '3rem' : '0')};

  &:hover {
    background-color: hsl(205, 46%, 37%);
    color: white;
    outline: 2px solid white;
  }
  @media (max-width: 750px) {
    padding: 0.5rem 1rem;
  }
`;

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: hsla(205, 46%, 37%, 0.5);
  background: ${(props) =>
    props.isForCard ? 'hsla(205, 46%, 37%, 0.5)' : 'hsla(0,0%,0%, 0.5)'};
  opacity: ${(props) => (props.isForCard ? 0 : 1)};
  ${flexCenter}
  justify-content: flex-start;
  flex-direction: column;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 750px) {
    opacity: 1;
    background: ${(props) =>
      props.isForCard ? 'transparent' : 'hsla(0,0%,0%, 0.5)'};
  }
`;

export const StyledContactForm = styled.form`
  ${flexCenter};
  flex-direction: column;
`;

export const StyledGameOver = styled.div`
  width: 60%;
  height: 70%;
  position: absolute;
  border: 2px solid white;
  top: 15%;
  left: 20%;
  margin: auto;
  border-radius: 20px;
  ${flexCenter};
  flex-direction: column;
  background: hsl(205, 46%, 37%);
  color: white;
  @media (max-width: 750px) {
    width: 90%;
    height: 80%;
    top: 10%;
    left: 5%;
    margin: auto;
  }
`;
