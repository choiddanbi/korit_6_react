import { useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {

   /* const test = {
        a: "aaa",
        b: "bbb"
    }
    console.log(test.a); // aaa
    console.log(test["a"]); // aaa*/

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }
    const [ inputData, setInputData ] = useState({...emptyUser});
    const [ userList, setUserList ] = useState([]); // useState >> set으로 userList 값을 변경해서 새로운 배열로 리턴해라!

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

    // 수정은 모달창을 써야하는데 걍 swal 사용~
    const handleEditClick = (key, index) => {
        Swal.fire({
            // console.log(e); // td태그는 target 에 name, value 없음
            // console.log(key);
            // console.log(index);
            title: `${key} edit`,
            input: "text",
            inputValue: userList[index][key], // 객체[index][key값] >> 객체의 키값으로 value 꺼낸다??????? userList의 index 위치의 key위치의 값
            showCancelButton: true, 
            cancelButtonText: "취소",
            confirmButtonText: "확인"
        }).then(result =>  {
            if(result.isConfirmed) { // confirmed 가 true면 (확인을 누르면) 수정!!! user, i >> 변수인데 user는 'UserList의 value = user객체'이고 i는 'UserList의 index' >> userList배열의 인덱스에 위치하는 값 >> 배열.map((value, index)=> {}) >> value와 index로 함수 돌려서 새로운 배열ㅇㅔ 담기
                setUserList(userList => [...userList.map((user, i) => { // index => onclick 에서의 userList index 내가 선택한 우ㅣ치,, i는 userList.map 안에서 순서대로
                    if( i === index ){
                        return { // index 가 같은 애만 수정
                            ...user,
                            [key]: result.value
                        }
                    }
                    return user;
                }) ]);
             //console.log(result);
            }
        });    
    }


    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
    }).then(result => {
        //console.log(result); // 
        if(result.isConfirmed) {
            setUserList( userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value)) ])
        } 
    });
}

    /*
    UserList 는

    배열.map((value, index) => { return })  // 배열안의 값들을 모두 함수 돌려서 새로운 배열에 옮겨 
      -> ex) userList 에 value 는 user 객체
    
    배열.filter((value, index) => { return })  // 배열안의 값들 중 조건에 맞는 거만 새로운 배열에 옮겨
     * /


    /*const handleDeleteClick = (e) => {
        if(window.confirm("해당 사용자를 삭제하시겠습니까?")) {
            setUserList( userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value)) ]) 
        }
    }*/



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
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                userList.map(({ username, password, name }, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td onClick={() => handleEditClick("username", index)}>{username}</td> {/*handleEditClick 이 일어났을때 username괴 index를 가져올건데 함수를 호출해서!! () => 어저꾸 */ }
                            <td onClick={() => handleEditClick("password",index)}>{password}</td>
                            <td onClick={() => handleEditClick("name", index)}>{name}</td>
                            <td>
                                <button value={index}>edit</button> 
                            </td>
                            <td>
                                <button onClick={handleDeleteClick} value={index}>delete</button> {/*얘는 함수 정의*/}
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    </>

}

export default App;