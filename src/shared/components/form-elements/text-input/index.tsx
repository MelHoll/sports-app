import React from 'react';
import { FieldProps } from 'components/form-elements/form-builder';
import Label from 'components/form-elements/label';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

export interface TextInputProps extends React.HTMLProps<FieldProps> {
  
}

export const TextInput = <T extends FieldValues,> ({
    label,
    children,
    ...props }: TextInputProps & UseControllerProps<T>) => {
    const { field, fieldState } = useController(props);

    return (
      <div>
        {label && <Label
              text={label}
              required={props.required}/>
        }
        <div >
          <div>
            <input {...field} placeholder={props.name} />
            {children}
          </div>
          {fieldState.error && <p role="alert" title={fieldState.error.message}>{fieldState.error.message}</p>}
        </div>
      </div>
    );
  };

  TextInput.displayName = 'TextInput';

export default TextInput;