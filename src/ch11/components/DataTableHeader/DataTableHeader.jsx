import { useEffect, useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";


function DataTableHeader({ mode, setMode , setProducts, setDeleting, products, editProdutcId }) {

    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    };

    const inputRefs = {
        productName : useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    };

    const [ inputData, setInputData ] = useState({...emptyProduct}); // 입력창에 있는 거

    useEffect(() => {
        const [ product ] = products.filter(product => product.id === editProdutcId) // 체크된 id랑 product.id 하나씩 꺼내서 비교했을 떄 
        setInputData(!product ? {...emptyProduct} : { ...product }); // 같은게 있으면 입력창에 product객체 한놈 , 없으면 빈객체
    }, [editProdutcId]);


    const handleInputChange = (e) => {
        setInputData(inputData => ({ // 객체 리턴
            ...inputData,
            [e.target.name]: e.target.value // input 창에 있는 값들을 받아옴
        }));
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13 ) {
            if(e.target.name === "productName") {
                inputRefs.size.current.focus();
            }
            if(e.target.name === "size") {
                inputRefs.color.current.focus();
            }
            if(e.target.name === "color") {
                inputRefs.price.current.focus();
            }
            if(e.target.name === "price") {
                handleSubmitClick();
                inputRefs.productName.current.focus();
            }
        }
    }
    const handleChangeModoClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(products => {
                const productIds = products.map(product => product.id); // id값만 가져옴
                const maxId = productIds.length === 0 
                    ? 0 
                    : Math.max.apply(null, productIds); // product 추가 할 때 마다 새로운 id 값 부여

                return [ ...products, { ...inputData, id : maxId + 1 }];
            });
            Swal.fire({
                title:"상품 정보 추가 완료",
                icon:"success",
                position: "top=end",
                showConfirmButton: false,
                timer: 500
            });
            resetMode();
        }
        if(mode === 2) {
            Swal.fire ({
                title:"상품 정보 수정",
                showCancelButton: true,
                confirmButtonText:"확인",
                cancelButtonText: "취소",
            }).then(result => {
                if(result.confirmed) {
                    setProducts(products => [
                        ...products.map(product => {
                            if(product.id === editProdutcId) {
                                const { id, ...rest } = inputData; // inputData에서 id 를 제외한 값들을 rest에 담아서 가져오기 (id가 문자열일 수도 있어서)
                                return {
                                    ...product, // id 포함해서 다 가져오고
                                    ...rest // id 제외한 거만 가져와서 덮어쓰기 = id는 수정시키지 않기 위해서
                                }
                            }
                            return product;
                        })
                    ]);
                resetMode();
            }
        });
    }
        if(mode === 3) {
            Swal.fire({
                title: "상품 정보 삭제",
                test:"정말로 삭제 하시겠습니까 ?",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "red",
                cancelButtonText: "취소"
            }).then(result => {
                if(result.isConfirmed) {
                    setDeleting(true);
                }
            });
        }
    }

    const handleCancelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct });
    }

    return ( 
        <header className="table-header">
            <div className="input-group">
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="productName"
                    value={inputData.productName}
                    placeholder="상품명" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRefs.productName}
                    autoFocus 
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="size"
                    value={inputData.size}
                    placeholder="사이즈"
                    ref={inputRefs.size}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="color"
                    value={inputData.color}
                    placeholder="색상"
                    ref={inputRefs.color}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="price"
                    value={inputData.price}
                    placeholder="가격" 
                    ref={inputRefs.price}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
            </div>
            <div>
                {
                    !mode && (
                        <div className="button-group">
                        <button onClick={handleChangeModoClick} value={1} >추가</button>
                        <button onClick={handleChangeModoClick} value={2} >수정</button>
                        <button onClick={handleChangeModoClick} value={3} >삭제</button>
                    </div>
                    )
                }
                {
                    !!mode && (
                        <div className="button-group">
                        <button onClick={handleSubmitClick}>확인</button>
                        <button onClick={handleCancelClick}>취소</button>
                    </div>
                )
             }
            </div>
        </header>
     );
}

export default DataTableHeader;