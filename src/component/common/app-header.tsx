/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuToggle from './menu-toggle';
import search_black_24dp from '../../assets/images/search_black_24dp.svg';
import menu_black_24dp from '../../assets/images/menu_black_24dp.svg';
import icon_gyeongbokgung from '../../assets/images/icon_gyeongbokgung.png';

function Header() {
  const img = {
    icon: icon_gyeongbokgung,
    search: search_black_24dp,
    menu: menu_black_24dp,
  };

  // burger menu
  const [menu, setMenu] = useState<boolean>(false);

  function clickMenu() {
    setMenu(true);
  }
  function closeMenu() {
    setMenu(false);
  }

  return (
    <header>
      <div className="mwidth head">
        <div className="h-left">
          <Link to="/">
            <img src={img.icon} alt="이미지: flaticon.com" />
            <h1>고궁</h1>
          </Link>
        </div>
        <div className="h-right">
          <Link to="/search">
            <img src={img.search} alt="검색" />
          </Link>
          <p className="bugermenu" onClick={clickMenu} aria-hidden="true">
            <img src={img.menu} alt="메뉴" />
          </p>
        </div>
      </div>
      <MenuToggle menuState={menu} closeMenu={closeMenu} />
    </header>
  );
}
export default React.memo(Header);
