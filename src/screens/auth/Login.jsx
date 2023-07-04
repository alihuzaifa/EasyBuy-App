import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../../assets/Style';
import Heading from '../../components/Heading';
import HeadingChildText from '../../components/HeadingChildText';
import Button from '../../components/Button';
import { FontAwesome } from '../../assets/Icon';
import Link from '../../components/Link';
import { useFormik } from 'formik';
import { SigninSchema, SigninValues } from '../../assets/schema';
import { postApiMethod } from '../../assets/Api';
const Login = ({ navigation }) => {
    const [isLoad, setIsLoad] = useState(false)
    const [mainError, setMainError] = useState('')
    const formik = useFormik({
        initialValues: SigninValues,
        validationSchema: SigninSchema,
        onSubmit: async (values) => {
            setIsLoad(true)
            const { email, password } = values
            const postObj = { email, password }
            const { status, data } = await postApiMethod('https://glamorous-bee-miniskirt.cyclic.app/user/login', postObj)
            if (status == 200) {
                formik.resetForm()
                setIsLoad(false)
            } else {
                setIsLoad(false)
                setMainError('Invalid Email or Password');
                setTimeout(() => {
                    setMainError('');
                }, 5000);
            }
            setIsLoad(false)
        },
    });
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
                            name="email"
                            style={GlobalStyle.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            onChangeText={formik.handleChange('email')}
                            onBlur={formik.handleBlur('email')}
                            value={formik.values.email}
                        />
                        <FontAwesome name={'envelope-o'} />
                    </View>
                    {formik.touched.email && formik.errors.email && (
                        <Text style={GlobalStyle.error}>{formik.errors.email}</Text>
                    )}
                    <View style={GlobalStyle.inputContainer}>
                        <TextInput
                            name="password"
                            style={GlobalStyle.input}
                            placeholder="Password"
                            secureTextEntry
                            onChangeText={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                            value={formik.values.password}
                        />
                        <FontAwesome name={'eye'} />
                    </View>
                    {formik.touched.password && formik.errors.password && (
                        <Text style={GlobalStyle.error}>{formik.errors.password}</Text>
                    )}
                    <TouchableOpacity onPress={() => navigation.navigate('forget')}>
                        <Text style={GlobalStyle.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <Button onPress={() => {
                        formik.submitForm()
                    }}>
                        {isLoad ? <ActivityIndicator size={'large'} color={'white'} /> : "Sign In"}

                    </Button>
                    <Text style={GlobalStyle.error}>{mainError}</Text>
                    <Link message={"Don't have an account Signup"} onPress={() => {
                        navigation.navigate('signup')
                    }} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
export default Login