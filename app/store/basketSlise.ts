import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Produkt = {
   id:string,
   image: string,
   menuTitle: string,
   price: number,
   // menuText: string,
   quantity: string,
}

type ProduktPush = {
   id:string,
   image: string,
   menuTitle: string,
   price: number,
   value:string,
}

type ProductsState= {
   products: Produkt[],
   sum:number;
}
const initialState: ProductsState = {
   products:[],
   sum: 0.00
}

const basketSlise = createSlice({
   name: 'basket',
   initialState,
   reducers:{
      removeProduct:(state, action:PayloadAction<string>)=>{
         state.products = state.products.filter(item =>item.id != action.payload);
         state.sum = state.products.reduce((sum, count)=>sum +count.price,0 )
       },
     addProduct: (state, action:PayloadAction<ProduktPush>)=>{
     let findId = state.products.find((item)=>item.id == action.payload.id)
      if(findId) return
      
      
         state.products.push({
            id: action.payload.id,
            image:action.payload.image,
            menuTitle: action.payload.menuTitle,
            price:action.payload.price,
            quantity:action.payload.value,
          })
          state.sum = state.products.reduce((sum:number, count)=>sum +(count.price * Number(count.quantity)),0);
          state.sum =  Math.round((state.sum*100)/100)
         },
     incrementQuantity:(state, action:PayloadAction<string>)=>{
      
      state.products.map(product=>{
         if(product.id == action.payload  && Number(product.quantity)<10) {
             product.quantity = Number(product.quantity) + 1
            }
         })
         state.sum = state.products.reduce((sum:number, count)=>sum +(count.price * Number(count.quantity)),0);
          state.sum =  Math.round((state.sum*100)/100)
    },
    decrementQuantity:(state, action:PayloadAction<string>)=>{
      
      state.products.map(product=>{
         if(product.id == action.payload  && Number(product.quantity)>1) {
            product.quantity = Number(product.quantity) - 1
            }
         })

         state.sum = state.products.reduce((sum:number, count)=>sum +(count.price * Number(count.quantity)),0);
          state.sum =  Math.round((state.sum*100)/100)
    },
   }
});

export const {addProduct, removeProduct, incrementQuantity, decrementQuantity} = basketSlise.actions;
export default basketSlise.reducer;