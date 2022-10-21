import React from 'react';
import { Link } from 'react-router-dom';

type MenuToggleProps = {
  menuState: boolean;
  closeMenu: React.MouseEventHandler<HTMLElement>;
};
function MenuToggle({ menuState, closeMenu }: MenuToggleProps) {
  return (
    <nav className={menuState ? 'menu active' : 'menu'}>
      <div className="menu-contents">
        <p className="menuclose" onClick={closeMenu} aria-hidden="true">
          <span />
          <span />
        </p>
        <p className="menu-title">MENU</p>
        <ul>
          <li onClick={closeMenu} aria-hidden="true">
            <Link to="/gung/0">경복궁</Link>
          </li>
          <li onClick={closeMenu} aria-hidden="true">
            <Link to="/gung/1">창덕궁</Link>
          </li>
          <li onClick={closeMenu} aria-hidden="true">
            <Link to="/gung/2">창경궁</Link>
          </li>
          <li onClick={closeMenu} aria-hidden="true">
            <Link to="/gung/3">덕수궁</Link>
          </li>
          <li onClick={closeMenu} aria-hidden="true">
            <Link to="/gung/4">종묘</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MenuToggle;
