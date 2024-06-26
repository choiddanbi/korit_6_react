
// 이모션

import { css } from "@emotion/react";


// 함수로 
export const container = (width) => css`
    box-sizing: border-box;
    border: 1px solid black;
    width: ${width}px;
    height: 500px;
`;

// const 변수명 = css``; 
export const container2 = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 300px;
    height: 300px;
    background-color: aquamarine;
`;

export const container3 = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 100px;
    height: 100px;
    background-color: beige;
`;

export const container4 = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    background-color: white;
`;
