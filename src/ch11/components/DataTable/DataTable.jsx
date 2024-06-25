import { useEffect, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/sampleProducts";

function DataTable() {
    const [ mode, setMode ] = useState(0); // 0 = 조회, 1 = 추가, 2 = 수정, 3 = 삭제
    const [ products, setProducts ] = useState([ ...SAMPLE_PRODUCTS]);
    const [ isDeleting, setDeleting ] = useState(false);
    const [ editProdutcId, setEditProductId ] = useState(0); // 수정을 위한 상태, body -> header로 부모를 통해 전달해야해서 !!


    // 처음 페이지가 열렸을 때 저장소에 값이 없으면 [], 있으면 그걸 들고옴
    useEffect(()=> {
        const lsProducts = localStorage.getItem("products");
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts) );
    }, []);


    // 저장소에 저장해주기 위해 ( products가 변했을때ㅐ)
    useEffect( () => {
        localStorage.setItem("products", JSON.stringify(products));
    },[products]);

    return ( 
        <div className="table-main-container">
            <DataTableHeader 
                mode={mode} 
                setMode={setMode} 
                products={products} 
                setProducts={setProducts} 
                setDeleting={setDeleting}
                editProdutcId={editProdutcId}
            />

            <DataTableBody 
                mode={mode} 
                setMode={setMode} 
                products={products} 
                setProducts={setProducts} 
                isDeleting={isDeleting} 
                setDeleting={setDeleting} 
                setEditProductId={setEditProductId}
            /> 
        </div>
     );
}

export default DataTable;