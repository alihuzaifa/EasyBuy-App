import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import GlobalStyle from '../../assets/Style'
const ResetPasswordGreet = () => {

  return (
    <SafeAreaView style={GlobalStyle.mainContainer}>
      <View style={{ backgroundColor: "#fff", width: '100%', borderRadius: 20, padding: 15 }}>
        <View style={{ alignItems: "center", marginVertical: 10 }}>

          <Image source={require('./src/assets/image/key.png')} style={{ width: 160, height: 150 }} />
        </View>
        <Text style={{
          fontSize: 30,
          color: '#000',
          textAlign: "center", fontFamily: 'Poppins-Bold'
        }}>Your Password Has Been Reset!</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DONE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ResetPasswordGreet

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
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
  otpInput: {
    width: 70,
    height: 70,
    borderWidth: 1,
    backgroundColor: "#faf9de", borderColor: '#e6e291', fontSize: 30, fontFamily: "Poppins-Regular", borderRadius: 35, textAlign: 'center',
    // marginRight: 10,
    // fontSize: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: "space-between", alignItems: "center"
  },
})