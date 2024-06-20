import { useState } from "react";

function App() {

    const [ inputValue, setInputValue ] = useState("");
    const [ names, setNames ] = useState([]); // 배열을 상태로 만들어! > map을 돌리기 ㅎ위해서
    const liList = [
        <li>{"test1"}</li>,
        <li>{"test2"}</li>,
        <li>{"test3"}</li>,
        <li>{"test4"}</li>
    ];

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            setNames(names => [...names, inputValue ]); // 기존 names 가져오구 + inputValue 도 추가
            setInputValue(""); 
    }

    return <>
        <input onChange={handleInputChange} 
               onKeyDown={handleInputKeyDown}
               value={inputValue}/>
        <ul>
            { liList }
            {names.map((name, index) => <li key={index}>{name}</li>)} {/* names 배열들 하나씩 꺼내서 li로 + map 쓰면 key값은 필수*/}
        </ul>
    </>
    }
}

export default App;