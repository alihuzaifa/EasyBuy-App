import { View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import GlobalStyle from '../../assets/Style';
import { FontAwesome } from '../../assets/Icon';
import HeadingChildText from '../../components/HeadingChildText';
import Button from '../../components/Button';
const ResetPassword = () => {
  return (
    <SafeAreaView style={GlobalStyle.mainContainer}>
      <View style={GlobalStyle.centerBox}>
        <HeadingChildText>
          Enter new password and confirm.
        </HeadingChildText>
        <View style={GlobalStyle.inputContainer}>
          <TextInput
            style={GlobalStyle.input}
            placeholder="Password"
            
            secureTextEntry
          />
          <FontAwesome name={'eye'} />
        </View>
        <View style={GlobalStyle.inputContainer}>
          <TextInput
            style={GlobalStyle.input}
            placeholder="Confirm Password"
            
            secureTextEntry
          />
          <FontAwesome name={'eye'} />

        </View>
        <Button>
          CHANGE PASSWORD
        </Button>
      </View>
    </SafeAreaView>
  )
}
export default ResetPassword