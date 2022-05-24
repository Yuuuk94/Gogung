import search_black_24dp from '../img/search_black_24dp.svg';
import menu_black_24dp from '../img/menu_black_24dp.svg';
import icon_gyeongbokgung from '../img/icon_gyeongbokgung.png';

import {Link} from 'react-router-dom';
import {useRef, useState} from "react";

function Header(){
    const elNav = useRef();
    const elBuger = useRef();
    const elBugerclose = useRef();
    const elGung = useRef([]);

    // burger menu
    function navigation(){
        elNav.current.classList.add('active');
        elBuger.current.classList.add('active');
        document.body.style.overflow = "hidden";
    }
    function navClose(){
        elNav.current.classList.remove('active');
        elBuger.current.classList.remove('active');
        document.body.style.overflow = "unset";
    }
    function menuClose(){
        elNav.current.classList.remove('active');
        elBuger.current.classList.remove('active');
        document.body.style.overflow = "unset";
    }
    return(
        <>
            <header>
                <div className='mwidth head'>
                    <div className='h-left'>
                        <Link to="/">
                            <img src={icon_gyeongbokgung} alt="'이미지: flaticon.com'. 이 커버는 Flaticon.com의 자료를 사용해 디자인되었습니다"/>
                            <h1>고궁</h1>
                        </Link>
                    </div>
                    <div className='h-right'>
                        <Link to="/search">
                            <img src={search_black_24dp} alt="검색"/>
                        </Link>
                        <p className='bugermenu' onClick={navigation}>
                            <img src={menu_black_24dp} alt="메뉴"/>
                        </p>
                    </div>
                </div>
                <nav className='menu' ref={elNav}>
                    <div className='menu-contents'>
                        <p className='menuclose' ref={elBugerclose} onClick={navClose}>
                            <span></span>
                            <span></span>
                        </p>
                        <p className='menu-title'>MENU</p>
                        <ul ref={elGung}>
                            <li onClick={menuClose}><Link to="/gung/0">경복궁</Link></li>
                            <li onClick={menuClose}><Link to="/gung/1">창덕궁</Link></li>
                            <li onClick={menuClose}><Link to="/gung/2">창경궁</Link></li>
                            <li onClick={menuClose}><Link to="/gung/3">덕수궁</Link></li>
                            <li onClick={menuClose}><Link to="/gung/4">종묘</Link></li>
                        </ul>
                        {/* <ul>
                            <li onClick={menuClose}><Link to="/like">좋아요</Link></li>
                            <li onClick={menuClose}><Link to="/login">로그인</Link></li>
                            <li onClick={menuClose}><Link to="/jogin">회원가입</Link></li>
                        </ul> */}
                    </div>
                </nav>
            </header> 
        </>
    );
}
export default Header;
