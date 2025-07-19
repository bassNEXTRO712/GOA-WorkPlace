import LeftPic from './videos/mercedes.mp4';

const Rules = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
   
      <div className="w-full h-[800px]">
        <video
          src={LeftPic}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>


      <div className="bg-white p-8 ">
        <h2 className="text-2xl font-bold mb-4">Rental Rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
          <li>Driver must be at least 21 years old.</li>
          <li>A valid driver’s license is required at the time of rental.</li>
          <li>Only listed drivers are allowed to operate the vehicle.</li>
          <li>Rental payment must be made in full before the car is released.</li>
          <li>A refundable security deposit is required for all rentals.</li>
          <li>No smoking inside the vehicle.</li>
          <li>Pets are not allowed unless approved in advance.</li>
          <li>Fuel must be returned at the same level it was given.</li>
          <li>Late returns are subject to additional fees.</li>
          <li>Renter is responsible for any traffic violations or fines.</li>
          <li>Car must not be driven outside permitted regions/countries.</li>
          <li>Modifications or alterations to the vehicle are prohibited.</li>
          <li>Do not overload the vehicle beyond its capacity.</li>
          <li>Use of the car for racing or illegal activities is strictly forbidden.</li>
          <li>In case of accident, notify the rental company immediately.</li>
          <li>Renters must return the car in clean condition.</li>
          <li>Any damage to the car will be deducted from the deposit.</li>
          <li>GPS tracking may be enabled for safety and security.</li>
          <li>No off-road driving unless vehicle is designated for such use.</li>
          <li>Do not leave valuables in the car; the company is not responsible.</li>
          <li>Rental period extensions must be requested in advance.</li>
          <li>Vehicles are not to be used for ride-sharing or delivery services.</li>
          <li>Return the car to the same location unless otherwise agreed.</li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
