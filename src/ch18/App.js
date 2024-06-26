import React, { useState } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainHeader from './components/MainHeader/MainHeader';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import MainSidebar from './components/MainSidebar/MainSidebar';
import MainBody from './components/MainBody/MainBody';

function App() {
    const [ isMainSidebarShow, setMainSidebarShow ] = useState(false); // 사이드바 숨겼다 꺼냈다 버튼용, 사이드바 상태

    return (
        <>
            <Global styles={reset}/>
            <MainLayout>
                <MainHeader setMainSidebarShow={setMainSidebarShow} />
                <MainBody />
                <MainSidebar 
                    isMainSidebarShow={isMainSidebarShow}
                    setMainSidebarShow={setMainSidebarShow}
                />
            </MainLayout>
        </>
    );
}

export default App;