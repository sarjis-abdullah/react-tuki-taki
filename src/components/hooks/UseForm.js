import React from 'react'

const UseForm = (submit, formData, validate) => {

	const [form, setForm] = React.useState(formData);
	const [errors, setErrors] = React.useState({});
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const handleChanges = (e) => {
		if (false && e.target.name === 'name') {
			const regex = /\+?(88)?0?1[3456789][0-9]{8}\b/;
			const found = e.target.value.match(regex);
			if (found) {
				errors.name = ''
			}else{
				errors.name = 'hi'
			}
		}
		const { name, value } = e.target
		setForm({
			...form,
			[name]: value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		setErrors(validate(form))
		setIsSubmitting(true)
	}
	React.useEffect(() => {
		if (!Object.keys(errors).length && isSubmitting) {
			submit()
		}
	}, [errors])

	return {
		handleSubmit,
		handleChanges,
		form,
		errors
	}
}
export default UseForm
