export const createProject = (project) => {
	let { type, dispatch, payload } = project
	const data = {
		id: Date.now(),
		name: 'Sarjis',
		email: '',
		title: payload.name
	}
	dispatch({ type, data })
}