import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Fruit from './Component/Fruit'
import Swal from 'sweetalert2'
import { FruitFetch, getbyId } from './Store/Actions'
import { deleteFruits, UpdateFruits } from './Store/Actions'
import CreateFruitsz from './Component/CreateFruits'
import EditFruits from './Component/EditFruit'

function App() {
  const dispatch = useDispatch()
  const FruitBro = useSelector((state) => state.Fruits)
  console.log(FruitBro, ' ini fruit')

  const [editForm, setEditForm] = useState(false)

  function deleteFruitss(id) {
    console.log(id, ' ini id di App.js')
    dispatch(deleteFruits(id))
  }

  function editFruitss(id) {
    console.log(id, ' ini id di App.js')
    setEditForm(true)
    dispatch(getbyId(id))
  }

  useEffect(() => {
    dispatch(FruitFetch())
  }, [dispatch])
  return (
    <>
      <h1 className="font-mono font-extrabold text-center text-5xl  ">
        Daftar Harga Buah
      </h1>
      <div className="container flex justify-center ml-16">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal ">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-green-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="mr-100">No</div>
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-green-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Nama
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-green-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Harga Total
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-green-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Berat Total
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-green-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Harga Per KG
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-green-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {FruitBro.map((FruitBro) => (
                  <Fruit
                    key={FruitBro.id}
                    FruitBro={FruitBro}
                    deleteFruitss={(id) => deleteFruitss(id)}
                    editFruitss={(id) => editFruitss(id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {editForm ? <EditFruits /> : <CreateFruitsz />}
    </>
  )
}

export default App
