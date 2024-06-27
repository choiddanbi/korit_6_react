import React, { useCallback, useMemo, useState } from 'react';

function MemoizationPage(props) {
    const [ value, setValue ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ num, setNum ] = useState(0);

    const a = useMemo(() => { // 값 저장
        console.log(num);
        return num + 10;
    }, [num]); // num 이 바꼈울때만 실행해라ㅏ ,[] 처음에 한번만 실행! 
    

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    },[]); // 최초 한번만
    
    const handleChange2 = (e) => {
        setValue2(e.target.value);
    } // 렌더링 될 때마다 계쏙 함수 재정의

    const handleClick= useCallback(() => {
        setNum(parseInt(value));
    },[value]); 

    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange} />
            <input type="text" onChange={handleChange2}/>
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default MemoizationPage;