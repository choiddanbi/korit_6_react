/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudyPage from "../../pages/RouteStudyPage/RouteStudyPage";

function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/routestudy/*" element={<RouteStudyPage />} />
            </Routes>
        </div>
    );
}

export default MainBody;