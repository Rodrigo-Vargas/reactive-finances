import { forwardRef } from "react";
import { Controller, ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { FormFieldContext, useFormField } from "../hooks/use-form-field";
import { Slot } from "@radix-ui/react-slot";


export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => (
  <FormFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext.Provider>
);

export const FormControl = forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-invalid={!!error}
      aria-describedby={error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId}
      {...props}
    />
  );
});

export const FormMessage = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      // className={cn("text-xs font-medium leading-relaxed text-error", className)}
      {...props}
    >
      {body}
    </p>
  );
});

export { FormProvider as Form } from "react-hook-form";
