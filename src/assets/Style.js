const { StyleSheet } = require("react-native")
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const COLOR = {
    bg: '#faf9de',
    white: "#fff",
    black: "#2e2e2e",
    border: '#e6e291',
    inputBg: '#faf9de',
    inputColor: '#888',
    btnBg: '#e6e291',
    iconColor: '#888',
    iconContainer: '#f1f1f1',
    otpInput: '#faf9de',
    otpBorder: '#e6e291',
    greetImageColor: "#ccc"
}
const responsive = {
    horizontal: (width) => responsiveWidth(width),
    vertical: (height) => responsiveHeight(height), fontSize: (font) => responsiveFontSize(font)
}

const GlobalStyle = StyleSheet.create({
    scrollContainer: {
        backgroundColor: COLOR.bg,
        flex: 1
    },
    mainContainer: {
        backgroundColor: COLOR.bg,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: responsive.horizontal(2.5),
        paddingVertical: responsive.vertical(5)
    },
    centerBox: {
        backgroundColor: COLOR.white,
        width: responsive.horizontal(95),
        borderRadius: responsive.horizontal(5),
        padding: responsive.horizontal(2.5), paddingBottom: responsive.vertical(3)
    },
    authHeading: {
        fontSize: responsive.fontSize(5),
        color: COLOR.black,
        textAlign: "center",
        fontFamily: 'Poppins-Bold'
    },
    authHeadingChild: {
        fontSize: responsive.fontSize(2.5),
        color: COLOR.black,
        textAlign: "center",
        fontFamily: 'Poppins-Regular',
        marginBottom: responsive.vertical(2.3)
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: COLOR.border,
        marginVertical: responsive.vertical(1.6),
        borderWidth: 1,
        paddingHorizontal: responsive.horizontal(3.5),
        borderRadius: responsive.horizontal(9),
        paddingVertical: responsive.vertical(1.5),
        backgroundColor: COLOR.inputBg,
        justifyContent: "center"
    },
    input: {
        flex: 1,
        fontSize: responsive.fontSize(2.2),
        fontFamily: 'Poppins-Regular',
        color: COLOR.inputColor
    },
    icon: {
        marginRight: responsive.horizontal(2.2),
        color: COLOR.iconColor
    },
    forgotPassword: {
        marginTop: responsive.vertical(1.8),
        fontSize: responsive.fontSize(2.2),
        textDecorationLine: 'underline',
        textAlign: 'right',
        fontFamily: 'Poppins-Regular',
        marginRight: responsive.horizontal(1.2),
        color: COLOR.black,
    },
    button: {
        backgroundColor: COLOR.btnBg,
        borderRadius: responsive.horizontal(9),
        paddingVertical: responsive.vertical(2.4),
        paddingHorizontal: responsive.horizontal(4),
        alignItems: 'center',
        marginTop: responsive.vertical(2.5),
    },
    buttonText: {
        fontSize: responsive.fontSize(2.5),
        fontFamily: 'Poppins-Regular',
        color: COLOR.white,
        textTransform: 'uppercase'
    },
    LinkContainer: {
        justifyContent: "center",
        alignItems: "center", flexDirection: "row",
    },
    LinkMessage: {
        fontSize: responsive.fontSize(2.2),
        color: COLOR.black,
        textAlign: "center",
        fontFamily: 'Poppins-Regular',
        marginTop: responsive.vertical(2.5),
        textDecorationLine: "underline",
    },
    iconTextContainer: {
        paddingHorizontal: responsive.horizontal(4),
        paddingVertical: responsive.vertical(2),
        backgroundColor: COLOR.iconContainer,
        borderRadius: responsive.horizontal(5),
        marginHorizontal: responsive.horizontal(20),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: responsive.horizontal(2.5),
        marginTop: responsive.vertical(-1.3)
    },
    iconImage: {
        width: responsive.horizontal(8),
        height: responsive.vertical(4)
    },
    iconText: {
        fontSize: responsive.fontSize(2.2),
        color: COLOR.black,
        textAlign: "center",
        fontFamily: 'Poppins-Regular',
    },
    otpContainer: {
        flexDirection: 'row',
        marginVertical: responsive.vertical(1),
        justifyContent: "space-between",
        alignItems: "center"
    },
    otpInput: {
        width: responsive.horizontal(18),
        height: responsive.vertical(9),
        borderWidth: 1,
        backgroundColor: COLOR.otpInput,
        borderColor: COLOR.otpBorder,
        fontSize: responsive.fontSize(3.5),
        fontFamily: "Poppins-Regular",
        borderRadius: responsive.horizontal(9),
        textAlign: 'center',
    },
    GreetImageBox: {
        alignItems: "center",
    },
    GreetImage: {
        width: responsive.horizontal(25),
        height: responsive.vertical(14),
        tintColor: COLOR.greetImageColor
    },
    greetText: {
        fontSize: responsive.fontSize(3.5),
        color: COLOR.black,
        textAlign: "center",
        fontFamily: 'Poppins-Bold'
    }
})

export default GlobalStyle