export function fetchFruits(payload) {
  return { type: 'FRUITS/FETCHFRUITS', payload }
}

export function addFruits(payload) {
  return { type: 'FRUITS/ADDFRUITS', payload }
}

export function getFruitsById(payload) {
  return { type: 'FRUITS/GETBYID', payload }
}

export function getbyId(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/${id}`)
      const data = await response.json()
      console.log(data, 'ini di data by id')
      dispatch(getFruitsById(data))
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function UpdateFruits(payload, id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      dispatch(fetchFruits(data))
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function FruitFetch() {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/')
      const data = await response.json()

      dispatch(fetchFruits(data))
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function CreateFruits(payload) {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      dispatch(addFruits(data))
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function deleteFruits(id) {
  console.log(id, ' ini id')
  return async (dispatch, getState) => {
    try {
      await fetch(`http://localhost:3001/${id}`, {
        method: 'DELETE',
      })
      const Fruits = getState().Fruits

      const filteredFruits = Fruits.filter((Fruits) => Fruits.id !== id)

      dispatch(fetchFruits(filteredFruits))
    } catch (err) {
      console.log(err)
    }
  }
}
