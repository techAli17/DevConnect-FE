import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Robust email validation :contentReference[oaicite:1]{index=1}
  const strongPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    // Password validation
    if (!strongPassRegex.test(password)) {
      setPassError(
        "Password must be ≥8 chars, include uppercase, lowercase, number & special character"
      );
    } else {
      setPassError("");
    }

    if (!emailError && !passError) {
      // Form is valid — proceed with submit
      console.log("Submitting:", { email, password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="bg-base-100 shadow-lg rounded-md w-full max-w-md p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded focus:ring focus:ring-primary-focus"
            />
            {emailError && <p className="mt-1 text-sm text-error">{emailError}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border rounded focus:ring focus:ring-primary-focus"
            />
            {passError && <p className="mt-1 text-sm text-error">{passError}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primary-content text-primary rounded font-medium hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
