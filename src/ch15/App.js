import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
    const [ imgSrc, setImgSrc ] = useState(""); 

    const handleImgClick = () => {
        Swal.fire({
            title:"프로필 이미지 변경",
            text: "프로필 이미지를 변경하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText:"아니오",
        }).then(result => {
            if(result.isConfirmed) {
                const fileElement = document.createElement("input"); // input생성
                fileElement.setAttribute("type", "file"); // type을 file로 
                fileElement.click();

                fileElement.onchange = (e) => { // input에 변화가 생기면
                    const file = e.target.files[0]; // input의 fileList 배열들 중 첫번째 files를 가져와서 file이라고 할거고
                    const fileReader = new FileReader(); // url을 읽기 위한 애
                    
                    fileReader.onload = (e) => {
                        setImgSrc(e.target.result); // input이 바뀔때마다 계속 동작하려고 만들어준 애
                    }
        
                    fileReader.readAsDataURL(file); 
            }
        }
        })
    }

    return ( 
        <div className="container">
            <div className="img-frame" onClick={handleImgClick}>
                <img src={imgSrc} alt="" />
            </div>
        </div>
     );
}

export default App;