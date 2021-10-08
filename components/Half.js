import { StyledHalf } from "./styled";

const Half = ({character}) => {
    return (
        <StyledHalf photo={character.photo}>
            {character.name}
            {character.bio}
            {character.credit}
        </StyledHalf>
    );
}
 
export default Half;