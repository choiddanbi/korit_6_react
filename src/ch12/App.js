import { useEffect, useState } from "react";

function App() {

    // use어쩌구들 = Hook 함수
    const [ number, setNumber ] = useState(0);
    const [ number2, setNumber2 ] = useState(0);
    const [ number3, setNumber3 ] = useState(0);



    // useEffect((실행 할 함수) => {}, 배열) 를 받음 >>  배열이 변하고나면 함수를 실행해라
    // 첫 호출때 무조건 한번 실행되고, 다음부터는 배열의 상태(number) 가 변해야만 실행!!
    // []배열은 여러개 가능
    useEffect(() => { // 마운트 지점
        console.log(number2);
        console.log("test");
        setNumber3(number * 10 );
        return () => { // 언마운트 지점

        }
    }, [number, number2]); // numberㄱㅏ 변하거나 number2가 변하면 동작한다

    /* 렌더링이 시작되면 한번은 무조건 실행되어야 하지만 그 이후에는 실행될 일 없는 애들 >>> 초기셋팅 시 주로 사용                 
    useEffect(() => {
        console.log("test");
        setNumber3(number * 10 );
    }, []);

*/
    const handleButtonClick = (e) => {
        setNumber(a => a + 1 );
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10 );
    }

    

    return (  
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>
    );
}

export default App;