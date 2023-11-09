import * as yup from "yup";




 const  schema = yup.object().shape({
    name:yup.string().min(4).max(20).required("required"),
    lastName: yup.string().min(4).max(20).required("required"),
    storeName: yup.string().min(4).max(20).required("required"),
    phoneNumber:yup.string().required("required").matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"please enter valid phone number"),
    Email:yup.string().email("please enter a valid email").required("required"),
    State:yup.string().required("required"),
    Address:yup.string().required("required"),
    username:yup.string().required("required"),
    password:yup.string().required().matches( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    cpassword:yup.string().required().oneOf([yup.ref("password"),null],"password must match")
   

})
export default  schema