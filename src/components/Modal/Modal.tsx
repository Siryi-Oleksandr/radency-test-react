import React, { useEffect, useCallback, ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';
import { CloseBtn, ModalContainer, Overlay } from './Modal.styled';
import { RiCloseFill } from 'react-icons/ri';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Modal: FC<Props> = ({ children, onClose }) => {
  const handleKeyPress = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleOverlayClick = useCallback(
    (evt: React.MouseEvent<HTMLDivElement>) => {
      if (evt.target === evt.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseBtn onClick={onClose}>
          <RiCloseFill size="1.5em" />
        </CloseBtn>
        {children}
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
