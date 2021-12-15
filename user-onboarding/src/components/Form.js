import React from 'react';

export default function Form(props) {

	const { values, change, submit, disabled, errors } = props;

	const onChange = event => {
		console.log(event);
		const { name, value, checked, type } = event.target;
	}

	const onSubmit = event => {
		console.log(event);
		event.preventDefault();
		submit();
	}

	return (
		<div className='form-wrapper'>
			<form className='form' onSubmit={onSubmit}>
				<label>Name
					<input
						type='text'
						name='name'
						value={values.name}
						onChange={onChange}
					/>
				</label>
				<label>Email
					<input
						type='email'
						name='email'
						value={values.email}
						onChange={onChange}
					/>
				</label>
				<label>Password
					<input
						type='password'
						name='password'
						value={values.password}
						onChange={onChange}
					/>
				</label>
				<label className='tos'>
					<input
						type='checkbox'
						name='tos'
						checked={values.tos}
						onChange={onChange}
					/>
					Check to accept our Terms of Service
				</label>
				<button>Submit</button>
			</form>
		</div>
	)
}