import { StyledScore } from './styled';
import TallerContext from '../context/taller-context'
import { useContext } from "react";

const Score = () => {
  const ctx = useContext(TallerContext)  
  return <StyledScore>Your Score: {ctx.score}</StyledScore>;
};

export default Score;
