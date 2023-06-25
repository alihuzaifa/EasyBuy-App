import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import GlobalStyle from '../assets/Style'

export default function TextWithIcon() {
    return (

        <TouchableOpacity
            style={GlobalStyle.iconTextContainer}
        >
            <Image source={require('../assets/image/google.png')} style={GlobalStyle.iconImage} />
            <Text style={GlobalStyle.iconText}>Google</Text>
        </TouchableOpacity>
    )
}