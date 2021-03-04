import React from 'react';

interface ActionButtonProps {
  value: string;
  className: string;
  disabled: boolean;
  onClick(): void;
}
export const ActionButton = (props: ActionButtonProps) => {
  return (
    <button type='button' {...props}>
      {props.value}
    </button>
  );
};
