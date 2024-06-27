import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParamsStudy(props) {
    const [ searchParams, setSearchParams ] = useSearchParams(); // searchParams는 객체 , 값은 주소창에서 넣어주고 ?a=10&b=20
    console.log(searchParams.get("a"));
    console.log(searchParams.get("b"));
    
    /*
    const values = searchParams.values();

    console.log(values.next());
    console.log(values.next());
*/

    //console.log(searchParams.values().next()); 
    //setSearchParams({...searchParams, c: 30});
    
    const handleClick = () => {
        const keys = searchParams.keys(); //key들 다 가지고오기

       /*console.log(keys.next().value);
        console.log(keys.next().value);*/

        let newParams = {

        }
        for(let i = 0; i < searchParams.size; i++) { // 기존 옮겨담기
            const key = keys.next.value; // key들 중 key 하나씩 가져오기
            const value = searchParams.get(key); // key에 맞는 value 가져오기
            newParams = {
                ...newParams,
                [key]: value
            }
        }
        setSearchParams({...newParams, c: 30}); // 기존 주소 + c:30를 추가한 주소로 변경
    }


    return (
        <div>
            <h1>SearchParams</h1>
            <button  onClick={handleClick}>c=30 추가</button>
        </div>
    );
}

export default SearchParamsStudy;