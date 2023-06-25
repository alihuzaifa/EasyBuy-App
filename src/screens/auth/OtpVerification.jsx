import { View, SafeAreaView, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import GlobalStyle from '../../assets/Style';
import HeadingChildText from '../../components/HeadingChildText';
import Link from '../../components/Link';
import Button from '../../components/Button';
const OtpVerification = () => {
    const otp1 = useRef();
    const otp2 = useRef();
    const otp3 = useRef();
    const otp4 = useRef();
    const [otpInput1, setotpInput1] = useState('')
    const [otpInput2, setotpInput2] = useState('')
    const [otpInput3, setotpInput3] = useState('')
    const [otpInput4, setotpInput4] = useState('')

    return (
        <SafeAreaView style={GlobalStyle.mainContainer}>
            <View style={GlobalStyle.centerBox}>
                <HeadingChildText>
                    We have sent you an SMS with a code to number +92 1234567890
                </HeadingChildText>
                <View style={GlobalStyle.otpContainer}>
                    <TextInput
                        style={GlobalStyle.otpInput}
                        ref={otp1}
                        value={otpInput1}
                        keyboardType="number-pad"
                        onChangeText={(text) => {
                            if (text.length >= 1) {
                                setotpInput1(text)
                                otp2.current.focus()
                            }
                        }}
                        maxLength={1}
                    />
                    <TextInput
                        style={GlobalStyle.otpInput}
                        ref={otp2}
                        value={otpInput2}
                        onChangeText={(text) => {
                            if (text.length >= 1) {
                                setotpInput2(text)
                                otp3.current.focus()
                            }
                        }}
                        keyboardType="number-pad"
                        maxLength={1}
                    />
                    <TextInput
                        style={GlobalStyle.otpInput}
                        ref={otp3}
                        value={otpInput3}
                        onChangeText={(text) => {
                            if (text.length >= 1) {
                                setotpInput3(text)

                                otp4.current.focus()
                            }
                        }}
                        keyboardType="number-pad"
                        maxLength={1}
                    />
                    <TextInput
                        style={GlobalStyle.otpInput}
                        ref={otp4}
                        value={otpInput4}
                        onChangeText={(text) => {
                            if (text.length >= 1) {
                                setotpInput4(text)
                                otp4.current.focus()
                            }
                        }}
                        keyboardType="number-pad"
                        maxLength={1}
                    />
                </View>
                <Link message={"Didn't recieve an otp RESEND"} onPress={() => {

                }} />
                <Button>VERIFY</Button>
            </View>
        </SafeAreaView>
    )
}
export default OtpVerification