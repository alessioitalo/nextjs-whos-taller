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

// NAVBAR
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

// MAIN CONTAINER
export const StyledMain = styled.main`
  min-height: 100vh;
  height: 100%;
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

  @media (max-width: 750px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

// GAME CARDS CONTAINER
export const StyledGameContainer = styled.div`
  height: 100%;
  width: 100%;
  ${flexCenter}
  position: relative;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

// SINGLE CARD CONTAINER
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
    font-size: 0.5rem;
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
    line-height: 1.2rem;
    .name {
      font-size: 1.6rem;
    }

    .bio {
      font-size: 0.8rem;
    }

    .credit {
      font-size: 0.6rem;
    }
  }
`;

// SCORE
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

// FOOTER
export const StyledFooter = styled.footer`
  background-color: hsl(205, 46%, 37%);
  padding: 2rem;
  a {
    text-decoration: none;
  }

  .credit {
    font-size: 0.8rem;
  }

  @media (max-width: 750px) {
    font-size: 0.9rem;
    .credit {
      font-size: 0.6rem;
    }
  }
`;

// BUTTON
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

// OVERLAY
export const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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

// CONTACT FORM
export const StyledContactForm = styled.form`
  ${flexCenter};
  flex-direction: column;
  padding: 1rem 0;

  input,
  textarea {
    ${differentText};
    width: 80%;
    border-radius: 10px;
    padding: 0.5rem;
  }

  textarea {
    min-height: 8rem;
  }

  button {
    margin-top: 1rem;
  }

  .error {
    flex-direction: column;
    ${differentText}
    font-size: 0.8rem;
    width: 100%;
  }

  .error li {
    background: hsla(359, 100%, 50%, 0.6);
    padding: 0.4rem;
    border-radius: 10px;
    margin: 0.2rem;
  }

  @media (max-width: 750px) {
    input,
    textarea {
      width: 100%;
    }
    textarea {
      height: 16rem;
    }
  }
`;

// GAME OVER MESSAGE
export const StyledGameOver = styled.div`
  width: 60%;
  height: 100%;
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
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: auto;
    h1 {
      font-size: 2rem;
    }
  }
`;

// FORM CONFIRMATION
export const StyledFormConfirmation = styled.div`
  background: hsl(205, 46%, 37%);
  ${flexCenter};
  flex-direction: column;
  width: 60%;
  height: 50%;
  position: fixed;
  top: 10%;
  left: 20%;
  z-index: 1;
  border-radius: 20px;
  border: 2px solid white;
  @media (max-width: 750px) {
    width: 90%;
    top: 20%;
    left: 5%;
  }
`;

// SCOREBOARD
export const StyledScoreboard = styled.div`
  ${differentText};
  ${flexCenter};

  ul {
    flex-direction: column;
  }

  li {
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    width: 100%;
  }

  li:nth-of-type(1) {
    background:linear-gradient(to right, #B38728, #BF953F, #FCF6BA);
    border-radius: 10px;
  }
  li:nth-of-type(2) {
    background:linear-gradient(to right, #f5f7fa, #b8c6db, #f5f7fa);
    border-radius: 10px;
  }
  li:nth-of-type(3) {
    background:linear-gradient(to right, #c19e67, #BE7023, #c19e67);
    border-radius: 10px;
  }
`;
