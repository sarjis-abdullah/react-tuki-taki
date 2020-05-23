import React from 'react'

const UseForm = (submit, formData, validate) => {
	
	const [form, setForm] = React.useState(formData);
	const [errors, setErrors] = React.useState({});
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const handleChanges = (e) => {
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
