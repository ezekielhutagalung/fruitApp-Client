import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  Fruits: [],
  FruitById: {},
  loading: true,
}

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'FRUITS/FETCHFRUITS':
      return { ...state, Fruits: payload }
    case 'FRUITS/ADDFRUITS':
      return { ...state, Fruits: [...state.Fruits, payload] }
    case 'FRUITS/GETBYID':
      return { ...state, FruitById: payload, loading: false }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
