import { useState } from "react";

function App() {
    // 객체 안쓰고 값으로 받아오는 방법
    const [ grade, setGrade ] = useState("");
    const [ group, setGroup ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ name, setName ] = useState("");


    const emptyStudent = {
        grade:"",
        group:"",
        number:"",
        name:""
    }

    // student 객체로 받아오는 방법
    const [ student, setStudent ] = useState({...emptyStudent}); // emptyStudent 로 쓰면 주소를 가져오는거라 {...emptyStudent} 로 값만 가져오기 ( 스프레드 )
    

    // 방법 1 swith문
    const handleInputChange = (e) => {
        switch(e.target.name) {
            case "grade":
                setGrade(e.target.value);
                break;
            case "group":
                setGroup(e.target.value);
                break;
            case "number":
                setNumber(e.target.value);
                break;    
            case "name":
                setName(e.target.value);
                break;
            default:  

        }
    }

    const handleInputChange2 = (e) => {
        /*const name = e.target.name;
        const value = e.target.value;*/
        const { name, value } = e.target; // e.target이라는 객체에서 name 과 value 키 값을 비구조할당으로 가져와라라라랄
        const newStudent = {
            ...student,
            [name]: value
        }
        setStudent(newStudent);


        /* 이렇게 간단하게 작성두 가능
        setStudent(student => { // 키보드로 입력된 값 추가
            return {
                ...student,
                [e.target.name]: e.target.value
            }
        });*/
        }




    /* 방법2 난 안되던데..ㅠㅠ
    const handleInputChange5 = (e) => {
        if (e.target.name === "grade") {
            setGrade(e.target.value);
        }
        
        if (e.target.name === "group") {
            setGroup(e.target.value);
        }

        if (e.target.name === "number") {
            setNumber(e.target.value);
        }

        if (e.target.name === "name") {
            setName(e.target.value);
        }
    }
        
    방법3 handle 각각 다 만들어서 */

    return <>
        {/* */}
        <input name="grade" onChange={handleInputChange} value={grade} placeholder="학년" /> 
        <input name="group" onChange={handleInputChange} value={group} placeholder="반" />
        <input name="number" onChange={handleInputChange} value={number} placeholder="번호" />
        <input name="name" onChange={handleInputChange2} value={name} placeholder="이름" />

        <ul>
            <li>학년: {grade}</li>
            <li>반: {group}</li>
            <li>번호: {number}</li>
            <li>이름: {name}</li>
        </ul>


         {/* */}
        <input name="grade" onChange={handleInputChange2} value={student.grade} placeholder="학년" /> 
        <input name="group" onChange={handleInputChange2} value={student.group} placeholder="반" />
        <input name="number" onChange={handleInputChange2} value={student.number} placeholder="번호" />
        <input name="name" onChange={handleInputChange2} value={student.name} placeholder="이름" />

        <ul>
            <li>학년: {student.grade}</li>
            <li>반: {student.group}</li>
            <li>번호: {student.number}</li>
            <li>이름: {student.name}</li>
        </ul>
    </>

}

export default App;
