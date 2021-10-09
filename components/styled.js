import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  height: 10%;
  display: flex;
  justify-content: center;
`;

export const StyledMain = styled.main`
  min-height: 80vh;
  height: 100%;
  background: pink;
  ${'' /* margin: 0; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledGameContainer = styled.div`
  min-height: 80vh;
  height: 100%;
  width: 100%;
  background: lightblue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
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


  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;

  .name {
    font-size: 3rem;
  }

  .bio {
    font-size: 1.5rem;
  }

  .credit {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const StyledScore = styled.div`
  background: white;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  ${'' /* border: 2px solid white; */}
  padding: 3rem;
  text-align: center;
  color: black;
  font-size: 1rem;
  height: 4rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid white;

  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  color: white;
  background-color: hsl(205, 46%, 37%);
`;

export const StyledFooter = styled.footer`
  background: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(205, 46%, 37%);
  ${'' /* height: %; */}
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  border: none;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  color: hsl(205, 46%, 37%);

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
  ${'' /* background: hsla(205, 46%, 37%, 0); */}
  background: hsla(205, 46%, 37%, 0.7);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;
