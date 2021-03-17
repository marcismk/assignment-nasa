import { ReactElement } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import './Button.scss';

export enum ButtonTypes {
  PRIMARY = 'button-primary',
  LINK = 'button-link',
}

interface ButtonProps {
  label: string;
  type: ButtonTypes;
  onClick(): void;
  isLoading?: boolean;
}

export const Button = ({
  label,
  type,
  onClick,
  isLoading,
}: ButtonProps): ReactElement => {
  return (
    <button className={`button ${type}`} onClick={onClick} disabled={isLoading}>
      {isLoading ? <LoadingOutlined /> : label}
    </button>
  );
};
