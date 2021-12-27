import React from 'react'
import Product from './Product'


export default function ProductList(props) {
    return (
        props.productList.length > 0 ?
        props.productList.map((product, i)=>{
            return <Product product={product} key={i} inc_quan={props.inc_quan} dec_quan={props.dec_quan} remove={props.remove} index={i}/>
        })
        :<h1>No products exist in the Cart</h1>
    );
}
