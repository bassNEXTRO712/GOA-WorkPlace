import { useLocation, useNavigate } from 'react-router-dom'

const CarDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const car = location.state

  if (!car) {
    return (
      <div className="text-center mt-10 text-xl">
        ❌ No car selected.<br />
        <button onClick={() => navigate('/')} className="text-blue-500 underline mt-4">
          Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="text-center mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
      <img src={car.src} alt={car.name} className="mx-auto max-w-[600px]" />
      <p className="mt-4 text-lg">{car.desc}</p>
    </div>
  )
}

export default CarDetail;
