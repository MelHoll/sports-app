import React from 'react';
import Button from 'components/button';
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form';
import TextInput from 'form/text-input';

export interface FormProps<T extends FieldValues> extends React.HTMLAttributes<HTMLDivElement> {
  onSubmitForm: SubmitHandler<T>;
  defaultvalues: T;
  fields: FieldProps[];
  readOnly?: boolean;
}

export enum FieldType {
  Text
}

export interface FieldProps {
  type: FieldType
  label: string,
  required: boolean, 
  name: string
}

export const Form = <T extends FieldValues,> ({
  onSubmitForm,
  fields,
  children,
  ...formProps
}: FormProps<T>) => {
  const { handleSubmit, control } = useForm<T>({
    defaultValues: formProps.defaultvalues as DefaultValues<T>,
    mode: "onChange",
  })

  const fieldMap = {
    [FieldType.Text]: TextInput,
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div {...formProps}>
        <div>
          {fields.map((field) => {
            const FieldComponent = fieldMap[field.type] || fieldMap[FieldType.Text];
            return <FieldComponent 
              label={field.label} 
              required={field.required} 
              control={control} 
              name={field.name as Path<T>} rules={{ required: field.required }}
            />
          })}
        </div>
        {children}
        <div>
          <Button />
        </div>
      </div>
    </form>
  );
};

Form.displayName = 'Form';

export default Form;
