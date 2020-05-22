import React from 'react'

 const useForm = (submit) => {
    const [form, setForm] = React.useState({ name: '', email: '' });
    const handleChanges = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = (e)=> {
        e.preventDefault()
        submit()
    }
    return {
        handleSubmit,
        handleChanges,
        form
    }
}
export default useForm
