interface TextAreaProps {
    label?: string;
    name?: string;
    [key: string]: any;
  }
  
  export default function TextArea({ label, name, ...rest }: TextAreaProps) {
    return (
      <div>
        {label ? (
          <label
            htmlFor={name}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        ) : null}
        <textarea
          id={name}
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
          rows={4}
          {...rest}
        />
      </div>
    );
  }