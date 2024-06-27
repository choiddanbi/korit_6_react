/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";

function RouteStudySubPage1(props) {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname); // 현재 주소 전체를 가져옴
    console.log(location.pathname.lastIndexOf("/")); // 뒤에서부터 처음 / 위치 찾음 (17)
    const index = location.pathname.lastIndexOf("/"); 
    console.log(location.pathname.substring(index)); // 걔 말고는 다 잘라서 문자열로...? ( /age )

    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace: true});
        /* 둘다 페이지 이동떄 쓰는건데 차이점은
            replace true면 뒤로가기 못해 !
          window.location.href = "주소" => replace: false
          window.location.replace("주소") => replace: true
        */
    } 


    return (
        <div>
            <ul>
                <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
            </ul>
            <button onClick={handleAgeClick}>나이</button>
            <div>
                    <Routes>
                    <Route path="/name" element={<div><h1>최단비</h1></div>} />
                    <Route path="/age" element={<div><h1>29</h1></div>} />
                    <Route path="/address" element={<div><h1>평택시</h1></div>} />
                </Routes>
            </div>
        </div>
    );
}

export default RouteStudySubPage1;