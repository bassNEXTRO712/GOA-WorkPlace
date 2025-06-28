import { useState } from "react";

const FormChange = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email Here..."
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Your Password Here..."
        value={formData.password}
        onChange={handleChange}
      />

       <p>Check Email: {formData.email}</p>
        <p>Check Passoword Live: {formData.password}</p>
    </div>
  );
};

export default FormChange;
