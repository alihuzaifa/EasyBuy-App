import * as yup from 'yup'
const SignupValues = { email: '', name: "", password: '',phone:'' };
const SigninValues = { email: '', password: '' };
const SigninSchema = yup.object({
    email: yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: yup.string().min(8, 'Password should contain at least 8 characters').required('Password is required'),
});
const SignupSchema = yup.object({
    email: yup.string().required('Email is required'),
    password: yup.string().min(8, 'Password should contain at least 8 characters').required('Password is required'),
    name: yup.string().required("Name is required").min(2, 'Name is invalid'),
    phone: yup.string().required("Phone number is required").length(11)
});
export { SigninValues, SignupValues, SigninSchema, SignupSchema }