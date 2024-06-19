/*
  컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수 (대문자)
  
  JSX 특징
    1. 태그를 열었으면 닫아야한다. <a></a> or <a />
    2. 여러 태그를 리턴해야한는 경우에는 하나로 묶어야 한다. >> 태그 또는 Fragmet 사용하는데 생략 가능 >> <> </> 
    3. JSX 안에 값 또는 변수를 사용하려면 {} 표현식을 사용해야한다. {값} {{객체}}
  
    props - 컴포넌트의 매개변수 종류...?
*/

import "./App.css";
import Box from "./components/Box";
import CustomInput from "./components/CustomInput";
import Hello from "./components/Hello";


// 여기부터 JSX영역!!
function App() {// 컴포넌트
  const name = "최단비"; 
  const fontColorGreen = { 
    color: "Green"
  };

  const age = <h2>{31}</h2>;

  return <> 
    <div>
      <Hello></Hello> 
    </div>
      {/*<div>
        <Hello />  
        </div>*/}
      <h1 style={fontColorGreen} className={"fs-20 italic"}>{name}</h1> 
      <CustomInput ph={"이름"} disabled={true} value={"김준일"}/>
      <CustomInput ph={"나이"} disabled={false} />
      <CustomInput ph={"연락처"} disabled={true} />
      <Box name={"김준일"} isShow={true}>
        {age}
        {age}
      </Box>
  </>
}

export default App;
