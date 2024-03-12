import toast from "react-hot-toast";


export async function validateUsername(values){
    const error = usernameVerfiy({}, values);

    return error
};

export async function validatePassword(values){
    const error = passwordVerfiy({}, values);

    return error
}

function usernameVerfiy(error = {}, values) {
    if(!values.username){
        error.username = toast.error('Username Required...!')
    }else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!')
    }
    return error
};
function passwordVerfiy(error = {}, values) {
    if(!values.password){
        error.password = toast.error('Password Required...!')
    }else if(values.password.includes(" ")){
        error.password = toast.error('Invalid Password...!')
    }else if(values.password.length < 8 ){
        error.password = toast.error('Password must be atleast 8 characters...!')
    }
    return error
}

export async function resetPasswordValidation (values){

    const error = passwordVerfiy({}, values);
    if(values.password !== values.confirmPwd){
        error.exist = toast.error('Password not match...!')
    }
    return error;
}

export async function registerValidation (values){
    const error = usernameVerfiy({}, values);
    passwordVerfiy(error, values);
    emailVerfiy(error, values);
    return error;
};

function emailVerfiy(error = {}, values) {
    if(!values.email){
        error.email = toast.error('Email Required...!')
    }else if(values.email.includes(" ")){
        error.email = toast.error('Invalid Username...!')
    }
    return error
};
