import React from 'react'

export default function Product(props) {
    let {productInfo, updateProduct, deleteProduct} = props;
  return (
    <div className="col-md-3 bg-info m-1 border border-dark rounded">
                        <h3>{productInfo.name}</h3>
                        <h3>{productInfo.category}</h3>
                        <h3>{productInfo.price}</h3>
                        {productInfo.onSail ? <h3 className='text-danger'>On Sale</h3> :
                         <h3 className='text-success'>Not On Sale</h3>}
                        <button onClick={() => updateProduct(productInfo)} className='btn btn-primary m-1'>Update</button>
                        <button onClick={() => deleteProduct(productInfo)} className='btn btn-danger m-1'>Delete</button>
                    </div>
  )
}
