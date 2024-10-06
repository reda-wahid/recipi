import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

//acbe4967d6f4431f8784d4a2e2dd241a
//33ff0ca4e84e4a048c4bd766d09c5dc1
//7c1d1a1e629e4fc4a508f3669e708c61


export const fetchrecipi = createAsyncThunk('recipi/fetchrecip', async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await fetch(`${process.env.REACT_APP_URL_API}/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY_API}&quary=chicken&number=30`);
        console.log(res);
    return await res.json();
    
    } catch (error) {
        return rejectWithValue(error.message);
    }
    
});



const initialState ={
     meal:[],
    cart:[],
    isloading: false,
    error: null
}

export const chickenSlice = createSlice({
    name: 'recipi',
    initialState,
    reducers:{
      addtocart:(state, action) => {
       const addcart = state.cart.find((item)=> item.id === action.payload.id)
        !addcart && state.cart.push(action.payload)

        !addcart &&   toast.success("success add item to cart",{
            position: "bottom-left"
        });
        
      },
       deletecart:(state, action) => {
       state.cart = state.cart.filter((item)=> item.id !== action.payload.id)
      },
       increment: (state,action) => {

    const inc = state.cart.find((item)=> item.id === action.payload.id) 
state.cart = state.cart.map((item)=>item.id === inc.id ? {...inc , qty : inc.qty += 1} : item);
        
    
      },
      decrement: (state,action) => {
        const dec = state.cart.find((item)=> item.id === action.payload.id) 
        state.cart = state.cart.map((item)=>item.id === dec.id ? {...dec , qty : dec.qty -= 1} : item);
      },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchrecipi.pending,(state,action)=>{
            state.isloading = true;
            state.error = null;
          
        })
        .addCase(fetchrecipi.fulfilled,(state,action)=>{
            state.isloading = false;
            state.meal = action.payload.results;
           
        })
        .addCase(fetchrecipi.rejected,(state,action)=>{
            state.isloading = false;
            state.error = action.payload.results;
          
        })

     
    }
  
})

export const { addtocart,deletecart,decrement,increment } = chickenSlice.actions; 
export default chickenSlice.reducer;