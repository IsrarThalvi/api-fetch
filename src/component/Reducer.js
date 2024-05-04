import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setUsers: (state, action) => {
      console.log("from redux : ",action.payload)
      state.users = [...action.payload];
    },
    updateUser: (state, action) => {
      state.users = state.users.map(user => {
        if (user.id === action.payload.id) {
          console.log("inside if")
          return action.payload; // Replace the user with the updated data
        } else {
          return user; // Keep the user data unchanged
        }
      });
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user =>
      user.id !== action.payload);

      
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, setUsers, deleteUser, updateUser } = userSlice.actions

export default userSlice.reducer