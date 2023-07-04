import { Provider } from 'react-redux';
import AppNavigator from './src/AppNavigator';
import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './src/redux/UserSlice';
const store = configureStore({
    reducer: UserSlice,
});
const App = () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
};

export default App;
