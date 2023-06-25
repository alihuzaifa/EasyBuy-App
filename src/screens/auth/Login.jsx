import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import React from 'react'
import GlobalStyle from '../../assets/Style';
import Heading from '../../components/Heading';
import HeadingChildText from '../../components/HeadingChildText';
import Button from '../../components/Button';
import { FontAwesome } from '../../assets/Icon';
import Link from '../../components/Link';
const Login = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyle.scrollContainer}>
            <SafeAreaView style={GlobalStyle.mainContainer}>
                <View style={GlobalStyle.centerBox}>
                    <Heading>Welcome Back!</Heading>
                    <HeadingChildText>
                        Sign in to continue
                    </HeadingChildText>
                    <View style={GlobalStyle.inputContainer}>
                        <TextInput
                            style={GlobalStyle.input}
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                        <FontAwesome name={'envelope-o'} />
                    </View>
                    <View style={GlobalStyle.inputContainer}>
                        <TextInput
                            style={GlobalStyle.input}
                            placeholder="Password"
                            secureTextEntry
                        />
                        <FontAwesome name={'eye'} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('forget')}>
                        <Text style={GlobalStyle.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <Button onPress={() => {

                    }}>
                        Sign In
                    </Button>
                    <Link message={"Don't have an account Signup"} onPress={() => {
                        navigation.navigate('signup')
                    }} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
export default Login