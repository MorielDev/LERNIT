import { InputProps } from "@/app/data/list";

export default function Input({ label, inputTitle, type }: InputProps) {
  return (
    <div>
      {type === "drop" ? (
        <>
          <label
            htmlFor={type}
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {label}
          </label>
          <select
            name={inputTitle}
            id={type}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          >
            <option value="cd">Coding</option>
            <option value="mth">Math</option>
            <option value="des">Design</option>
          </select>
        </>
      ) : type === "textarea" ? (
        <>
          <label
            htmlFor={type}
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {label}
          </label>
          <textarea
            name={inputTitle}
            id={type}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder={inputTitle}
            required
          />
        </>
      ) : (
        <>
          <label
            htmlFor={type}
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {label}
          </label>
          <input
            type={type}
            name={inputTitle}
            id={type}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={inputTitle}
            required
          />
        </>
      )}
    </div>
  );
}
