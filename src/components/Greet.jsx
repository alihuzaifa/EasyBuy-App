import { Text, View, SafeAreaView, Image } from 'react-native'
import GlobalStyle from '../assets/Style';
import HeadingChildText from './HeadingChildText';
import Button from './Button';

const GreetMessage = ({ image, heading, text, btnText }) => {

    return (
        <SafeAreaView style={GlobalStyle.mainContainer}>
            <View style={GlobalStyle.centerBox}>
                <View style={GlobalStyle.GreetImageBox}>
                    <Image source={image} style={GlobalStyle.GreetImage} />
                </View>
                <Text style={GlobalStyle.greetText}>{heading || ''}</Text>
                <HeadingChildText>
                    {text || ''}
                </HeadingChildText>
                <Button>{btnText || 'SHOP NOW'}</Button>
            </View>
        </SafeAreaView>
    )
}

export default GreetMessage