// Header.jsx
import { Link } from "react-router-dom";
import mainLogo from './pictures/logo.png';

const Header = () => {
  return (
    <header className="w-full h-[85px] bg-black flex justify-around">
        
      <div className="flex -mt-[54px]">
        <img src={mainLogo} alt="Logo" className="w-[200px] h-[200px]" />
      </div>

      <Link to="/" className="text-[25px] mt-[20px] text-white">Home</Link>
      <Link to="/carlist" className="text-[25px] mt-[20px] text-white">Car List</Link>
      <Link to="/rules" className="text-[25px] mt-[20px] text-white">Our Rules</Link>
      <Link to="/bookedcars" className="text-[25px] mt-[20px] text-white">Booked Cars</Link>
    </header>
  );
};

export default Header;
