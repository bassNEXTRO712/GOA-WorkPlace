import { useState } from "react";

const Loggin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track submit attempt

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // User tried to submit

    if (!email.includes('@gmail.com')) {
      setEmailError("Please enter a valid Gmail address");
      return;
    }
    setEmailError('');
    console.log('Submitted Email:', email);
    console.log('Submitted Password:', password);

    // Proceed with further submit logic here
  }

  const passwordLook = (e) => {
    setPassword(e.target.value);
    console.clear();
    console.log('password:', e.target.value);
  }

  const checkEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Only validate email if user already tried submitting
    if (submitted) {
      if (!value.includes('@gmail.com')) {
        setEmailError("Please enter a valid Gmail address");
      } else {
        setEmailError('');
      }
    }

    console.clear();
    console.log('Email:', value);
  }

  return (
    <div className="bg-gray-100 w-full h-[700px] flex flex-col">
      <div className="ml-[400px] mt-[170px]">
        <h1 className="text-blue-700 text-[60px]">faceebok</h1>
        <p className="text-[25px]">
          Connect with friends and the world <br /> around you on Facebook.
        </p>
      </div>

      <div className="w-[396px] h-[350px] ml-[1050px] -mt-[200px] flex">
        <form
          className="w-full max-w-sm mx-auto bg-white p-6 rounded shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
            value={email}
            onChange={checkEmail}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
            value={password}
            onChange={passwordLook}
          />

          {emailError && (
            <p className="text-red-600 text-sm mb-2">{emailError}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded w-full transition"
          >
            Log In
          </button>

          <p className="ml-[100px] mt-[3px]">Forgot Password?</p>
          <br />
          <hr />
          <br />
          <button
            type="button"
            className="w-[196px] h-[48px] text-white bg-green-500 rounded-[5px] ml-[70px] hover:bg-green-600 transition"
          >
            Create new account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loggin;
