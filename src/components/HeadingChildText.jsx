import { View, Text } from 'react-native'
import React from 'react'
import GlobalStyle from '../assets/Style'
export default function HeadingChildText({ children }) {
    return (
        <View>
            <Text style={GlobalStyle.authHeadingChild}>{children || ''}</Text>
        </View>
    )
}