import { StyledHalf } from './styled';

const Half = ({ character, onClick }) => {
  return (
    <StyledHalf photo={character.photo}>
      {character.name}
      {character.bio}
      {character.credit}
      <button  onClick={onClick}>THis!</button>
    </StyledHalf>
  );
};

export default Half;
