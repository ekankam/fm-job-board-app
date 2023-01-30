import { useState, createContext } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, handleModalOpen, handleModalClose }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
