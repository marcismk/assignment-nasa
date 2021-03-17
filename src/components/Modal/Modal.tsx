import { ReactElement } from 'react';
import { CloseSquareOutlined } from '@ant-design/icons';
import './Modal.scss';

interface ModalProps {
  children: ReactElement;
  onClose(): void;
}

export const Modal = ({ children, onClose }: ModalProps): ReactElement => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close">
          <CloseSquareOutlined onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};
