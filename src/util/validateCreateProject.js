export default function validate (values) {
    let { name, email, password, cPassword } = values
    let errors = {}
    if (!name) {
        errors.name = 'Name is required'
    } else if (name.length < 3) {
        errors.name = 'Minimum 4 letter'
    }
    return errors
}