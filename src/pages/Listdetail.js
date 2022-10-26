import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dataM from '../data/gogungCategory.json';
import dataD from '../data/gogungListOpenApi.json';

function Listdetail() {
  const { http } = dataM;
  const num = useParams();
  const gungNum = Number(num.num);

  const [detail, setDetail] = useState();

  useEffect(() => {
    let text = '';

    function gung(n) {
      const gung = dataM.gogung[n].gung_Name;
      return gung;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const v of dataD.list) {
      if (gungNum === v.serial_number) {
        text = `<div class="d-context">
                            <h4 class="d-title">${v.contents_kor}</h4>
                            <div class="d-text">
                                <p>${v.serial_number}</p>
                                <p>${gung(v.gung_number - 1)}</p>
                                <p>${v.explanation_kor}</p>
                            </div>
                        </div>
                        <p class="d-img"><img src=${
                          http + v.imgUrl
                        } alt="출처:문화재청"/></p>`;
      }
      setDetail(text);
    }
  }, [num]);
  return (
    <div
      className="mwidth detail-contain"
      dangerouslySetInnerHTML={{ __html: detail }}
    />
  );
}

export default Listdetail;
