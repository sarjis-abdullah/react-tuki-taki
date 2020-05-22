export default function validate (values) {
    let { name, email } = values
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
    return errors
}