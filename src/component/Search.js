import dataM from '../data/gogungCategory.json';
import dataD from '../data/gogungListOpenApi.json';
import search_white_24dp from '../img/search_white_24dp.svg';

import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function Search(){
    const http = dataM.http;
    let [search, setSearch] = useState([]);
    let navigate = useNavigate();
    let num = 0;
    let text = '';

    // 랜덤 이미지+문구
    num = Math.floor(Math.random()*dataD.list.length);
    text = `오늘은 "${dataD.list[num].contents_kor}"에 가볼까?`;
    
    // 검색 기능
    function letmesearch(e){
        let value = e.target.value.toLowerCase();
        //let value = 'hong'
        // console.log(value);

        if(value){
            search = dataD.list.filter((data) => {
            return data.contents_kor.search(value) != -1;
            });
        }else{
            setSearch([]);
        }
        // console.log(search)
        if(search.length) setSearch(search);
    }

        // 상세페이지 연동
        function moveDetail(e){
            let dNum = e.target.dataset.s;
            if(e.target.dataset.s)
            e.target = navigate(`/listdetail/${dNum}`);
        }

        function gungNum(n){
            let gung = dataM.gogung[n].gung_Name;
            return gung;
        }

    return(
        <>
            <div className='search'>
                <p>
                    <span></span>
                    <img src={http+dataD.list[num].imgUrl} alt=""/>
                </p>
                <div className='mwidth search-bar'>
                    <span><img src={search_white_24dp} alt=""/></span>
                    <input type="text" placeholder={text} 
                        onChange={(e)=>letmesearch(e)} 
                    />
                </div>
            </div>
            <div className='mwidth result'>
                {search?.map((v,k)=>{
                    return(
                        <div key={k} data-s={v.serial_number} className='result-content' onClick={moveDetail}>
                            <p key={k} data-s={v.serial_number}>{v.serial_number}</p>
                            <p key={k} data-s={v.serial_number}>{v.contents_kor}</p>
                            <p key={k} data-s={v.serial_number}>({gungNum(v.gung_number -1)})</p>
                        </div>
                    );
                    })}

            </div>
        </>
    );
}
export default Search;