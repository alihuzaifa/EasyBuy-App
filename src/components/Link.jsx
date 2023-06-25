import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyle from '../assets/Style'

export default function Link({ message, onPress }) {
    return (
        <View>
            <TouchableOpacity style={GlobalStyle.LinkContainer} onPress={onPress}>
                <Text style={GlobalStyle.LinkMessage}>{message || 'No message provide'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}