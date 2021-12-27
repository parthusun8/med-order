import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from './components/additem';
import React, { useState } from 'react';

function App() {

  const product = [
    {
      price: 80,
      name: "Caronox",
      quantity: 0,
    },
    {
      price: 55,
      name: "Pentanox 40",
      quantity: 0,
    },
    {
      price: 20,
      name: "Flexon",
      quantity: 0,
    },
    {
      price: 15,
      name: "Calpol",
      quantity: 0,
    },
  ]

  let [productList, setProductList] = useState(product)
  let [totalAmount, setTotalAmount] = useState(0)

  const inc_quan = (index)=>{
    let newProductList = productList.slice();
    newProductList[index].quantity++;
    let newtotalAmount = totalAmount;
    newtotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newtotalAmount);
  }

  const dec_quan = (index)=>{
    let newProductList = productList.slice();
    let newtotalAmount = totalAmount;
    if(newProductList[index].quantity > 0){
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newtotalAmount);
  }

  const reset = ()=>{
    let newProductList = productList.slice();
    newProductList.forEach((element)=>{
      element.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const remove = (index)=>{
    let newProductList = productList.slice();
    let newtotalAmount = totalAmount;
    newtotalAmount -= newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newtotalAmount);
  }

  const addItem = (name, price)=> {
    let newProductList = productList.slice();
    newProductList.push({
      price: price,
      name: name,
      quantity: 0
    });
    setProductList(newProductList);
  }

  return (
    <>
    <Navbar />
    <AddItem add={addItem}/>
    <main className="container mt-5">
      <ProductList 
        productList={productList}
        inc_quan = {inc_quan}
        dec_quan = {dec_quan}
        remove = {remove}
      />
    </main>
    <Footer totalAmount = {totalAmount} reset={()=>reset()}/>
    </>
  );
}

export default App;
