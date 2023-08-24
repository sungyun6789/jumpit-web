import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const PortalModal = ({ children }: Props) => {
  const modalRoot = document.querySelector('#modal') as HTMLElement;

  return createPortal(children, modalRoot);
};

export default PortalModal;
