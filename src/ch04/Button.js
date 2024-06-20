function Button( { text, setNumber }) {  // setNumber(함수) 를 쓰면 number을 매개변수로 받아올 필요 없따! >> set이 자기자신을 가져오는 애니까 ???????????? (최적화)

    const handleClick = () => {
        if(text === "증가") {
            setNumber(number => number + 1);
        }
        if(text === "감소") {
            setNumber(number => number - 1);
        }
    }

    return <button onClick={ handleClick }>{ text }</button>

}

export default Button;


/*
function Button( { text, number, setNumber }) {

    const handleClick = () => {
        if(text === "증가") {
            setNumber(number + 1);
        }
        if(text === "감소") {
            setNumber(number - 1);
        }
    }

    return <button onClick={ handleClick }>{ text }</button>
    

}

export default Button;

 */