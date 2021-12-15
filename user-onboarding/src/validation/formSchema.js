import * as yup from 'yup';

const formSchema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.required('A name is required'),
	email: yup
		.string()
		.trim()
		.email('Must be a valid email address')
		.required('A valid email address is required'),
	password: yup
		.string()
		.trim()
		.min(8, 'Passwords must be at least 8 characters long')
		.required('A password is required'),
	tos: yup
		.boolean()
		.required('You must accept our Terms of Service')
})

export default formSchema;