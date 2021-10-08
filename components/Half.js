import { StyledHalf } from "./styled";

const Half = ({character}) => {
    return (
        <StyledHalf photo={character.photo}>
            {character.name}
            {character.bio}
        </StyledHalf>
    );
}
 
export default Half;