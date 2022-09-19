import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { Controller, FieldError } from "react-hook-form";

type CheckboxProps = CheckboxPrimitive.CheckboxProps & {
  label: string;
  control: any;
  name: string;
  error?: FieldError;
};

export function Checkbox({
  label,
  id,
  name,
  control,
  error,
  ...props
}: CheckboxProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <div className="flex gap-2 items-center">
            <CheckboxPrimitive.Root
              className="form-checkbox w-6 h-6 flex items-center justify-center rounded bg-zinc-900  border-zinc-900"
              id={id}
              checked={field.value}
              onCheckedChange={field.onChange}
              {...props}
            >
              <CheckboxPrimitive.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
            <label htmlFor={id} className="text-base -tracking-[0.18px]">
              {label}
            </label>
          </div>
          {!!error && (
            <div className="text-base text-red-500">{error.message}</div>
          )}
        </>
      )}
    />
  );
}
