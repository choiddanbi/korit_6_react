import React, { useState } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainHeader from './components/MainHeader/MainHeader';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import MainSidebar from './components/MainSidebar/MainSidebar';
import MainBody from './components/MainBody/MainBody';

function App() {

    return (
        <>
            <Global styles={reset}/>
            <MainLayout>
                <MainHeader />
                <MainBody />
                <MainSidebar />
            </MainLayout>
        </>
    );
}

export default App;