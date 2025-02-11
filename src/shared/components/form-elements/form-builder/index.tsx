import React from 'react';
import Button from 'components/button';
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form';
import TextInput from 'form/text-input';
import { strings } from 'src/shared/localizations/strings';
import SelectInput from '../select';

export interface FormProps<T extends FieldValues> extends React.HTMLAttributes<HTMLDivElement> {
  onSubmitForm: SubmitHandler<T>;
  defaultValues: T;
  fields: FieldProps[];
  submitBtnLabel?: string;
  readOnly?: boolean;
}

export enum FieldType {
  Text, 
  Select
}

export interface FieldProps {
  type: FieldType
  label: string,
  required: boolean, 
  name: string
}

export const Form = <T extends FieldValues,> ({
  onSubmitForm,
  submitBtnLabel = strings.common.submit,
  fields,
  defaultValues,
  children,
  ...props
}: FormProps<T>) => {
  const { handleSubmit, control } = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>,
    mode: "onChange",
  })

  const fieldMap = {
    [FieldType.Text]: TextInput,
    [FieldType.Select]: SelectInput
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div {...props}>
        <div>
          {fields.map((field) => {
            const FieldComponent = fieldMap[field.type] || fieldMap[FieldType.Text];
            // @ts-expect-error FieldComponent will take extra properties based on the type
            return <FieldComponent 
              {...field}
              key={field.name}
              control={control} 
              name={field.name as Path<T>} rules={{ required: field.required }}
            />
          })}
        </div>
        {children}
        <div>
          <Button label={submitBtnLabel}/>
        </div>
      </div>
    </form>
  );
};

Form.displayName = 'Form';

export default Form;
