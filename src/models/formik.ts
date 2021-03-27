export interface InputProps {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  name: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'checkbox' | 'radio';
  autoComplete?: 'off';
  error?: string;
  onBlur?(e: React.FocusEvent): void;
  onFocus?(e: React.FocusEvent): void;
  onChange?(e: React.ChangeEvent): void;
  classes?: {
    wrapper?: string;
  };
}
export interface SelectProps {
  label: string;
  options: string[];
  error?: string;
  classes?: {
    wrapper?: string;
  };
  name: string;
  onBlur?(e: React.FocusEvent): void;
  onFocus?(e: React.FocusEvent): void;
  onChange?(e: React.ChangeEvent): void;
}
export interface FormikTextInputProps extends FormikInput<InputProps> {
  type?: 'number' | 'text' | 'email';
  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
}
export interface FormikSelectProps extends FormikInput<SelectProps> {
  value?: string;
  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}
export interface FormikCheckboxProps extends FormikCheckbox<InputProps> {
  type: 'checkbox' | 'radio';
  value?: string;
  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export type FormikInput<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur'>;
export type FormikCheckbox<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur' | 'type'>;
