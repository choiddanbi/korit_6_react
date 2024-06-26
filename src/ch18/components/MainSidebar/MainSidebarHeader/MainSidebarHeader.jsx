/** @jsxImportSource @emotion/react */
import { FaBars, FaBook, FaHome } from "react-icons/fa";
import MainContainer from "../../MainContainer/MainContainer";
import * as s from "./style";

// 사이드바 ㅏ닫기
function MainSidebarHeader({setMainSidebarShow}) {
    const handleMainMenuToggleClick = () => {
        setMainSidebarShow(false);
    }

    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.header}>
                    <h1 css={s.title}>
                        <FaBook />
                        <span>수업자료</span>
                    </h1>
                    <button 
                        css={s.menuToggleButton} 
                        onClick={handleMainMenuToggleClick}
                    >
                        <FaBars />
                    </button>
                </div>


            </MainContainer>
        </div>
    );
}

export default MainSidebarHeader;