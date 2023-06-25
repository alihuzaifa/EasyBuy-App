
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";
import { StatusBar } from "react-native";
import ForgotPassword from "./screens/auth/ForgotPassword";
import ResetPassword from "./screens/auth/ResetPassword";
import OtpVerification from "./screens/auth/OtpVerification";
import AccountCreated from "./screens/auth/AccountCreatedMessage";
const Stack = createNativeStackNavigator()
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'} />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="signup" component={Signup} />
                <Stack.Screen name="forget" component={ForgotPassword} />
                <Stack.Screen name="reset" component={ResetPassword} />
                <Stack.Screen name="otp" component={OtpVerification} />
                <Stack.Screen name="accountGreet" component={AccountCreated} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}