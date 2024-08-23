'use client'
// import {useState} from 'react';
import { useSelector,useDispatch, TypedUseSelectorHook } from 'react-redux';
import { removeProduct,  incrementQuantity, decrementQuantity } from '@/app/store/basketSlise';
import FormBusket from './FormBusket';
import type { RootState,AddDispatch } from '@/app/store/store';
import { FC } from 'react';

type ShowProps = {
   show: boolean;
   hidenBasket: ()=>{}
}

 const Busket:FC<ShowProps> = ({show, hidenBasket})=>{
   const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
   const products = useAppSelector(state=>state.basket.products)
  
  const dispatch =  useDispatch<AddDispatch>();
 
  type Produkt = {
   id:string,
   image: string,
   menuTitle: string,
   price: number,
   menuText: string,
   quantity: string
}

   return(
<div className= {show? "basket__modal show__basket": "basket__modal"}>
            <button className="modal__close" onClick={hidenBasket}>X</button>
            <h3 className="basket__title">Basket</h3>
            <div className="basket__box">
               {
                  products.length==0
                     ?<h3 className="basket__empty">Cart is empty</h3>
                  
               :products.map((item)=>(
            
                  <div className="basket__item" key={item.id}>
                 <img src={item.image} alt={item.menuTitle} className="basket__img" />
                  <h4 className="product__title">{item.menuTitle}</h4>
                   <div className='flax-box'>

                     <button onClick={()=> dispatch(decrementQuantity(item.id))}>-</button>
                     <div className='input-number'>{item.quantity}</div>
                     <button onClick={()=> dispatch(incrementQuantity(item.id))}>+</button>
                   </div>
                 <div className="product__price">{Math.round(item.price * Number(item.quantity)*100)/100} $</div>
                 <button className="product__delete" type='button'onClick={()=>{ dispatch(removeProduct(item.id ))}} >X</button>
                 </div>
               ))}
               
            </div>
            {
               products.length>0&& <FormBusket/>
               
            }
              
         </div>
   )
}

export default Busket