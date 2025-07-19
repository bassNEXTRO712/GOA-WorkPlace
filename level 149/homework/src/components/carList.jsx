import { useState } from 'react'

const CarList = ({ setCars,carLists }) => {
  const [search, setSearch] = useState('')



  const filteredCars = carLists.filter(car =>
    car.alt.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
    <main className='bg0blac'></main>
      {/* Search Input */}
      <div className="flex">
        <form className="w-full px-4 mt-3" onSubmit={e => e.preventDefault()}>
          <input
            id="search"
            type="text"
            name="search"
            placeholder="🔍 Search Your Favorite Car Here..."
            className="w-full h-[50px] rounded border text-xl px-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      {/* Car List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-[50px]">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => setCars(prev => [...prev,car])}
              title={`Select ${car.alt}`}
            >
              <img
                src={car.src}
                alt={car.alt}
                className="w-full h-auto max-h-[500px] object-cover transition duration-300 hover:brightness-90"
              />
              <div className="p-2 text-center text-lg font-semibold capitalize text-gray-800 bg-white">
                {car.alt}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-xl">
            🚗 Car not found!
          </div>
        )}
      </div>
    </>
  )
}

export default CarList;
