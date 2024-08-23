'use client'
import { useSelector,useDispatch, TypedUseSelectorHook } from 'react-redux';
import type { RootState,AddDispatch } from '@/app/store/store';
import { useForm } from "react-hook-form";

export default function FormBusket (){
   const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
   const sum = useAppSelector(state=>state.basket.sum)

   const { register, 
      handleSubmit,
       reset, 
       formState: { errors }
       } = useForm({
         mode: 'onBlur'
       });
  const mySubmit =( data) => {
   
   
   alert(data)
   reset();
};
   
   return(
      <form className="price__box"
      onSubmit={handleSubmit(mySubmit)}
      >
      <h3 className="pise__title">Order sue <span>{sum} $</span></h3>
      <textarea placeholder='Your adress'
      {...register("adress",{
       required:'This field is required',
       minLength:{
        value: 10,
        message:"Must be more than 10 letters"
       }
       })}
      ></textarea>
      <div style={{color:'red', fontSize:"14px"}}>
         {errors?.adress && <p>{errors?.adress?.message}</p>}
      </div>
       <input placeholder='Your phone'
        {...register("phone",{
         required:'This field is required',
         pattern:{
            value:/^(\d){1,10}$/g,
            message: "Only digits no more than 10"
         }
        })}
       />
       <div style={{color:'red', fontSize: '14px'}}>
         {errors.phone && <p>{errors.phone.message}</p>}
       </div>
      <button className="button-fill" type="submit">Order</button>
      </form>
            

   )
}