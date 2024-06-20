import { useRef, useState } from "react";
import "./App.css";

function App() {
    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }
    const [ inputData, setInputData ] = useState({...emptyUser});
    const [ userList, setUserList ] = useState([]);

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const handleInputKeyDown = (e) => {
        if (e.keyCode === 13) {
            const { username, password, name } = inputRef;
            switch(e.target.name) {
                case "username":
                    password.current.focus();
                    break;
                case "password":
                    name.current.focus();
                    break;
                case "name":
                    username.current.focus();
                    setUserList( userList => [ ...userList, inputData ]); // 기존 userList랑 inputData  
                    setInputData({...emptyUser});
                    break;
                default:
            }
        }
    }

    // 값 입력
    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        });
    }


    return <>
        {/*
        input 문제
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 배열에 user객체 추가, 그리고 input value 들 초기화 
        */}
        <input name="username" onKeyDown={handleInputKeyDown} 
            placeholder="사용자명" 
            ref={inputRef.username}
            onChange={handleInputChange} 
            value={inputData.username}/>
        <input name="password" onKeyDown={handleInputKeyDown} 
            placeholder="비밀번호" 
            ref={inputRef.password}
            onChange={handleInputChange} 
            value={inputData.password}/>
        <input name="name" onKeyDown={handleInputKeyDown}
            placeholder="이름" 
            ref={inputRef.name}
            onChange={handleInputChange} 
            value={inputData.name}/>

        {/*
            3. tbody 안의 tr묶음을 userList에서 map을 통해 렌더링
            4. table 디자인-> border: 1px solid #dbdbdb;      
        */}

        <table>
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