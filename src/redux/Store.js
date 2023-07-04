import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import { combineReducer } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
let persistConfig = {
    key: 'root',
    storage
}
let rootReducer = combineReducer({
    user: UserSlice
})
let persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer
})
export default store;