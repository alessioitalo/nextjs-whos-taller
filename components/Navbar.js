import Link from 'next/link';
import {StyledNavbar} from './styled'

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
        <li>
        <Link href='/leaderboard'>Top Scores</Link>
        </li>
      </ul>
      </StyledNavbar>
  );
};

export default Navbar;
