import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { UpdateFruits } from '../Store/Actions'

export default function EditFruits() {
  const FruitId = useSelector((state) => state.FruitById)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  const [fruitName, setfruitName] = useState(FruitId.name)
  const [hargaTotal, setHargaTotal] = useState(FruitId.HargaTotal)
  const [beratTotal, setBeratTotal] = useState(FruitId.BeratTotal)

  console.log(fruitName, 'ini di edit form')
  // const [FruiEdit, setFruitEdit] = useState({
  //   name: '',
  //   HargaTotal: '',
  //   BeratTotal: '',
  // })

  function handleNameChange(e) {
    const { value } = e.target
    setfruitName(value)
  }

  function handleHargaChange(e) {
    const { value } = e.target
    setHargaTotal(value)
  }

  function handleBeratChange(e) {
    const { value } = e.target
    setBeratTotal(value)
  }

  function editHandle() {
    dispatch(UpdateFruits({ fruitName, hargaTotal, beratTotal }))
  }
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <h1 className="font-mono font-extrabold text-center text-5xl  ">
            Form Daftar Harga Buah
          </h1>
          <section class="py-10  bg-opacity-50 h-screen">
            <div class="mx-auto container max-w-xl md:w-3/4 shadow-md">
              <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
                <div class="max-w-sm mx-auto md:w-full md:mx-0"></div>
              </div>
              <form onSubmit={editHandle} class="bg-white space-y-6">
                <hr />
                <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                  <label
                    for="name"
                    class="md:w-1/3 mx-auto max-w-sm font-extrabold"
                  >
                    Nama :
                  </label>
                  <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                    <div className="">
                      <div class="w-4/5 inline-flex border shadow rounded-lg ml-16">
                        <input
                          id="name"
                          value={fruitName}
                          type="text"
                          name="name"
                          required
                          onChange={(e) => handleNameChange(e)}
                          class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                  <label class="md:w-1/3 mx-auto max-w-sm font-extrabold">
                    Harga Total:
                  </label>
                  <div class="md:w-2/3 mx-auto max-w-sm space-y-5 ">
                    <div class="w-4/5 inline-flex border shadow rounded-lg ml-16">
                      <input
                        id="HargaTotal"
                        name="HargaTotal"
                        type="number"
                        value={hargaTotal}
                        required
                        onChange={(e) => handleHargaChange(e)}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="20000"
                      />
                    </div>
                  </div>
                </div>
                <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                  <label class="md:w-1/3 mx-auto max-w-sm font-extrabold">
                    Berat Total(dalam gram) :
                  </label>
                  <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                    <div>
                      <div class="w-4/5 inline-flex border shadow rounded-lg ml-16">
                        <input
                          required
                          value={beratTotal}
                          onChange={(e) => handleBeratChange(e)}
                          type="number"
                          id="BeratTotal"
                          name="BeratTotal"
                          class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          placeholder="ex:2000 means 2 kg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 justify-end">
                  <div class="md:w-3/12 text-left md:pl-6">
                    <button
                      type="submit"
                      class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                    >
                      Submit
                    </button>
                  </div>
                  <div class="md:w-3/12 text-center md:pl-6">
                    <button class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right">
                      Update
                    </button>
                  </div>
                </div>

                <hr />

                <hr />
              </form>
            </div>
          </section>
        </>
      )}
    </>
  )
}
