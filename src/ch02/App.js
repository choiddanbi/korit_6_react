import { useState } from "react";


//useState() >> [ 현재 값(?), 함수 ] 인 배열을 리턴!!, number=100, setNumber=함슈...
function App() {
    const [ number, setNumber ] = useState(100);
    const [ name, setName ] = useState(null);


    const [ test, testPrint ] =
        [ 100, function () {console.log("test함수 호출")}];

    testPrint();

    console.log(number); //100 200 300

    if(number === 100) {
        setTimeout(() => setNumber(200), 2000); // 비동기처리
        // setNumber(200); // setNumber 상태 변화 발생함! > 상태 변화 때 함수 재호출(재렌더링)
        // 재렌더링 시점에는 상태 초기화는 일어나지 않는다.
    }
    

    if(number === 200) {
        setNumber(300); // 비동기처리 number에 300울 넣으면 알려죠ㅠㅠ !! >> useState의 setter는 비동기이다!!!!!!!!!!!!!!!!!!!
        console.log(number); //200
    }


    // console.log(name); //null

    if(name === null) {
    setName("최단비");
    }
    console.log(name); // null 최단비


    return (
    <>
        <h1>number 상태 확인</h1>
        <h2>{number}</h2>
    </>
    )
}

export default App;