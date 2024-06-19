/* JSX는 {true}, {false}, {null} 은 렌더링 하지 않음!! 
"문자열"로 감싸야 가능ㅇㅇ {"true"}, {"false"}, {"null"}
isShow 적으면 true, 안적으면 false 

{true && 10} >> 10 // true && true 니까
{false && 10} >> 안나와 // false && true
*/

function Box({ name, isShow, children }) {
    //console.log(props);

    const result = true && 10;
    console.log(result);

    return <div>
        <h1>{name}</h1>
        {children}
        {result}
        {true && "김준일"}
        {isShow && <h3>안녕하세요</h3>}
        {isShow ? <h3>안녕하세요</h3> : <h4>안녕하세요</h4>}
    </div>
}

export default Box;