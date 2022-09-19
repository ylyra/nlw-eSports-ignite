import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: FieldError;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, id, error, ...props },
  ref
) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="font-semibold text-base -tracking-[0.18px]"
        >
          {label}
        </label>
      )}
      <input
        className="form-input bg-zinc-900 border-zinc-900 rounded px-4 py-3 text-sm  placeholder:text-zinc-500"
        id={id}
        ref={ref}
        {...props}
      />
      {!!error && <div className="text-base text-red-500">{error.message}</div>}
    </div>
  );
};

export const Input = forwardRef(InputBase);
