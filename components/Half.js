import { StyledHalf, StyledButton, StyledOverlay } from './styled';

const Half = ({ character, onClick }) => {
  return (
    <StyledHalf photo={character.photo}>
      <div className="name">{character.name}</div>
      <div className="bio">{character.bio}</div>
      <span className='credit'>Photo: {character.credit}</span>
      <StyledOverlay isForCard={true} />
      <StyledButton onClick={onClick}>Choose</StyledButton>

    </StyledHalf>
  );
};

export default Half;
