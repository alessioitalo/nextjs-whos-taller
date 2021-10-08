import React from 'react';
import { StyledMain } from './styled';
import Link from 'next/link';

const Main = () => {
  return (
    <StyledMain>
      <h1>Who's taller?</h1>
      <h5>
        the guessing game for celebrities, fictional and historical characters'
        heights
      </h5>
      <Link href='/play'>Play now!</Link>
    </StyledMain>
  );
};

export default Main;
