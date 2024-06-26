/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import * as s from "./style";

function RouteStudySubPage1(props) {
    return (
        <MainContainer>
            <div>
                <ul>
                    <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                    <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                    <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
                </ul>
                <div>
                    <Routes>
                        <Route path="/name" element={<div><h1>최단비</h1></div>} />
                        <Route path="/age" element={<div><h1>29</h1></div>} />
                        <Route path="/address" element={<div><h1>평택시</h1></div>} />
                    </Routes>
                </div>
            </div>
        </MainContainer>
    );
}

export default RouteStudySubPage1;