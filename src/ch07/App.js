import { useState } from "react";

function App() {

    const emptyUser = {
        username:"",
        password:"",
        email:""
    }

    const [ user, setUser ] = useState({...emptyUser});
    const [ inputData, setInputData ] = useState({...emptyUser});

    const handelInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.tartget.name]: e.target.value
            }
        });
    }

    const handleOkClick = () => {
        setUser(inputData);
    }

    return <>
        <input name="username" placeholder="사용자이름" onChange={handelInputChange} value={inputData.username} /> {/*vlaue 에는 useState 값이 들어가야한다 !! 필수필수*/}
        <input name="password" placeholder="비밀번호" onChange={handelInputChange} value={inputData.password}/>
        <input name="email" placeholder="이메일" onChange={handelInputChange} value={inputData.email}/>
        <button onClick={handleOkClick}>확인</button>
        <ul>
            <li>사용자이름: {user.username}</li>
            <li>비밀번호: {user.password}</li>
            <li>이메일: {user.email}</li>
        </ul>
    </>
}

export default App;