import {useEffect,useState} from 'react';


// custom hook
const useList = ()=>{
    const [elList,setelList] = useState();
    
    useEffect(()=>{
        // fetch cors 프록시가 막혀있기 때문에 cors를 통해 데이터 호출
        // xml 호출시 option X, resopnse.text() 
        fetch('/heri/gungDetail/gogungListOpenApi.do')
        .then(response => response.text())
        .then(data => {
            // DOMParser(), parseFromString xml 해석
            const parser = new DOMParser();
            setelList(parser.parseFromString(data, "application/xml"))
        })
        .catch(console.error);
    },[])
    return elList;
}

export default useList;