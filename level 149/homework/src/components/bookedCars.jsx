const BookedCars = ({ booked,onDelete }) => {

  if (booked.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-600 text-xl">
        No cars selected yet. Please select a cars from the list.
      </div>




    )
     
  }

  return (

    <div className="grid grid-cols-4">
      {
        booked.map((currvelue, index) =>
          <div key={index} className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4 capitalize">{currvelue.alt}</h2>
            <img
              src={currvelue.src}
              alt={currvelue.alt}
              className="w-full h-auto max-h-[400px] object-cover rounded"
            />
            <p className="mt-4 text-center text-gray-700">
              You have booked this car. Congratulations!
            </p>
            <button  className="w-[100px] h-[50px] bg-gray-300 text-gray-800 rounded-md 
             hover:bg-gray-400 hover:scale-105 transition duration-200 ease-in-out 
             shadow-sm mx-auto block" onClick={() => onDelete(index)}>Delete</button>
          </div>
        )
      }
    </div>

  )
}

export default BookedCars;
