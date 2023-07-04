import * as yup from 'yup'
const SignupValues = { email: '', name: "", password: '', phone: '' };
const SigninValues = { email: '', password: '' };
const otpValues = { firstOtp: "", secondOtp: "", thirdOtp: "", fourthOtp: "" };
const SigninSchema = yup.object({
    email: yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: yup.string().min(8, 'Password should contain at least 8 characters').required('Password is required'),
});
const otpSchema = yup.object({
    firstOtp: yup.string()
        .required('first otp is empty'),
    secondOtp: yup.string()
        .required('second otp is empty'),
    thirdOtp: yup.string()
        .required('third otp is empty'),
    fourthOtp: yup.string()
        .required('fourth otp is empty'),
});
const SignupSchema = yup.object({
    email: yup.string().required('Email is required'),
    password: yup.string().min(8, 'Password should contain at least 8 characters').required('Password is required'),
    name: yup.string().required("Name is required").min(2, 'Name is invalid'),
    phone: yup.string().required("Phone number is required").length(11)
});
export { SigninValues, SignupValues, SigninSchema, SignupSchema, otpValues, otpSchema }