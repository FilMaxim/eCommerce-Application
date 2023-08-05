import '../../styles/App.css';
import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg shadow-cyan-500">
      <NavBar clickHandler={setMobileMenuOpen} />
      <BurgerMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
