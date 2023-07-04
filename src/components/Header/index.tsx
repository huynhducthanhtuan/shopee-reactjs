import React from 'react';
import HeaderCommonInfo from './HeaderCommonInfo';
import HeaderSearchPart from './HeaderSearchPart';

function Header() {
  return (
    <header id="header">
      <HeaderCommonInfo />
      <HeaderSearchPart />
    </header>
  );
}

export default Header;
