import { firestore } from '../../config/fbConfig'


export const createProject = (project) => {
	let { type, dispatch, payload } = project
	const data = {
		id: Date.now(),
		name: 'Sarjis',
		email: '',
		title: payload.name
	}
  //dispatch({ type, data })
  
//	return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    //const firestore = getFirestore();
    firestore.collection('projects').add({
      title: payload.name,
      body: payload.name,
      firstName: 'Net',
      lastName: 'Ninja'
    }).then((res) => {
      console.log(res)
      dispatch({ type, data })
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
 // }
}