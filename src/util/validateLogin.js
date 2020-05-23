export default function validate (values) {
    let { name, email, password, cPassword } = values
    let errors = {}
    if (!email) {
        errors.email = 'Email is required'
    } else {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(email.toLowerCase());
        if (!valid) errors.email = 'Email is invalid';
    }
    if (!name) {
        errors.name = 'Name is required'
    } else if (name.length < 3) {
        errors.name = 'Minimum 4 letter'
    }
    if (!password) {
        errors.password = 'Password is required'
    } else if (password.length < 3) {
        errors.password = 'Minimum 3 letter'
    }
    if (!cPassword) {
        errors.isPasswordSame = 'Confirm password is required'
    } else if (cPassword.length < 3) {
        errors.isPasswordSame = 'Minimum 3 letter'
    } else if (cPassword !== password) {
        errors.isPasswordSame = 'password and confirmed password does not match'
    }
    return errors
}