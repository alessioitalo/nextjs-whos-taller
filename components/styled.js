import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  background: aliceblue;
  height: 10%;
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
  min-height:  40rem;
  border: 2px solid black;
  ${'' /* border-radius: 20px; */}
  ${'' /* margin: 1rem; */}
  background-image: ${(props) => `url(${props.photo})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledScore = styled.div`
  background: white;
  border: 2px solid black;
  border-radius: 20px;
  width: 20%;
  color: black;
  font-size: 2rem;
  height: 4rem;
`;

export const StyledFooter = styled.footer`
  background: aliceblue;
  display: flex;
  flex-direction: column;
  ${'' /* height: %; */}
`;
