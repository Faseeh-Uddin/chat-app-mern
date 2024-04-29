import React from "react";

const Button = ({
  type = "button",
  label = "",
  className = "",
  isDisabled = false,
}) => {
  return (
    <button
      type={type}
      className={`py-2.5 px-5 text-sm font-medium text-light focus:outline-none bg-dark-gray rounded-lg border border-dark-gray hover:bg-dark hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${className}`}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default Button;
