import React from 'react'
import AppNavigator from './src/AppNavigator'
import { Provider } from 'react-redux'
import persistStore from 'redux-persist/es/persistStore'
import store from './src/redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
let persist = persistStore(store)
export default function App() {
    return <Provider store={store}>
        <PersistGate persist={persist}>
            <AppNavigator />
        </PersistGate>
    </Provider>
}