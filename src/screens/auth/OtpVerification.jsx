import { View, SafeAreaView, TextInput, Text } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import GlobalStyle from '../../assets/Style';
import HeadingChildText from '../../components/HeadingChildText';
import Link from '../../components/Link';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFormik } from 'formik';
import { otpSchema, otpValues } from '../../assets/schema';
import { postApiMethod } from '../../assets/Api';
const OtpVerification = ({ route, navigation }) => {
    const otp1 = useRef();
    const otp2 = useRef();
    const otp3 = useRef();
    const otp4 = useRef();
    const [email, setEmail] = useState(route.params);
    const [isLoad, setIsLoad] = useState(false)
    const [mainError, setMainError] = useState('')

    const getEmail = async () => {
        try {
            let getUserEmail = await AsyncStorage.getItem('email');
            if (getUserEmail) {
                getUserEmail = JSON.parse(getUserEmail)
                setEmail(getUserEmail)
            }
        } catch (error) {
            console.log("🚀 error:", error)

        }
    }
    useEffect(() => {
        getEmail()
    }, [])

    const formik = useFormik({
        initialValues: otpValues,
        validationSchema: otpSchema,
        onSubmit: async (values) => {
            setIsLoad(true)
            const { firstOtp, secondOtp, thirdOtp, fourthOtp } = values
            let otpNumbers = `${Number(firstOtp)}${Number(secondOtp)}${Number(thirdOtp)}${Number(fourthOtp)}`
            const postObj = { otp: Number(otpNumbers), email }
            const postOtp = await postApiMethod('checkOtp', postObj)
            if (postOtp.status === 200) {
                
            }
            console.log("🚀 ~", postOtp?.data)
        }
    })
    return (
        <SafeAreaView style={GlobalStyle.mainContainer}>
            <View style={GlobalStyle.centerBox}>
                <HeadingChildText>
                    We have sent you a verification code to this email {email}
                </HeadingChildText>
                <View style={GlobalStyle.otpContainer}>
                    <TextInput
                        style={GlobalStyle.otpInput}
                        ref={otp1}
                        value={formik.values.firstOtp}
                        keyboardType="number-pad"
                        onChangeText={(text) => {
                            formik.setFieldValue('firstOtp', text)
                            if (text.length >= 1) {
                                otp2.current.focus()
                            }
                        }}
                        maxLength={1}
                    />
                    <TextInput
                        style={GlobalStyle.otpInput}
                        ref={otp2}
                        value={formik.values.secondOtp}
                        onChangeText={(text) => {
                            formik.setFieldValue('secondOtp', text)
                            if (text.length >= 1) {
                                otp3.current.focus()
                            }
                        }}
                        keyboardType="number-pad"
                        maxLength={1}
                    />
                    <TextInput
                        style={GlobalStyle.otpInput}
                        ref={otp3}
                        value={formik.values.thirdOtp}
                        onChangeText={(text) => {
                            formik.setFieldValue('thirdOtp', text)
                            if (text.length >= 1) {
                                otp4.current.focus()
                            }
                        }}
                        keyboardType="number-pad"
                        maxLength={1}
                    />
                    <TextInput
                        style={GlobalStyle.otpInput}
                        ref={otp4}
                        value={formik.values.fourthOtp}
                        onChangeText={(text) => {
                            formik.setFieldValue('fourthOtp', text)
                            if (text.length >= 1) {
                                otp4.current.focus()
                            }
                        }}
                        keyboardType="number-pad"
                        maxLength={1}
                    />
                </View>
                {formik.touched.firstOtp && formik.errors.firstOtp && (
                    <Text style={GlobalStyle.error}>{formik.errors.firstOtp}</Text>
                )}
                {formik.touched.secondOtp && formik.errors.secondOtp && (
                    <Text style={GlobalStyle.error}>{formik.errors.secondOtp}</Text>
                )}
                {formik.touched.thirdOtp && formik.errors.thirdOtp && (
                    <Text style={GlobalStyle.error}>{formik.errors.thirdOtp}</Text>
                )}
                {formik.touched.fourthOtp && formik.errors.fourthOtp && (
                    <Text style={GlobalStyle.error}>{formik.errors.fourthOtp}</Text>
                )}
                <Link message={"Didn't recieve an otp RESEND"} onPress={() => {

                }} />
                <Button onPress={formik.submitForm}>VERIFY</Button>
            </View>
        </SafeAreaView>
    )
}
export default OtpVerification