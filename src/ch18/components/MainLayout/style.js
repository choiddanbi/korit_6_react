import { css } from "@emotion/react";


export const layout = css`
    display: flex;
    position: relative; // 최상위로 잡기, 헤더 뺸 나머지는 다 바디로 줘버릴라고
    flex-direction: column;
    box-sizing: border-box;
    margin: 100px auto;
    border: 1px solid #dbdbdb;
    width: 600px;
    height: 700px;
    background-color: white;
    overflow: hidden;
`;

/*
export const layout = css`
    position: relative;
    box-sizing: border-box;
    margin: 100px auto;
    border: 1px solid #dbdbdb;
    width: 600px;
    height: 700px;
    background-color: white;
    overflow: hidden;
`;

*/