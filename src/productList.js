function ProductList({ products, deleteProduct, editProduct }) {
    return (
        <table className='table m-3 '>
            <thead>
                <tr>
                    {/* <th>ID</th> */}
                    <th>item</th>
                    <th>quantity</th>
                   
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((data) => (
                        <tr key={data.id} >
                            {/* <td>{data.id}</td> */}
                            <td>{data.item}</td>
                            <td>{data.quantity}</td>
                            
                            <td>
                                <button className='btn btn-primary m-1' onClick={() => editProduct(data)}>Edit</button>
                                <button className="btn btn-danger m-1" onClick={() => deleteProduct(data.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )



};

export default ProductList;


















