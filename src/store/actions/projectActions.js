//import { firestore } from '../../config/fbConfig'


export const createProject = (project) => {
  let { type, payload } = project
  const data = {
    id: Date.now(),
    name: 'Sarjis',
    email: '',
    title: payload.name
  }

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').add({
      title: payload.name,
      body: payload.name,
      firstName: 'Net',
      lastName: 'Ninja'
    }).then((res) => {
      dispatch({ type, data })
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
}