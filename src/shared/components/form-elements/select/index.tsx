import React from 'react';
import { FieldProps } from 'components/form-elements/form-builder';
import Label from 'components/form-elements/label';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

export interface SelectInputProps extends React.HTMLProps<FieldProps> {
  options?: [{value: string, display: string}]
}

export const SelectInput = <T extends FieldValues,> ({
    label,
    options,
    children,
    ...props }: SelectInputProps & UseControllerProps<T>) => {
    const { field, fieldState } = useController(props);

    return (
      <div>
        {label && <Label
              text={label}
              required={props.required}/>
        }
        <div >
          <div>
            <select {...field}>
              {options && options.map((option) => 
                <option value={option.value}>{option.display}</option>
              )}
            </select>
            {children}
          </div>
          {fieldState.error && <p role="alert" title={fieldState.error.message}>{fieldState.error.message}</p>}
        </div>
      </div>
    );
};

SelectInput.displayName = 'SelectInput';

export default SelectInput;