import { useState } from "react";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");

    const handleLoadImgClick = () => {
        //input 태그 생성 type="file"
        const fileElement = document.createElement("input"); //input 객체 생성해서
        fileElement.setAttribute("type", "file"); // 속성추가
        // fileElement.setAttribute("multiple", true); // 파일 여러개 선택
        fileElement.click();

        // console.log({fileElement});
        console.log(fileElement.files);


        fileElement.onchange = (e) => {
            //console.log(e.target.files); // 현재 파일의 fileList 중 files가져옴??

            const file = e.target.files[0]; // fileList 들 중 하나의 files를 가져오고

            const fileReader = new FileReader(); 

            fileReader.onload = (e) => {
                //console.log(e.target.result);
                setImgSrc(e.target.result); // e.target.result > 이미지 url > set으로 상태변호ㅏㅣ 주기 떄문에 파일이 바뀔떄마다 동작
            }

            fileReader.readAsDataURL(file); 
        }
    }


    return ( 
        <>
            <button onClick={handleLoadImgClick}>이미지 불러오기</button>
            <input type="file" multiple={true} />
            <div>
                <img src={imgSrc} alt="" />
            </div>
        </>
     );
}

export default App;