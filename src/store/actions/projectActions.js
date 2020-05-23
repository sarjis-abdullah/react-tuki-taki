export default createProject = (project) => {
    return (dispatch, getState) => {
        // database call
        dispatch({ type: 'createProject', payload: project })
    }
}