import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "phosphor-react";
import { Controller, FieldError } from "react-hook-form";

type SelectProps = SelectPrimitive.SelectProps & {
  label?: string;
  placeholder?: string;
  options: {
    label: string;
    value: string;
  }[];
  name: string;
  control: any;
  error?: FieldError;
};

export function Select({
  label,
  placeholder,
  options,
  name,
  control,
  error,
}: SelectProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <SelectPrimitive.Root
          value={field.value}
          onValueChange={field.onChange}
        >
          {label && (
            <label
              htmlFor="game"
              className="font-semibold text-base -tracking-[0.18px]"
            >
              {label}
            </label>
          )}
          <SelectPrimitive.Trigger className="form-input bg-zinc-900 border-zinc-900 rounded px-4 py-3 text-sm flex items-center justify-between">
            <SelectPrimitive.Value>
              {field.value ? (
                options.find((o) => o.value === field.value)?.label
              ) : (
                <span className="text-zinc-500">{placeholder}</span>
              )}
            </SelectPrimitive.Value>
            <SelectPrimitive.Icon />
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal className="top-2">
            <SelectPrimitive.Content>
              <SelectPrimitive.Viewport id="game">
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    className="form-input w-full bg-zinc-800 border-zinc-800 rounded px-4 py-3 text-sm  text-white cursor-pointer flex items-center justify-between gap-2 hover:bg-zinc-900"
                    value={option.value}
                  >
                    <SelectPrimitive.ItemText>
                      {option.label}
                    </SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator>
                      <Check className="w-4 h-4 text-emerald-400" />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
          {!!error && (
            <div className="text-base text-red-500">{error.message}</div>
          )}
        </SelectPrimitive.Root>
      )}
    />
  );
}
