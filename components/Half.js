import { StyledHalf } from './styled';

const Half = ({ character, onClick }) => {
  return (
    <StyledHalf photo={character.photo}>
      {character.name}
      {character.bio}
      {character.credit}
      <h1 style={{color: 'white', fontSize: '3rem'}}>{character.height}</h1>
      <button  onClick={onClick}>THis!</button>
    </StyledHalf>
  );
};

export default Half;
