export interface Option {
  label: string;
  value: number | string;
}

interface SelectInputProps {
  name: string;
  label: string;
  containerClass?: string;
  options: Option[];
  errors?: any;
  register?: any;
}

const SelectInput = ({
  label,
  options,
  containerClass,
  name,
  errors,
  register,
}: SelectInputProps) => {
  return (
    <div className={containerClass}>
      <label
        className={`block mb-2 text-sm font-medium text-gray-800 ${
          errors[name] && "text-red-500"
        }`}
      >
        {label}
      </label>
      <select
        {...register(name)}
        id={name}
        name={name}        
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
            ${errors[name] && "border-red-500 border-2 focus:border-red-500"}
        `}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>{item.label}</option>
        ))}
      </select>
      {errors[name] && (
        <p className="mt-1 block text-xs font-medium text-red-600 pl-1">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default SelectInput;
