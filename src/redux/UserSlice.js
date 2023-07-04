import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userId: "", email: "",
}
const UserCounterSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        saveuserId: (state, { payload }) => {
            state.userId = payload
        },
        saveEmail: (state, { payload }) => {
            state.email = payload
        },
        logout: (state) => {
            state.userId = ''
        }
    }
})
export const {
    saveuserId,
    logout,
    saveEmail
} = UserCounterSlice.actions
export default UserCounterSlice.reducer