import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-gray text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-light-gray">404</h1>
      <p className="text-lg text-light-gray">Sorry, this page is not available. 😌</p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-dark-blue text-light-gray rounded-lg shadow transform transition-transform duration-300 hover:scale-110"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
