import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import dataM from '../../data/gogungCategory.json';
import dataD from '../../data/gogungListOpenApi.json';

import favorite_border_white_24dp from '../img/favorite_border_white_24dp.svg';
import favorite_red_24dp from '../img/favorite_red_24dp.svg';

function List({ sort }) {
  const { http } = dataM;
  const elBlock = useRef([]);
  const elList = useRef([]);

  const navigate = useNavigate();
  const num = useParams();
  const gungNum = Number(num.num) + 1;

  const [elDivblock, setelDivblock] = useState();
  const [elDivlist, setelDivlist] = useState();
  const select = { sort };

  // 상세페이지 연동
  function moveDetail(e) {
    const dNum = e.target.dataset.s;
    if (e.target.dataset.s) e.target = navigate(`/listdetail/${dNum}`);
  }

  // 목록 정렬
  if (select.sort == 0) {
    dataD.list.sort(function (a, b) {
      if (a.contents_kor > b.contents_kor) {
        return 1;
      }
      if (a.contents_kor < b.contents_kor) {
        return -1;
      }
      return 0;
    });
  } else if (select.sort == 1) {
    dataD.list.sort(function (a, b) {
      if (a.contents_kor < b.contents_kor) {
        return 1;
      }
      if (a.contents_kor > b.contents_kor) {
        return -1;
      }
      return 0;
    });
  }

  // 하트 누르기
  function hart(e) {
    if (e.target.className == 'list-like1') {
      e.target.parentNode.children[0].classList.add('active');
      e.target.parentNode.children[1].classList.add('active');
    } else if (e.target.className == 'list-like2 active') {
      e.target.parentNode.children[0].classList.remove('active');
      e.target.parentNode.children[1].classList.remove('active');
    }
  }

  // 궁번호에 따른 데이터 리스트 필터
  useEffect(() => {
    let block = '';
    let list = '';

    for (const v of dataD.list) {
      if (v.gung_number == gungNum) {
        block += `<div data-s=${v.serial_number} class="block-contents-contain">
                            <p class="block-content-img">
                                <img data-s=${v.serial_number} src=${
          http + v.imgUrl
        } alt="출처:문화재청"/>
                                <span data-s=${v.serial_number}>${
          v.contents_kor
        }</span>
                            </p>
                            <span class="list-like">
                                <img class="list-like1" src=${favorite_border_white_24dp} alt="좋아요"/>
                                <img class="list-like2" src=${favorite_red_24dp} alt="좋아요"/>
                            </span>
                        </div>`;
        list += `<div data-s=${v.serial_number} class='list-contents-contain'>
                            <p><img data-s=${v.serial_number} src=${
          http + v.imgUrl
        } alt="출처:문화재청"/></p>
                            <span class="list-like">
                                <img class="list-like1" src=${favorite_border_white_24dp} alt="좋아요"/>
                                <img class="list-like2" src=${favorite_red_24dp} alt="좋아요"/>
                            </span>
                            <p data-s=${
                              v.serial_number
                            } class="list-content-text">
                                <span data-s=${v.serial_number}>${
          v.serial_number
        }</span>
                                <span data-s=${v.serial_number}>${
          v.contents_kor
        }</span>
                                <span data-s=${v.serial_number}>${
          v.explanation_kor
        }</span>
                            </p>
                        </div>`;
      }
    }
    setelDivblock(block);
    setelDivlist(list);
  }, [num, select]);

  return (
    <>
      <div
        ref={elBlock}
        onClick={(e) => {
          moveDetail(e);
          hart(e);
        }}
        className="block-contents-wrap active"
        dangerouslySetInnerHTML={{ __html: elDivblock }}
      />
      <div
        ref={elList}
        onClick={(e) => {
          moveDetail(e);
          hart(e);
        }}
        className="mwidth list-contents-wrap"
        dangerouslySetInnerHTML={{ __html: elDivlist }}
      />
    </>
  );
}
export default List;
