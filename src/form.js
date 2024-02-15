 import { useState } from "react";

 function Form(props) {
 
     const [product, setProduct] = useState(props.data);
     const [sumitted, setSubmitted] = useState(false)
 
     let changeFormData = (event) => {
         const { name, value } = event.target;
         setProduct({ ...product, [name]: value })
     }
     return (
         <div className="form-overlay">
             <form>
                 <div className="form-group">
                     <label>Item:</label>
                     <input className="form-control mt-2" value={product.item} type="text" name="item" placeholder="Enter Item"
                         onChange={changeFormData} />
                     {
                         sumitted && product.item.length < 1 && <span className="text-danger">Product item  must be altest 1 charecters</span>
                     }
 
                 </div>
                 <div className="form-group">
                     <label>quantity:</label>
                     <input className="form-control mt-2"
 
                         value={product.quantity}
                         onChange={changeFormData}
 
                         type="number" name="quantity" placeholder="Enter quantity" />
                     {
                         sumitted && product.quantity === "" && <span className="text-danger">Item's Quantity required</span>
                     }
                 </div>
               
                
 
                 <button className="btn btn-primary float-end"
 
                     onClick={(e) => {
                         setSubmitted(true)
                         e.preventDefault();
                         if (!!product.item && !!product.quantity ) {
                             props.add(product)
                         }
 
 
 
                     }}
 
                 >Send</button>
                 <button className="btn btn-danger float-end"
                     onClick={(e) => {
                         e.preventDefault();
                         props.close()
 
 
                     }}
                 >Cancel</button>
 
             </form>
 
         </div>
     )
 }
 
 
 export default Form






