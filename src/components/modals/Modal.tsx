import React, { ReactNode, useEffect } from 'react';
import './Modal.scss';

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;    
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {

  useEffect(() => {
    if (active) {
      document.body.classList.add('menu-active');
    } else {
      document.body.classList.remove('menu-active');
    }

    return () => {
      document.body.classList.remove('menu-active');
    };
  }, [active]);

  return (
    <div className= {active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__block active' : 'modal__block'} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;