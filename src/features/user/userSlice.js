import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  password: null,
  firstname: null,
  surname: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSignIn: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstname = action.payload.firstname;
      state.surname = action.payload.surname;
    },

    setUserSignOut: (state) => {
      state.id = null;
      state.email = null;
      state.password = null;
      state.firstname = null;
      state.surname = null;
    },
  },
});

export const { setUserSignIn, setUserSignOut } = userSlice.actions;

export const selectUserId = (state) => state.user.id;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPassword = (state) => state.user.password;
export const selectUserFirstname = (state) => state.user.firstname;
export const selectUserSurname = (state) => state.user.surname;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
