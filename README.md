## 프로젝트 생성
- npx create-react-app 프로젝트명

## 라이브러리 설치
- 라우터 > npm i react-router-dom
- Emotion > npm i @emotion/react
- Recoil > npm i recoil
- React Icons > npm i react-icons
- Sweetalert2 > npm i sweetalert2

## JSX 자동완성
- Ctrl + Shift + P
- users settings.json(vscode 사용자 설정) 선택
- 아래의 코드 추가
```json
    "emmet.syntaxProfiles": {
        "javascript":"jsx"
    },
    "emmet.includeLanguages": {
        "javascript":"html"
    }
```

## 확장기능(Extension)
- Reactjs code snippets
- vscode-color-picker
- vscode-styled-components

## 터미널 선택
- Ctrl + Shift + P
- terminal: Select Default Profile 선택
- gitBash 선택

## 폴더 구조
- components 
- pages
- constants
- styles
- hooks
- configs
- utils
- atoms 
- assets
- apis(services)
- store

## 주요 Hook 함수
- useState(기본값)
- useEffect(() => {}, [])
- useRef(기본값)
- useMemo(() => 리턴, [])
- useCallback(() => {}, [])
- useRecoilState(atom)
- useNavigate()
- useLocation()
- useParams()
- useSearchParams()

## 명명규칙
- Component 이름은 대문자로 시작
- 하나의 Component 폴더에는 하나의 Component.jsx 파일과 style.js 파일로 구성
- constants 폴더에 들어가는 상수들은 대문자와 스네이크 표기법으로 작성
- 이벤트 함수명은 handle로 시작해서 이벤트명으로 끝낸다



## 기타 메모메모
Link to = 부분렌더링
a태그 - 페이지 전체 렌더링

1. URL 파라미터
/profile/velopert
   const params = useParams();

2.쿼리스트링 - ( useSearchParams, useParams )
/articles?**page=1&keyword=react


<useNavigate>
함수안에서 이동할떄 useNavigate
const navigate = useNavigate("주소");


< useMemo vs useCallback >
- useMemo : 값저장
- useCallback : 함수저장


< defalut vs export >
- defalut : function 하나일때




function CustomHookPage(props) {
    const [ value, setValue ] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }


    return (
        <div>
            <input type="text" onChange={handleChange} value={value} />
        </div>
    );
}




< 설치 >
npm i recoil

index.js에

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RecoilRoot>
);
