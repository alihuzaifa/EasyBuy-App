import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyle from '../assets/Style'

export default function Button({ children, onPress }) {
    return (
        <View>
            <TouchableOpacity style={GlobalStyle.button} onPress={onPress}>
                <Text style={GlobalStyle.buttonText}>{children || 'NO TEXT'}</Text>
            </TouchableOpacity>
        </View>
    )
}