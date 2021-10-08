import Half from "../components/Half";
import Score from "../components/Score";
import { StyledGameContainer, StyledMain } from "../components/styled";
import TallerContext from "../context/taller-context";
import { useContext } from "react";
const Play = () => {
    const ctx = useContext(TallerContext)

    return (
        <StyledMain>
        <div>Play...</div>
        <StyledGameContainer>
        <Half character={ctx.tallerOne}/>
        <Half character={ctx.tallerTwo}/>
        </StyledGameContainer>
        <Score />

        </StyledMain>
    );
}
 
export default Play;