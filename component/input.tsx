import { InputHTMLAttributes } from "react";

interface inputProps {
    name: string;
    errors?: string[];
}

export default function Input({ name, errors = [], ...rest }: inputProps & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <input
                className="bg-white outline-0 border border-gray-500/50 rounded-lg px-3 py-1 text-sm focus:border-pointCoral focus:shadow-sm focus:shadow-pointCoral/80"
                name={name}
                {...rest}
            />
            {errors.map((error, index) => (
                <span
                    key={index}
                    className="text-red-700 font-medium text-sm"
                >
                    {error}
                </span>
            ))}
        </div>
    );
}
