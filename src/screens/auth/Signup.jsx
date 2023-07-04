import { View, SafeAreaView, TextInput, ScrollView, Text, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../../assets/Style';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Link from '../../components/Link';
import HeadingChildText from '../../components/HeadingChildText';
import { FontAwesome } from '../../assets/Icon';
import TextWithIcon from '../../components/TextWithIcon';
import { useFormik } from 'formik';
import { SignupSchema, SignupValues } from '../../assets/schema';
import { postApiMethod } from '../../assets/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Signup = ({ navigation }) => {
    const [isLoad, setIsLoad] = useState(false)
    const [mainError, setMainError] = useState('')

    const formik = useFormik({
        initialValues: SignupValues,
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            setIsLoad(true)
            const { email, password, name, phone } = values
            const postObj = { email, password, name, phone }
            const { status, data } = await postApiMethod('signup', postObj)
            if (status === 200) {
                const { email, _id } = data
                await AsyncStorage.setItem('id', JSON.stringify(_id));
                await AsyncStorage.setItem('email', JSON.stringify(email));
                navigation.navigate('otp', email)
            } else {
                setIsLoad(false)
                setMainError('User Already Exist');
                setTimeout(() => {
                    setMainError('');
                }, 5000);
            }
            setIsLoad(false)

        },
    });
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyle.scrollContainer} s>
            <SafeAreaView style={GlobalStyle.mainContainer}>
                <View style={GlobalStyle.centerBox}>
                    <Heading>Sign Up!</Heading>
                    <View style={GlobalStyle.inputContainer}>
                        <TextInput
                            style={GlobalStyle.input}
                            placeholder="Your Name"
                            name="name"
                            onChangeText={formik.handleChange('name')}
                            onBlur={formik.handleBlur('name')}
                            value={formik.values.name}
                        />
                        <FontAwesome name={'user'} />
                    </View>
                    {formik.touched.name && formik.errors.name && (
                        <Text style={GlobalStyle.error}>{formik.errors.name}</Text>
                    )}
                    <View style={GlobalStyle.inputContainer}>
                        <TextInput
                            style={GlobalStyle.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            name="email"
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
                            style={GlobalStyle.input}
                            placeholder="Phone Number"
                            keyboardType="numeric"
                            name="phone"
                            onChangeText={formik.handleChange('phone')}
                            onBlur={formik.handleBlur('phone')}
                            value={formik.values.phone}
                        />
                        <FontAwesome name={'phone'} />
                    </View>
                    {formik.touched.phone && formik.errors.phone && (
                        <Text style={GlobalStyle.error}>{formik.errors.phone}</Text>
                    )}
                    <View style={GlobalStyle.inputContainer}>
                        <TextInput
                            style={GlobalStyle.input}
                            placeholder="Password"
                            secureTextEntry
                            name="password"
                            onChangeText={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                            value={formik.values.password}

                        />
                        <FontAwesome name={'eye'} />
                    </View>
                    {formik.touched.password && formik.errors.password && (
                        <Text style={GlobalStyle.error}>{formik.errors.password}</Text>
                    )}
                    <Button onPress={() => {
                        formik.submitForm()
                    }}>
                        {isLoad ? <ActivityIndicator size={'large'} color={'white'} /> : "Sign up"}
                    </Button>
                    <Text style={GlobalStyle.error}>{mainError}</Text>
                    <View style={{ marginTop: 13 }}>
                        <HeadingChildText>Or continue with</HeadingChildText>
                    </View>
                    <TextWithIcon />
                    <Link message={"Already have an account Login"} onPress={() => {
                        navigation.navigate('login')
                    }} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
export default Signup