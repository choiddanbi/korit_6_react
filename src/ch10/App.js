import { useRef, useState } from "react";
import "./App.css";

function App() {
    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const emptyUser = {
        username:"",
        password:"",
        name:""
    }
    
    const [ inputValue, setInputValue ] = useState({...emptyUser});
    const [ userList, setUserList ] = useState([]);

    // 입력 값 추가!
    const handleInputChange = (e) => {
        setInputValue(inputValue => {
            return {
                ...inputValue,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleInputKeyDown = (e) => {
        if (e.keyCode === 13) {
            switch(e.target.name) {
                case "username": 
                    inputRef.password.current.focus();
                    break;
                case "password":
                    inputRef.name.current.focus();
                    break;
                case "name":
                    inputRef.username.current.focus();
                    setUserList ( userList => [ ...userList, inputValue ]);
                    setInputValue("");
                    break;
                default:    
            }
        }
    }




    return <>
        {/*
        input 문제
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 배열에 user객체 추가, 그리고 input value 들 초기화 
        */}
        <input name="username" onChange={handleInputChange} onKeyDown={handleInputKeyDown} value={inputValue.username} placeholder="사용자명" ref={inputRef.username} />
        <input name="password" onChange={handleInputChange} onKeyDown={handleInputKeyDown} value={inputValue.password} placeholder="비밀번호" ref={inputRef.password}/>
        <input name="name" onChange={handleInputChange} onKeyDown={handleInputKeyDown} value={inputValue.name} placeholder="이름" ref={inputRef.name}/>

        {/*
            3. tbody 안의 tr묶음을 userList에서 map을 통해 렌더링
            4. table 디자인-> border: 1px solid #dbdbdb;      
        */}

        <table className={"ts"}>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {
                userList.map(({ username, password, name }, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{username}</td>
                            <td>{password}</td>
                            <td>{name}</td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    </>

}

export default App;