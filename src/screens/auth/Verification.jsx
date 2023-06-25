import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
const Verification = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#faf9de", flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 10, paddingVertical: 20 }}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{ backgroundColor: "#fff", width: '100%', borderRadius: 20, padding: 15 }}>
        <Text style={{
          fontSize: 20,
          color: '#000',
          fontFamily: 'Poppins-Regular', marginLeft: 5
        }}>We have sent you an SMS with a code to number +92 1234567890</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Verification Code"
            placeholderTextColor="#888"
            keyboardType='numeric'
          />
          <Icon name="message1" size={20} color="#888" style={styles.icon} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Verification

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#888',
    marginVertical: 10,
    borderWidth: 1, paddingHorizontal: 15, borderRadius: 35, paddingVertical: 10, backgroundColor: "#faf9de", borderColor: '#e6e291', justifyContent: "center"
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  button: {
    backgroundColor: '#e6e291',
    borderRadius: 35,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: "#fff"
  },
})