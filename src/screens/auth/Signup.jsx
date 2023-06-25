import { View, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React from 'react'
import GlobalStyle from '../../assets/Style';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Link from '../../components/Link';
import HeadingChildText from '../../components/HeadingChildText';
import { FontAwesome } from '../../assets/Icon';
import TextWithIcon from '../../components/TextWithIcon';
const Signup = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyle.scrollContainer}s>
            <SafeAreaView style={GlobalStyle.mainContainer}>
                <View style={GlobalStyle.centerBox}>
                    <Heading>Sign Up!</Heading>
                    <View style={GlobalStyle.inputContainer}>
                        <TextInput
                            style={GlobalStyle.input}
                            placeholder="Your Name"
                        />
                        <FontAwesome name={'user'} />
                    </View>
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
                    <Button onPress={() => {

                    }}>
                        Sign up
                    </Button>
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