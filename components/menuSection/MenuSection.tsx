'use client'
import Image from 'next/image';
import style from './mebuSection.module.css';
import { menu } from '@/data/data';
import CartMenu from '../CartMenu';
import Link from 'next/link';
import {useEffect, useRef, useState} from 'react'

type MenuCart = {
   id:string,
   image: string,
   menuTitle: string,
   price: number,
   menuText: string,
   quantity: number,
}

type Props= {
   MenuCarts: MenuCart[];
}


export default function MenuSection(){
   const active1:any =useRef()
   const active2:any =useRef()
   const active3:any =useRef()
   const[menuCarts, setMenuCarts ]  = useState(menu) ;


const showBurger= ()=>{
   const menuCarts  = menu.filter(menu => menu.category === 'burger' )
   active1.current.classList = 'button-fill'
   active2.current.classList = 'button'
   active3.current.classList = 'button'
   setMenuCarts(menuCarts)
    return menuCarts;
 }

const showHotDog= ()=>{
   const menuCarts  = menu.filter(menu => menu.category === 'Hot Dog' )
   setMenuCarts(menuCarts)
   active1.current.classList = 'button'
   active2.current.classList = 'button-fill'
   active3.current.classList = 'button'
    return menuCarts;
 }

 const showDrinks= ()=>{
   const menuCarts  = menu.filter(menu => menu.category === 'drinks' )
 setMenuCarts(menuCarts)
 active1.current.classList = 'button'
   active2.current.classList = 'button'
   active3.current.classList = 'button-fill'
    return menuCarts;
 }


   return(
   
      <section className="section">
         <div className="container">
            <div className={style.menuSection}>
            <h2>Browse our menu</h2>
            <p className={style.instruction}>Use our menu to place an order online,
                or phone our store to place a pickup order. Fast and fresh food.</p>
           <div className={style.battonBox}>
            <button onClick={()=>showBurger()} ref= {active1} className='button'>Burgers</button>
           <button onClick={()=>showHotDog()} ref= {active2} className='button'>Hot Dog</button>
           <button onClick={()=>showDrinks()} ref= {active3} className='button'>Drinks</button>
           </div>
           <div className={style.menuBox}>

         {
             menuCarts.map((item)=>(
                <CartMenu key={item.id}
                id= {item.id}
               image ={item.image}
               menuTitle = {item. menuTitle}
               price= {item.price}
               quantity={item.quantity}
               menuText = {item.menuText}/>
               ))
         }
      
          
           </div>
           <Link className="link"
         href='/'
         >See Full Menu</Link>
         </div>
         </div>
      </section>
   )
}