import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-2">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4m-2 2h12"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Welcome to JackalCare</h2>
          <p className="text-sm text-gray-600 mt-1">Your trusted pet healthcare companion</p>
        </div>

        <div className="flex justify-between border-b border-gray-200 mb-6">
          <button className="text-blue-500 font-semibold pb-2 border-b-2 border-blue-500">Login</button>
          <button className="text-gray-500 pb-2">Sign Up</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <div className="relative">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4m-2 2h12"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500">
              Forgot password?
            </a>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign in
          </button>

          <div className="text-center my-4">
            <span className="text-gray-500">Or continue with</span>
          </div>

          <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4 w-full">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.95 5.3 30.42 2 24 2 14.31 2 6.13 8.24 2.33 17.35l6.54 6.45C12.05 18.33 16.66 13 24 13z" />
                <path fill="#4285F4" d="M46.39 24.5c0-1.27-.12-2.37-.34-3.47H24v6.6h12.18C34.71 30.85 32.28 32 29.6 32c-2.19 0-4.05-.36-5.61-1.56l-6.85 6.85C20.51 38.43 24 40 29.6 40 39 40 46.39 33.53 46.39 24.5z" />
                <path fill="#FBBC05" d="M10.79 36.52c-.7-2.05-1.1-4.22-1.1-6.52s.4-4.47 1.1-6.52l-6.52-6.45C5.19 13.68 2 18.97 2 24s3.19 10.32 8.79 16.47l6.52-6.45z" />
                <path fill="#34A853" d="M24 44c5.17 0 9.5-3.56 11.45-7.26l-11.45-6.85c-6.22 0-11.43-4.19-13.33-9.71l-6.54-6.45C6.13 8.24 14.31 2 24 2c10.29 0 18.47 6.03 23.39 14.91l-6.19 6.19c-1.23-3.45-4.72-5.45-8.8-5.45-4.14 0-7.47 2.82-8.61 6.85l-6.85 6.85C18.39 35.69 24 40 24 40z" />
              </g>
            </svg>
            Sign in with Google
          </button>
        </form>

        <p className="text-center text-xs text-gray-600 mt-6">
          By signing in, you agree to our <a href="#" className="text-blue-500">Terms</a> and <a href="#" className="text-blue-500">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;