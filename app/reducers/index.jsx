import { combineReducers } from 'redux'
import axios from 'axios'

console.log("beginning of reducers")

const initialState = {
//   campuses: ["string", "2"]   // later add objects
}

// // action
// export const DELETE_CAMPUS = 'DELETE_CAMPUS'

// // action creator 
// export const deleteCampus = (id) => ({
//   type: DELETE_CAMPUS,
//   id: id 
// })

//thunk action creator
// export const removeCampus = (id) => (
//   dispatch => {
//     dispatch(deleteCampus(id))
//     axios.delete(`/api/campus/${id}`)
//     .catch(error => console.error("not deleting!"))
//   }
// )

// const rootReducer = function(state = initialState, action) {
//   const newState = Object.assign({}, state) // new immutable object
//   console.log("its called!!")
//   switch(action.type) {
//     case DELETE_CAMPUS:
//       newState.campuses = newState.campuses.filter((campus) => (
//         campus.id != action.id  // return only the campus with specific id
//       ))
//     default: return state

//   }
//   return newState
// };

const rootReducer = function(state = initialState, action) {
  console.log("rootReducer is called")
  switch(action.type) {
    default: return state
  }
};

export default rootReducer
