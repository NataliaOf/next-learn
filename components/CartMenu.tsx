'use client'
import { useDispatch } from 'react-redux';
import style from './menuSection/mebuSection.module.css'
import Image from 'next/image' ;
import { addProduct } from '@/app/store/basketSlise';
import { useState, FC } from 'react';

type MenuCart = {
   id:string,
   image: string,
   menuTitle: string,
   price: number,
   menuText: string,
   quantity: string,
}

type Props= {
   MenuCarts: MenuCart[];
}


const CartMenu:FC<MenuCart>=({id, image, menuTitle,price,quantity, menuText})=>{
   const [value, setValue]= useState(quantity);

   const dispatch = useDispatch();

   const addProductBasket = ()=>{
      dispatch(addProduct({id, image, menuTitle,price, value }))
   }
   return(
        <div className={style.cartMenu}> 


               <div className="flax-box">

                  <Image
                  src={image}
                  width={120}
                  height={120}
                  alt="burger"/>
                  <div className={style.cartMenuInfo}>
                     <h4 className={style.cartMenuTitle}>{menuTitle}<span>{price} $</span></h4>
                     <p className={style.cartMenuText}>
                     {menuText}
                     </p>
                     <input
                     className='input-number'
                     type="number" 
                     min='1' max='20'
                     value={value}
                     onChange={e=>setValue(e.target.value)}
                     placeholder='1'/>
                     <button className='button-fill'
                     onClick={addProductBasket}>Add to card</button>
                  </div>
               </div> 
             </div> 
   )
};

export default  CartMenu;