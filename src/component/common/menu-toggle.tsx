import React from 'react';
import { Link } from 'react-router-dom';
import gogungCategoty from '../../data/gogungCategory.json';

type MenuToggleProps = {
  menuState: boolean;
  closeMenu: React.MouseEventHandler<HTMLElement>;
};

function MenuToggle({ menuState, closeMenu }: MenuToggleProps) {
  const categories = gogungCategoty.gogung;
  return (
    <nav className={menuState ? 'menu active' : 'menu'}>
      <div className="menu-contents">
        <MenuCloseBtn closeMenu={closeMenu} />
        <p className="menu-title">MENU</p>
        <ul>
          {categories &&
            categories.map((category) => (
              <MenuLi
                closeMenu={closeMenu}
                url={category.key}
                name={category.gung_Name}
                key={category.gung_Name}
              />
            ))}
        </ul>
      </div>
    </nav>
  );
}

export default MenuToggle;

type MenuLiProps = {
  closeMenu: React.MouseEventHandler<HTMLElement>;
  url: string;
  name: string;
};

function MenuLi({ closeMenu, url, name }: MenuLiProps) {
  return (
    <li onClick={closeMenu} aria-hidden="true">
      <Link to={`/gung/${url}`}>{name}</Link>
    </li>
  );
}

type MenuCloseBtnProps = {
  closeMenu: React.MouseEventHandler<HTMLElement>;
};

function MenuCloseBtn({ closeMenu }: MenuCloseBtnProps) {
  return (
    <p className="menuclose" onClick={closeMenu} aria-hidden="true">
      <span />
      <span />
    </p>
  );
}
