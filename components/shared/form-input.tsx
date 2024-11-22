import { DeepMap, FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface FormInputProps {
    name: string;
    containerClass?: string;
    errors?: any;
    register?: any;
    label: string;
    placeholder: string
}

const FormInput = ({
    name,
    containerClass,
    errors,
    register,
    label,
    placeholder
}: FormInputProps) => {
  return (
    <div className={containerClass}>
      <label
        className={`mb-2 block text-sm font-medium text-gray-800 ${
          errors[name] && "text-red-500"
        }`}
      >
        {label}
      </label>
      <input
        {...register(name)}
        id={name}
        name={name}
        autoComplete="off"
        type="text"
        className={`
                                bg-gray-100 
                                border 
                                border-gray-300 
                                text-gray-900 
                                text-sm 
                                rounded-lg 
                                focus:outline-none 
                                focus:border-slate-700 
                                block 
                                w-full 
                                p-2
                                ${
                                  errors[name] &&
                                  "border-red-500 border-2 focus:border-red-500 placeholder:text-red-500"
                                }
                            `}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="mt-1 block text-xs font-medium text-red-600 pl-1">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
