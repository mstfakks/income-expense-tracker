import { Controller } from "react-hook-form";

interface DateInputProps {
  containerClass?: string;
  placeholder: string;
  label: string;
  name: string;
  errors?: any;
  register?: any;
  control?:any
}

const DateInput = ({
  containerClass,
  placeholder,
  label,
  name,
  errors,
  control
}: DateInputProps) => {
  return (
    <div className={`${containerClass}`}>
      <label
        className={`
            block 
            mb-2 
            text-sm 
            font-medium 
            text-gray-800
            ${errors[name] && "text-red-500"}
        `}
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={""}        
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type="date"            
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
                    max-h-9
                    overflow-hidden
                    ${
                      errors[name] &&
                      "border-red-500 border-2 focus:border-red-500 placeholder:text-red-500"
                    }                             
                `}
            placeholder={placeholder}
          />
        )}
      />

      {errors[name] && (
        <p className="mt-1 block text-xs font-medium text-red-600 pl-1">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default DateInput;
