import React from "react";

const FormField = ({
  labelName,
  name,
  type,
  value,
  handleChange,
  placeholder,
  isSurpriseMe,
  handleSurprise,
}) => {
  console.log(
    labelName,
    value,
    placeholder,
    type,
    handleChange,
    name,
    isSurpriseMe,
    handleSurprise,
    "dfwfbwuiweifbweffwejfefnjofn"
  );
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <label htmlFor={name} className="font-semibold text-[#0F0F0F]">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurprise}
            className="font-inter font-medium text-xs bg-[#31304D] py-2 px-4 rounded-md text-[#B6BBC4] hover:bg-[#B6BBC4] hover:text-[#31304D]"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="bg-[#e0e1e1] p-2 text-[12px] w-full border-current"
      />
    </div>
  );
};

export default FormField;
