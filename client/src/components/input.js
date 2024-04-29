import React from "react";

const Input = ({
    label = '',
    name = '',
    type = 'text',
    className = '',
    isRequired = true,
    placeholder = '',
    value = '',
    onChange = () => {}
}) => {
  return (
    <div className="w-3/4">
      <label
        for={name}
        class={`block mb-2 text-sm font-medium text-light dark:text-white`}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        class={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
        placeholder={placeholder}
        required = {isRequired}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
