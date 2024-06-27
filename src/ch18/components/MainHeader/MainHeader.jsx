/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import MainContainer from "../MainContainer/MainContainer";
import * as s from "./style";
import { FaBars } from "react-icons/fa";
import { MainSidebarShowAtom } from "../../atoms/mainSidebarShowAtom";

function MainHeader() {
    const [ mainSidebarShow, setMainSidebarShow ] = useRecoilState(MainSidebarShowAtom);

    const handleMainMenuToggleClick = () => {
        setMainSidebarShow(true);
    }

    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.headerBody}>
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

export default MainHeader;