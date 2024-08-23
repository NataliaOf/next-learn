'use client'
import {useState} from 'react';
import { useSelector } from 'react-redux';
import Link from "next/link";
import Image from 'next/image'
import TheNavigate from "./navigate/TheNavigate";
import Busket from './busket/Busket';


export default function TheHeader(){
   const products = useSelector(state=>state.basket.products)
   const [show, setShow] = useState(false);
   const[value, setValue] = useState()
  
   const showBasket = ()=>{
      setShow(true)
   }
   const hidenBasket = () =>{
      setShow(false)
   }
   const navItems = [
      {label:'Home', href: '/'},
      {label:'About', href: '/about'},
      {label:'Blog', href: '/blog'},
   ]


  
   return(
      <header className="header">
         <div className="container">
            <div className="flax-box">
         <Link href="/">
           <Image src="/logo.svg" 
           width={40}
           height={51}
           alt="logo" />

          
         </Link>
         <div className="flax-box">
        <TheNavigate navLinks = {navItems}/>
         
         <button type='button' onClick={showBasket}>
         <div className="basket">
            <div className="basket-count">{products.length<1? null:products.length}</div>
           <Image 
           src="/basket.svg" 
           width={25}
           height={17}
           alt="basket" />

          
         </div>

         </button>

        <Busket show={show}  hidenBasket={ hidenBasket}/>
         </div>
         </div>
         
         </div>
      </header>
   )
}