import { useEffect, useState } from "react";
import "./style.css";


function DataTableBody({ mode, setMode, products, setProducts, isDeleting, setDeleting }) {
    // const [ isChecks, setChecks ] = useState([]);
    const [ viewProducts, setViewProducts ] = useState([]); // 체크박스 체크 확인용
    const [ checkedAll, setCheckedAll ] = useState(false); // 전체 체크박스 확인용


    // products 또는 mode가 변했을 때 resetChecked() 실행
    useEffect(() => {
        if(mode === 0) {
            resetviewProducts();
            setCheckedAll(false);
        }
    }, [products, mode]);


    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked); // product.isChecked만 뽑아옴
        if(checkStates.includes(false)) {
            setCheckedAll(false);
        }else {
            setCheckedAll(true);
        }
    },[viewProducts]);


    useEffect(()=> {
        if(isDeleting) {
            setProducts([...viewProducts
                .filter(viewProduct => viewProduct.isChecked === false)
                .map(viewProduct => {
                    const { isChecked, ...product } = viewProduct; // ischecked를 제외한 product들 가져오기
                    return product;
                }) 
            ]);
            setMode(0);
            setDeleting(false);
        }
    }, [isDeleting]);



    // 체크 모두 풀기 // isChecked : false다풀어
    // isChecked속성을 추가한 새로운 Viewproducts배열 생성
    const resetviewProducts = () => {
        setViewProducts([ ...products.map(product => ({...product, isChecked : false}))]);
    }

    const handleCheckedAllChange = (e) => {
        setCheckedAll(checked => { // checked는 그냥 변수인데 true 였으면 체크 다 풀기, false였으면 다 체크
            if(!checked) { // setCheckedAll이 true >> 전체체크
                setViewProducts([ ...products.map(product => ({...product, isChecked : true}))]);
            } else {
                resetviewProducts();
            }
            return !checked;
        });
    }

    // => {함수}, => (값), => {(객체)}

    // 체크 확인
    const handleCheckedChange = (e) => {
        if(mode === 2) { // 수정 ( 다중선택 안됨 )
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) { // e.target.value = product.id
                        return {
                            ...product,
                            isChecked: !product.isChecked // 선택한 애의 checked를 상태를 반대로
                        } 
                    }
                    return {
                        ...product,
                        isChecked: false // 선택한거 빼고 나머지들의 checked를 false로!
                    }
                }) ]
            });
        }

        if(mode === 3) { // 삭제
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) { // e.target.value = product.id
                        return {
                            ...product,
                            isChecked: !product.isChecked // 선택한 애의 checked 를 true 로
                        }
                     }
                    return product; // 나머지는 그대로
                }) ]
            });
        }
    }


    return ( 
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input 
                            type="checkbox" 
                            disabled={mode !== 3} 
                            onChange={handleCheckedAllChange}
                            checked={checkedAll}
                            />
                        </th> 
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewProducts.map(product => (
                            <tr key={product.id}>
                                <th><input 
                                    type="checkbox" 
                                    disabled={mode === 0 || mode === 1} 
                                    checked={product.isChecked} 
                                    onChange={handleCheckedChange}
                                    value={product.id}
                                    />
                                </th>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.size}</td>
                                <td>{product.color}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
     );
}

export default DataTableBody;