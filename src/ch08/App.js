import { useRef } from "react";

function App() {
    // use어쩌구는 무조건 함수 밖으로~
    // ref : querySelector 대신 쓰는 애

    // ref를 객체로 묶기
    /*const inputRef = {
        a: useRef(),
        b: useRef(),
        c: useRef()
    }*/


    // ref 만들기
    const aRef = useRef();
    const bRef = useRef();
    const cRef = useRef();
    
    console.log(aRef);
    console.log(bRef);
    console.log(cRef);


    const handleKeyDown = (e) => {
        // const inputs = document.querySelectorAll("input"); >> document.querySelectorAll 쓰면 VatualDom 을 안거치고 realDOM 에 바로 가는거라 리액트에서는 이거 쓰면 안됑

        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "a":
                    bRef.current.focus();
                    break;
                case "b":
                    cRef.current.focus();
                    break;
                case "c":
                    aRef.current.focus();
                    break;
                default:


                /* 객체로 표현법
                switch(e.target.name) {
                    case "a":
                        inputRef.b.current.focus();
                        break;
                    case "b":
                        inputRef.c.current.focus();
                        break;
                    case "c":
                        inputRef.a.current.focus();
                        break;
                    default:*/
            }
        }
    }

    return <>
        <input name="a" onKeyDown={handleKeyDown} ref={aRef}/> 
        <input name="b" onKeyDown={handleKeyDown} ref={bRef}/>
        <input name="c" onKeyDown={handleKeyDown} ref={cRef}/>

        {/*<input name="a" onKeyDown={handleKeyDown} ref={inputRef.a}/>
        <input name="b" onKeyDown={handleKeyDown} ref={inputRef.b}/>
        <input name="c" onKeyDown={handleKeyDown} ref={inputRef.c}/>*/}

    </>
}

export default App;