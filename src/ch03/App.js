import { useState } from "react";

function App() {
    const [ num, setNum ] = useState(0);
    let num2 = 0;
    
    const handleClick = (e) => {
        //console.log(e);
        const value = parseInt(e.target.value);
        //console.log(typeof value);
        setNum(num + value); //setNum( n => n + value ); 도 가능
        num2 += value; // useState 때문에 상태변화가 생기면 재렌더링 되는데 -> num2 는 useState 아니라서 계속 초기화됨?
        console.log(num2);
    }

    console.log(num);
    console.log(num2);

    // 예제1. let num2 = 0;만 한 경우 >> useState를 써야 재렌더링이 된느데 안쓰면......return은 한번만되니까 꼐속 화면에는 0!!! ( 함수의 재호출 )
           // useState 재렌더링 시점에는 상태 초기화는 일어나지 않는다.
    // 예제2. useState랑 let num2 같이 한 경우 >> num2는 0 
           // let num2는 초기화 해쥬니까
    return <> 
        <h1>번호 : {num}</h1>
        <h1>번호2 : {num2}</h1>
        <button onClick={handleClick} value={-10}>-10</button>
        <button onClick={handleClick} value={+10}>+10</button>        
        <button onClick={handleClick} value={-100}>-100</button>
        <button onClick={handleClick} value={+100}>+100</button>
    </>
}

export default App;