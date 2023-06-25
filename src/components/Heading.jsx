import { View, Text } from 'react-native'
import React from 'react'
import GlobalStyle from '../assets/Style'
export default function Heading({ children }) {
    return (
        <View>
            <Text style={GlobalStyle.authHeading}>{children || ''}</Text>
        </View>
    )
}