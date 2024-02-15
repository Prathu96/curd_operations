
import React from "react";
import ProductList from "./productList";
import { deleteData, getData, putData, postData } from './api';
import { useEffect, useState } from 'react';
import ProductForm from "./form";

const App = () => {
    const [products, setProducts] = useState([]);
    const [edit, setEdit] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [initialForm, setForm] = useState({ item: '', qantity: ''})
    useEffect(() => {
        getAllProducts();
    }, [])

    async function getAllProducts() {
        const response = await getData();
        setProducts(response.data);
    }
    async function addProduct(product) {
        let data = {
            item: product.item,
            quantity: product.quantity
            
        }
        if (edit)
            await putData(product.id, data);
        else
            await postData(data);
        getAllProducts();
        setOpenForm(false);


    }
    async function deleteProduct(id) {
        await deleteData(id);
        getAllProducts();
    }

    function editProduct(value) {
        setEdit(true);
        setOpenForm(true);
        setForm(value)

    }
    function closeForm() {
        setOpenForm(false)
    }
    function showForm() {
        setForm({ item: '', quantity: '' })
        setOpenForm(true);
        setEdit(false);

    }

    return (


      <div className="wrapper m-5 w-50">
       <div className="App-header">
         <h2>
          To-do list with CURD operations
         </h2>
       </div>

       <div className="App-body">
      
       <button className="btn btn-primary  float-end" type='"button' onClick={() => { showForm() }}>
       <h1> Create an item</h1>
       </button>
        <ProductList products={products} deleteProduct={deleteProduct} editProduct={editProduct}></ProductList>
        {openForm && <ProductForm add={addProduct} data={initialForm} close={closeForm}  ></ProductForm>}
      </div>
     </div>

        // <div className="wrapper m-5 w-50">
        //     <h2 className="text-primary text-center">CRUD Operations with React JS</h2>
        //     <button className="btn btn-primary float-end" onClick={() => { showForm() }}>Add new</button>
        //     <ProductList products={products} deleteProduct={deleteProduct} editProduct={editProduct}></ProductList>
        //     {openForm && <ProductForm addProduct={addProduct} data={initialForm} closeForm={closeForm}  ></ProductForm>}
        // </div>

    )

};

export default App;













// import Table from './table';
// import Form from './form';
// import getData from './api';
// import './App.css';
// import { useEffect, useState } from 'react';




// function App() {
//   const[products,setProducts]=useState([])
//   useEffect(
//     ()=>{
//       getProducts()
//     }
//   )

//   let getProducts=async()=> {
//    let see= await getData();
//      setProducts(see.data)   
//       }
//   return (
//     <div className="wrapper m-5 w-50">
//       <div className="App-header">
//         <h2>
//          To-do list with CURD operations
//         </h2>
//       </div>

//       <div className="App-body">
      
//       <button className="btn btn-primary" type='"button' >
//       <h1> Create an item</h1>
//       </button>
//       <button><Table products={products}></Table></button>
//       <Table products={products}></Table>
//       <Form></Form>
      

//       </div>
//     </div>
//   );
// }

// export default App;
