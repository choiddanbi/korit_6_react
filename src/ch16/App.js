import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");
    const [ user, setUser ] = useState({...emptyUser});
    const [ userList, setUserList ] = useState([]);

    const emptyUser = {
        name:"",
        email:"",
        imgSrc:""
    }

    // input 창에 입력하면 객체에 저장
    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
    })
    }


    const handleOkButton = (e) => {
        setUserList([
            ...userList, user
        ]);
    }

    useEffect(()=> {
        const lsuser = localStorage.getItem("user");
        setUser(!lsuser ? [] : JSON.parse(lsuser) );
    }, []);

    

    const handleImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.click();
        
        fileElement.onchange =(e) => {
            const file = e.target.files[0];

            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setImgSrc(e.target.result); 
            }

            fileReader.readAsDataURL(file); 
        }

    }   

    return (  
            <div className="container">
                <h1>프로필</h1>
                <div className="img-frame" onClick={handleImgClick}>
                    <img src={imgSrc} alt="" />
                </div>

                <div>이름</div>
                <input type="text" className="btn" onchange={handleInputChange} />

                <div>이메일</div>
                <input type="text" className="btn" onchange={handleInputChange} />

                <button className="btn" onKeyDown={handleOkButton} >저장</button>
            </div>
    );
}

export default App;



/**
 * box만들어서 
 * 가운데에 원도 만들고 - 사진
 * inputbox 2개 - 이름, 이메일
 * 저장 버튼한개 - 저장소에 저장하기
 */