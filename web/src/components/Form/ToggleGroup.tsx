import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import clsx from "clsx";
import { HTMLAttributes, useState } from "react";
import { Controller, FieldError, Merge } from "react-hook-form";

type ToggleGroupProps = ToggleGroupPrimitive.ToggleGroupMultipleProps & {
  control: any;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
  error?: Merge<FieldError, (FieldError | undefined)[]>;
};

export function ToggleGroup({
  options,
  type,
  control,
  name,
  error,
  ...props
}: ToggleGroupProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <ToggleGroupPrimitive.Root
            type={type}
            value={value}
            onValueChange={onChange}
            {...props}
          >
            {options.map((option) => (
              <ToggleGroupPrimitive.Item
                className={clsx(
                  "w-10 h-10 rounded flex items-center justify-center ",
                  {
                    "bg-violet-400": value.includes(option.value),
                    "bg-zinc-900": !value.includes(option.value),
                  }
                )}
                type="button"
                title={option.label}
                value={option.value}
                key={option.label}
              >
                {option.label.substring(0, 1)}
              </ToggleGroupPrimitive.Item>
            ))}
          </ToggleGroupPrimitive.Root>
          {!!error && (
            <div className="text-base text-red-500">{error.message}</div>
          )}
        </>
      )}
    />
  );
}
