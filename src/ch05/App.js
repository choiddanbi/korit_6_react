import { useState } from "react";

function App() {
    // inputValue 인 상태
    const [ inputValue, setInputValue ] = useState("");
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
    }

    const handleResetClick = () => {
        setInputValue("");
    }

    return <>
        <h3>값: {inputValue} </h3>
        <button onClick={handleResetClick}>초기화</button>
        <input type="text" onChange={handleInputChange} value={inputValue}/> {/*value={inputValue} 꼭 무조건 이거야ㅐ!!*/ }
    </>
}

export default App;