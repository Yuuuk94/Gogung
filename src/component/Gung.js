import dataM from '../data/gogungCategory.json';
import dataD from '../data/gogungListOpenApi.json';
import List from './List';
import grid_view_black_24dp from '../img/grid_view_black_24dp.svg';
import view_list_black_24dp from '../img/view_list_black_24dp.svg';

import { useParams } from 'react-router-dom';
import {useRef, useEffect, useState} from "react";

function Gung(){
    const elList = useRef([]);
    const elShow = useRef([]);

    let {num} = useParams();
    let [select, setSelect] = useState(0);

    function show(e){
        if(e.target.dataset.num==0){
            elList.current.children[0].classList.add('active');
            elList.current.children[1].classList.remove('active');
        }else{
            elList.current.children[0].classList.remove('active');
            elList.current.children[1].classList.add('active');
        }
    }

    function change(e){
        setSelect(Number(e.target.value));
    }
    return(
        <>
            <div className='mwidth gung-title'>
                <h2>{dataM.gogung[num].gung_Name}</h2>
                <p className="list-view" ref={elShow} >
                    <p onClick={show}><img data-num="0" src={grid_view_black_24dp} alt="갤러리 보기"/></p>
                    <p onClick={show}><img data-num="1" src={view_list_black_24dp} alt="리스트 보기"/></p>
                    <select className="list-sort" onChange={change}>
                        <option value={0}>오름차순</option>
                        <option value={1}>내림차순</option>
                        <option value={2}>인기순</option>
                    </select>
                </p>
            </div>
            <div className="list" ref={elList}>
                <List sort={select}/>
            </div>

        </>
    );
}
export default Gung;