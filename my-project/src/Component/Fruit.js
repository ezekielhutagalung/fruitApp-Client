import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getbyId } from '../Store/Actions'

function Fruit({ FruitBro, deleteFruitss, editFruitss }) {
  console.log(FruitBro, ' ini fruit bro')

  const Dispatch = useDispatch()

  // useEffect(() => {
  //   Dispatch(getbyId(`http://localhost:3001/${FruitBro.id}`))
  // }, [FruitBro.id])

  return (
    <>
      <tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm">
          <p class="text-black-900 ">{FruitBro.id}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
          <h1 class="text-gray-900 whitespace-no-wrap"> {FruitBro.name}</h1>
        </td>

        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
          <p class="text-black-900 ">{FruitBro.HargaTotal}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
          <h1 class="text-gray-900 whitespace-no-wrap">
            {' '}
            {FruitBro.BeratTotal} Kg
          </h1>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
          <h1 class="text-gray-900 whitespace-no-wrap">
            {' '}
            {FruitBro.HargaPerKg}
          </h1>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => editFruitss(FruitBro.id)}
            // onClick={() => history.push(`/editContacts/${FruitBro.id}`)}
            class="bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Edit
          </button>
          <button
            class="ml-3 bg-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => deleteFruitss(FruitBro.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  )
}

export default Fruit
