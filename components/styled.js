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
`;

export const StyledMain = styled.main`
  height: 100vh;
  width: 100%;
  ${flexCenter}
  flex-direction: column;
  background-repeat: no-repeat;
  background-image: url('/bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;

  h1{
    ${differentText};
    font-size: 4rem;
  }

`;
export const StyledGameContainer = styled.div`
  height: 100%;
  width: 100%;
  ${flexCenter}
  position: relative;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const StyledHalf = styled.div`
  width: 50%;
  min-height: 40rem;
  background-image: ${(props) => `url(${props.photo})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 10%;
  text-shadow: -1px -1px 0 hsl(205, 46%, 37%), 1px -1px 0 hsl(205, 46%, 37%),
    -1px 1px 0 hsl(205, 46%, 37%), 1px 1px 0 hsl(205, 46%, 37%);
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  ${flexCenter}
  flex-direction: column;
  justify-content: flex-start;
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

  @media (max-width: 550px) {
    width: 100%;
    min-height: 50vh;
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
  background-color: hsl(205, 46%, 37%);
  ${flexCenter}
  ${differentText}
`;

export const StyledFooter = styled.footer`
  background: aliceblue;
  ${flexCenter}
  flex-direction: column;
  background-color: hsl(205, 46%, 37%);
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  border: none;
  padding: 1rem 4rem;
  cursor: pointer;
  color: hsl(205, 46%, 37%);
  font-size: 1.5rem;
  ${differentText};
  z-index: 1;

  &:hover {
    background-color: hsl(205, 46%, 37%);
    color: white;
    outline: 2px solid white;
  }
`;

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: hsla(205, 46%, 37%, 0.5);
  background: ${(props)=> props.isForCard ? 'hsla(205, 46%, 37%, 0.5)' : 'hsla(0,0%,0%, 0.5)'};
  opacity: ${(props) => props.isForCard ? 0 : 1};
  ${flexCenter}
  flex-direction: column;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 550px) {
    opacity: 1;
    background: ${(props) => props.isForCard ? 'transparent' : 'hsla(0,0%,0%, 0.5)'}
  }
`;

export const StyledContactForm = styled.form`
${flexCenter};
flex-direction: column;
`
export const StyledGameOver = styled.div`
width: 60%;
height: 50%;
position: absolute;
margin: auto;
border-radius: 20px;
${flexCenter};
flex-direction: column;
background: hsl(205, 46%, 37%);
color: white;
`