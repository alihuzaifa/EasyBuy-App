import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const responsive = {
    horizontal: (width) => responsiveWidth(width),
    vertical: (height) => responsiveHeight(height), fontSize: (font) => responsiveFontSize(font)
}
export default responsive