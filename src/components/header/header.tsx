import { useState } from 'react';
import { NavBar } from './NavBar/NavBar';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="h-[5rem] border-b">
      <NavBar clickHandler={setMobileMenuOpen} />
      <BurgerMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};
