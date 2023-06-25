import { Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import GlobalStyle from '../../assets/Style';
import { FontAwesome } from '../../assets/Icon';
import Button from '../../components/Button';
import HeadingChildText from '../../components/HeadingChildText';
const ForgotPassword = () => {
  return (
    <SafeAreaView style={GlobalStyle.mainContainer}>
      <View style={GlobalStyle.centerBox}>
        <HeadingChildText>
          Please enter your email address. You will recieve a link to create a new password via link
        </HeadingChildText>

        <View style={GlobalStyle.inputContainer}>
          <TextInput
            style={GlobalStyle.input}
            placeholder="Email Address"
            keyboardType="email-address"
          />
          <FontAwesome name="envelope-o" />
        </View>
        <Button>Send</Button>
      </View>
    </SafeAreaView>
  )
}

export default ForgotPassword