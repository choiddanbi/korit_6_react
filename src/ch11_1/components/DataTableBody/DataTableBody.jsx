import "./style.css";


function DataTableBody({ mode, products }) {
    return ( 
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" disabled={mode !== 3} /></th> 
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <th><input type="checkbox" disabled={mode === 0 || mode === 1} /></th>
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