import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   name:"Awam",
   email:"",
   photoUrl:"" 
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserLogin:(state, action) =>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photoUrl = action.payload.photoUrl
        },
        setSignOut: (state) =>{
            state.name = null;
            state.email = null;
            state.photoUrl = null
        }
    }
})

export const {setUserLogin, setSignOut} = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhotoUrl = (state) => state.user.photoUrl;

export default userSlice.reducer;
