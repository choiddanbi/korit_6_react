import React from 'react';
import { useParams } from 'react-router-dom';

function ParamsStudyPage(props) {
    const params = useParams(); // params는 객체, ":name/:age" << 이게 값!
    //console.log(params.name);
    console.log(params);

    return (
        <div>
            
        </div>
    );
}

export default ParamsStudyPage;